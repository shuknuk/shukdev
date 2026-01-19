import { CredentialForm } from "@/components/admin/CredentialForm";
import { getProjects, toggleProjectVisibility } from "./actions";
import { Boxes, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default async function AdminPage() {
    const projects = await getProjects();

    return (
        <div className="min-h-screen p-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-4xl font-black tracking-tighter mb-2">ADMIN DASHBOARD</h1>
                <p className="text-[--foreground-secondary] mb-4">Manage project visibility on the main page.</p>
            </div>
            <div className="flex gap-4">
                <Link
                    href="#settings"
                    className="px-4 py-2 border border-[--border] rounded-lg hover:bg-[--background-secondary] transition-colors text-sm font-medium mb-4"
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
                        className="px-4 py-2 border border-[--border] rounded-lg hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition-colors text-sm font-medium mb-4"
                    >
                        Logout & Exit
                    </button>
                </form>
            </div>


            <div className="grid gap-4">
                {projects.map((project) => {
                    const isHidden = project.is_hidden || false;

                    return (
                        <div
                            key={project.id}
                            className="bg-[--background-secondary]/30 border border-[--border] rounded-xl p-6 flex items-center justify-between hover:border-accent/30 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg bg-[--background-secondary] border border-[--border] ${isHidden ? 'opacity-50' : 'text-accent'}`}>
                                    <Boxes className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-lg ${isHidden ? 'opacity-50 line-through' : ''}`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[--foreground-secondary]">{project.category}</p>
                                </div>
                            </div>

                            <form action={async () => {
                                "use server";
                                await toggleProjectVisibility(project.id, !isHidden);
                            }}>
                                <button
                                    type="submit"
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${isHidden
                                        ? "bg-[--background-secondary] text-[--foreground-secondary] border border-[--border] hover:bg-[--border]"
                                        : "bg-accent text-white hover:bg-accent-light"
                                        }`}
                                >
                                    {isHidden ? (
                                        <>
                                            <Eye className="w-4 h-4" />
                                            Show Project
                                        </>
                                    ) : (
                                        <>
                                            <EyeOff className="w-4 h-4" />
                                            Hide Project
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    );
                })}
            </div>

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
