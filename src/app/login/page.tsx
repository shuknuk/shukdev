"use client";

import { login } from "./actions";
import { LaserBackground } from "@/components/ui/LaserBackground";
import { Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError(null);

        const result = await login(formData);

        if (result?.error) {
            setError(result.error);
            setLoading(false);
        }
        // If successful, the server action handling redirect will take over
    }

    return (
        <div className="min-h-[calc(100vh-80px)] p-4 md:p-6 lg:p-8 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative group rounded-2xl overflow-hidden border border-[--border]"
            >
                <LaserBackground containerClassName="absolute inset-0" />

                <div className="relative z-10 p-8 md:p-10">
                    <div className="flex justify-center mb-6">
                        <div className="p-3 bg-[--background-secondary]/50 rounded-full border border-[--border]">
                            <Lock className="w-6 h-6 text-accent" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-black tracking-tighter text-center mb-8">
                        PORTFOLIO ADMIN
                    </h1>

                    <form action={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-mono uppercase text-[--foreground-secondary] mb-2 pl-1">
                                Passphrase
                            </label>
                            <input
                                name="passphrase"
                                type="password"
                                required
                                className="w-full bg-[--background-secondary]/30 border border-[--border] rounded-lg px-4 py-3 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm placeholder:text-[--foreground-secondary]/50"
                                placeholder="Enter admin passphrase"
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs text-center font-medium">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                "Verifying..."
                            ) : (
                                <>
                                    Enter Dashboard <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
