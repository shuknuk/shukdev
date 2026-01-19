"use client";

import { updateAdminCredentials } from "@/app/login/actions";
import { useState } from "react";
import { Save, Loader2 } from "lucide-react";

export function CredentialForm() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setMessage(null);

        const result = await updateAdminCredentials(formData);
        setLoading(false);

        if (result.success) {
            setMessage({ type: 'success', text: 'Credentials updated successfully!' });
            // Reset form
            const form = document.getElementById('cred-form') as HTMLFormElement;
            form.reset();
        } else {
            setMessage({ type: 'error', text: result.error || 'Failed to update credentials' });
        }
    }

    return (
        <form id="cred-form" action={handleSubmit} className="space-y-4 max-w-md">
            <div>
                <label className="block text-xs font-mono uppercase text-[--foreground-secondary] mb-2 pl-1">
                    New Passphrase
                </label>
                <input
                    name="passphrase"
                    type="password"
                    className="w-full bg-[--background-secondary] border border-[--border] rounded-lg px-4 py-3 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm placeholder:text-[--foreground-secondary]/50"
                    placeholder="New secure passphrase"
                />
            </div>

            <div>
                <label className="block text-xs font-mono uppercase text-[--foreground-secondary] mb-2 pl-1">
                    Update Email (Optional)
                </label>
                <input
                    name="email"
                    type="email"
                    className="w-full bg-[--background-secondary] border border-[--border] rounded-lg px-4 py-3 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm placeholder:text-[--foreground-secondary]/50"
                    placeholder="new-email@example.com"
                />
            </div>

            {message && (
                <div className={`p-3 rounded-lg text-xs font-medium ${message.type === 'success'
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                        : 'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}>
                    {message.text}
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-accent hover:bg-accent-light text-white font-bold rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 text-sm"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Saving...
                    </>
                ) : (
                    <>
                        <Save className="w-4 h-4" />
                        Update Credentials
                    </>
                )}
            </button>
        </form>
    );
}
