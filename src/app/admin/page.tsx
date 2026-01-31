import { CredentialForm } from "@/components/admin/CredentialForm";
import { ProjectEditor } from "@/components/admin/ProjectEditor";
import { NewProjectForm } from "@/components/admin/NewProjectForm";
import { getProjects, toggleProjectVisibility, updateProjectOrder } from "./actions";
import { Boxes, Eye, EyeOff, ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";

export default async function AdminPage() {
    const projects = await getProjects();

    return (
        <div className="min-h-screen p-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-4xl font-black tracking-tighter mb-2">ADMIN DASHBOARD</h1>
                <p className="text-[--foreground-secondary] mb-4">Manage your portfolio projects.</p>
            </div>
            <div className="flex gap-4 items-center justify-between mb-8">
                <div className="flex gap-4">
                    <Link
                        href="#settings"
                        className="px-4 py-2 border border-[--border] rounded-lg hover:bg-[--background-secondary] transition-colors text-sm font-medium"
                    >
                        Settings
                    </Link>
                    <form action={async () => {
                        "use server";
                        const { signOut } = await import("@/app/login/actions");
                        await signOut();
                    }}>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-[--border] rounded-lg hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition-colors text-sm font-medium"
                        >
                            Logout & Exit
                        </button>
                    </form>
                </div>
                <NewProjectForm />
            </div>


            <div className="grid gap-6">
                {projects.map((project) => {
                    const isHidden = project.is_hidden || false;

                    return (
                        <div
                            key={project.id}
                            className={`bg-white dark:bg-[#1a1a1a] border-2 ${isHidden ? 'border-gray-300 dark:border-gray-700' : 'border-gray-200 dark:border-gray-800'} rounded-2xl p-8 hover:border-accent/50 transition-all shadow-sm hover:shadow-md`}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className={`p-4 rounded-xl ${isHidden ? 'bg-gray-100 dark:bg-gray-800 opacity-50' : 'bg-accent/10'} border-2 ${isHidden ? 'border-gray-200 dark:border-gray-700' : 'border-accent/20'}`}>
                                        <Boxes className={`w-7 h-7 ${isHidden ? 'text-gray-400' : 'text-accent'}`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className={`font-bold text-2xl ${isHidden ? 'opacity-50 line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                                                {project.title}
                                            </h3>
                                            <span className="px-2 py-1 rounded-md text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                                                #{project.display_order}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <span className="px-3 py-1 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                                {project.category}
                                            </span>
                                            {project.rank && (
                                                <span className="px-3 py-1 rounded-lg text-sm font-bold bg-accent/10 text-accent border-2 border-accent/30">
                                                    {project.rank}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    {/* Display Order Controls */}
                                    <div className="flex flex-col gap-1">
                                        <form action={async () => {
                                            "use server";
                                            const currentIndex = projects.findIndex(p => p.id === project.id);
                                            if (currentIndex > 0) {
                                                const prevProject = projects[currentIndex - 1];
                                                await updateProjectOrder(project.id, prevProject.display_order || 0);
                                                await updateProjectOrder(prevProject.id, project.display_order || 0);
                                            }
                                        }}>
                                            <button
                                                type="submit"
                                                disabled={projects.findIndex(p => p.id === project.id) === 0}
                                                className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:border-accent hover:text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                                title="Move up"
                                            >
                                                <ChevronUp className="w-4 h-4" />
                                            </button>
                                        </form>
                                        <form action={async () => {
                                            "use server";
                                            const currentIndex = projects.findIndex(p => p.id === project.id);
                                            if (currentIndex < projects.length - 1) {
                                                const nextProject = projects[currentIndex + 1];
                                                await updateProjectOrder(project.id, nextProject.display_order || 0);
                                                await updateProjectOrder(nextProject.id, project.display_order || 0);
                                            }
                                        }}>
                                            <button
                                                type="submit"
                                                disabled={projects.findIndex(p => p.id === project.id) === projects.length - 1}
                                                className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:border-accent hover:text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                                title="Move down"
                                            >
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                        </form>
                                    </div>

                                    {/* Visibility Toggle */}
                                    <form action={async () => {
                                        "use server";
                                        await toggleProjectVisibility(project.id, !isHidden);
                                    }}>
                                        <button
                                            type="submit"
                                            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow ${isHidden
                                                ? "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                                                : "bg-accent text-white border-2 border-accent hover:bg-accent/90"
                                                }`}
                                        >
                                            {isHidden ? (
                                                <>
                                                    <Eye className="w-5 h-5" />
                                                    Show Project
                                                </>
                                            ) : (
                                                <>
                                                    <EyeOff className="w-5 h-5" />
                                                    Hide Project
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>


                            {/* Project Details */}
                            <div className="space-y-5 mb-6">
                                <div>
                                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Description</p>
                                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
                                </div>
                                {project.caseStudy && (
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Case Study</p>
                                        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                <span className="font-semibold text-gray-700 dark:text-gray-300">Challenge:</span> {project.caseStudy.challenge.substring(0, 100)}...
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Edit Button */}
                            <ProjectEditor project={project} />
                        </div>
                    );
                })}
            </div >

            <div id="settings" className="mt-16 pt-12 border-t border-[--border]">
                <h2 className="text-2xl font-bold mb-6">Admin Settings</h2>

                <div className="bg-[--background-secondary]/30 border border-[--border] rounded-xl p-8">
                    <h3 className="font-bold text-lg mb-4">Update Credentials</h3>
                    <p className="text-sm text-[--foreground-secondary] mb-6">
                        Update your admin passphrase or email address. Leave fields blank to keep them unchanged.
                    </p>

                    <CredentialForm />
                </div>
            </div>

            <div className="mt-12 text-center opacity-40">
                <p className="text-[10px] font-mono uppercase tracking-widest">
                    Admin Access &bull; Use with Caution
                </p>
            </div>
        </div >
    );
}
