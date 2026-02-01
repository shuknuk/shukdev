"use client";

import { Project } from "@/types";
import { updateProject } from "@/app/admin/actions";
import { useState, useTransition } from "react";
import { Pencil, Save, X, Check } from "lucide-react";
import { MarkdownInput } from "@/components/shared/MarkdownInput";

export function ProjectEditor({ project }: { project: Project }) {
    const [isEditing, setIsEditing] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState<{
        title: string;
        description: string;
        category: "Featured" | "Project Archive";
        rank: string;
        caseStudy: {
            challenge: string;
            solution: string;
            learnings: string;
        } | null;
    }>({
        title: project.title,
        description: project.description,
        category: project.category,
        rank: project.rank || "",
        caseStudy: project.caseStudy || null,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        startTransition(async () => {
            const result = await updateProject(project.id, {
                title: formData.title,
                description: formData.description,
                category: formData.category,
                rank: formData.rank || null,
                caseStudy: formData.caseStudy,
            });

            if (result.success) {
                setIsEditing(false);
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000);
            } else {
                setError(result.error || "Failed to update project");
            }
        });
    };

    const handleCancel = () => {
        setFormData({
            title: project.title,
            description: project.description,
            category: project.category,
            rank: project.rank || "",
            caseStudy: project.caseStudy || null,
        });
        setIsEditing(false);
        setError(null);
    };

    if (!isEditing) {
        return (
            <div className="relative">
                {showSuccess && (
                    <div className="absolute -top-2 right-0 flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl text-green-700 dark:text-green-400 text-sm font-semibold animate-in fade-in slide-in-from-top-2 shadow-sm">
                        <Check className="w-4 h-4" />
                        Saved successfully!
                    </div>
                )}
                <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-5 py-3 text-sm font-bold bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:border-accent hover:text-accent rounded-xl transition-all shadow-sm hover:shadow"
                >
                    <Pencil className="w-4 h-4" />
                    Edit Project Details
                </button>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-[#1a1a1a] border-b-2 border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between z-10">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Project</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            ID: <span className="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{project.id}</span>
                        </p>
                    </div>
                    <button
                        onClick={handleCancel}
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

                    {/* Basic Info Section */}
                    <div className="space-y-5">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-800 pb-2">
                            Basic Information
                        </h4>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                Project Title *
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({ ...formData, title: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white"
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
                                    onChange={(e) =>
                                        setFormData({ ...formData, category: e.target.value as "Featured" | "Project Archive" })
                                    }
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
                                    onChange={(e) =>
                                        setFormData({ ...formData, rank: e.target.value })
                                    }
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
                            placeholder="Enter project description...\n\nSupports **bold**, *italic*, [links](url), and more!"
                            rows={5}
                            required
                        />
                    </div>

                    {/* Case Study Section */}
                    <div className="space-y-5 pt-6 border-t-2 border-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                Case Study
                            </h4>
                            {formData.caseStudy && (
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, caseStudy: null })}
                                    className="text-sm font-semibold text-red-600 dark:text-red-400 hover:underline"
                                >
                                    Remove Case Study
                                </button>
                            )}
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
                                    onChange={(value) =>
                                        setFormData({
                                            ...formData,
                                            caseStudy: formData.caseStudy ? { ...formData.caseStudy, challenge: value } : null,
                                        })
                                    }
                                    placeholder="Describe the challenge you faced...\n\nWhat problem were you trying to solve?"
                                    rows={6}
                                    required={!!formData.caseStudy}
                                />

                                {/* Solution */}
                                <MarkdownInput
                                    label="Solution"
                                    value={formData.caseStudy.solution}
                                    onChange={(value) =>
                                        setFormData({
                                            ...formData,
                                            caseStudy: formData.caseStudy ? { ...formData.caseStudy, solution: value } : null,
                                        })
                                    }
                                    placeholder="Explain your solution...\n\nHow did you approach and solve the problem?"
                                    rows={6}
                                    required={!!formData.caseStudy}
                                />

                                {/* Learnings */}
                                <MarkdownInput
                                    label="Learnings"
                                    value={formData.caseStudy.learnings}
                                    onChange={(value) =>
                                        setFormData({
                                            ...formData,
                                            caseStudy: formData.caseStudy ? { ...formData.caseStudy, learnings: value } : null,
                                        })
                                    }
                                    placeholder="Share what you learned...\n\nWhat insights or skills did you gain from this project?"
                                    rows={6}
                                    required={!!formData.caseStudy}
                                />
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
                                    Saving Changes...
                                </>
                            ) : (
                                <>
                                    <Save className="w-5 h-5" />
                                    Save Changes
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
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
