"use client";

import { createProject } from "@/app/admin/actions";
import { useState, useTransition } from "react";
import { Plus, Save, X } from "lucide-react";
import { MarkdownInput } from "@/components/shared/MarkdownInput";

export function NewProjectForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: "",
        category: "Featured" as "Featured" | "Project Archive",
        rank: "",
        tech: "",
        githubUrl: "",
        liveUrl: "",
        caseStudy: null as {
            challenge: string;
            solution: string;
            learnings: string;
        } | null,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validate ID format (lowercase, hyphens only)
        if (!/^[a-z0-9-]+$/.test(formData.id)) {
            setError("ID must be lowercase letters, numbers, and hyphens only");
            return;
        }

        startTransition(async () => {
            const result = await createProject({
                id: formData.id,
                title: formData.title,
                description: formData.description,
                category: formData.category,
                rank: formData.rank || null,
                tech: formData.tech.split(",").map(t => t.trim()).filter(Boolean),
                links: {
                    github: formData.githubUrl || undefined,
                    live: formData.liveUrl || undefined,
                },
                caseStudy: formData.caseStudy,
            });

            if (result.success) {
                setIsOpen(false);
                // Reset form
                setFormData({
                    id: "",
                    title: "",
                    description: "",
                    category: "Featured",
                    rank: "",
                    tech: "",
                    githubUrl: "",
                    liveUrl: "",
                    caseStudy: null,
                });
            } else {
                setError(result.error || "Failed to create project");
            }
        });
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-3 px-6 py-4 bg-accent text-white font-bold text-base rounded-xl hover:bg-accent/90 transition-all shadow-md hover:shadow-lg"
            >
                <Plus className="w-5 h-5" />
                Add New Project
            </button>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-[#1a1a1a] border-b-2 border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between z-10">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Project</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Add a new project to your portfolio
                        </p>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {error && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-xl text-red-700 dark:text-red-400 text-sm font-semibold">
                            {error}
                        </div>
                    )}

                    {/* Basic Info */}
                    <div className="space-y-5">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-800 pb-2">
                            Basic Information
                        </h4>

                        {/* ID */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                Project ID * <span className="text-xs font-normal text-gray-500">(lowercase, hyphens only, e.g., "my-project")</span>
                            </label>
                            <input
                                type="text"
                                value={formData.id}
                                onChange={(e) => setFormData({ ...formData, id: e.target.value.toLowerCase() })}
                                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white font-mono"
                                placeholder="my-awesome-project"
                                required
                            />
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                Project Title *
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white"
                                placeholder="My Awesome Project"
                                required
                            />
                        </div>

                        {/* Category and Rank */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                    Category *
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value as "Featured" | "Project Archive" })}
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white"
                                    required
                                >
                                    <option value="Featured">Featured</option>
                                    <option value="Project Archive">Project Archive</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                    Rank
                                </label>
                                <select
                                    value={formData.rank}
                                    onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white"
                                >
                                    <option value="">None</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Bronze">Bronze</option>
                                    <option value="In Progress">In Progress</option>
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <MarkdownInput
                            label="Description"
                            value={formData.description}
                            onChange={(value) => setFormData({ ...formData, description: value })}
                            placeholder="A brief description of your project...\n\nSupports **bold**, *italic*, [links](url), and more!"
                            rows={5}
                            required
                        />

                        {/* Tech Stack */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                Tech Stack * <span className="text-xs font-normal text-gray-500">(comma-separated)</span>
                            </label>
                            <input
                                type="text"
                                value={formData.tech}
                                onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white"
                                placeholder="React, TypeScript, Next.js, Tailwind"
                                required
                            />
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    value={formData.githubUrl}
                                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white"
                                    placeholder="https://github.com/..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                    Live URL
                                </label>
                                <input
                                    type="url"
                                    value={formData.liveUrl}
                                    onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white"
                                    placeholder="https://..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Case Study */}
                    <div className="space-y-5 pt-6 border-t-2 border-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                Case Study (Optional)
                            </h4>
                            {!formData.caseStudy && (
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, caseStudy: { challenge: "", solution: "", learnings: "" } })}
                                    className="text-sm font-semibold text-accent hover:underline"
                                >
                                    Add Case Study
                                </button>
                            )}
                        </div>

                        {formData.caseStudy && (
                            <div className="space-y-5 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-5">
                                {/* Challenge */}
                                <MarkdownInput
                                    label="Challenge"
                                    value={formData.caseStudy.challenge}
                                    onChange={(value) => setFormData({
                                        ...formData,
                                        caseStudy: formData.caseStudy ? { ...formData.caseStudy, challenge: value } : null,
                                    })}
                                    placeholder="Describe the challenge you faced...\n\nWhat problem were you trying to solve?"
                                    rows={6}
                                />

                                {/* Solution */}
                                <MarkdownInput
                                    label="Solution"
                                    value={formData.caseStudy.solution}
                                    onChange={(value) => setFormData({
                                        ...formData,
                                        caseStudy: formData.caseStudy ? { ...formData.caseStudy, solution: value } : null,
                                    })}
                                    placeholder="Explain your solution...\n\nHow did you approach and solve the problem?"
                                    rows={6}
                                />

                                {/* Learnings */}
                                <MarkdownInput
                                    label="Learnings"
                                    value={formData.caseStudy.learnings}
                                    onChange={(value) => setFormData({
                                        ...formData,
                                        caseStudy: formData.caseStudy ? { ...formData.caseStudy, learnings: value } : null,
                                    })}
                                    placeholder="Share what you learned...\n\nWhat insights or skills did you gain from this project?"
                                    rows={6}
                                />

                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, caseStudy: null })}
                                    className="text-sm font-semibold text-red-600 dark:text-red-400 hover:underline"
                                >
                                    Remove Case Study
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6 border-t-2 border-gray-200 dark:border-gray-800">
                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-bold text-base rounded-xl hover:bg-accent/90 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isPending ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Creating Project...
                                </>
                            ) : (
                                <>
                                    <Save className="w-5 h-5" />
                                    Create Project
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            disabled={isPending}
                            className="px-6 py-4 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold text-base rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
