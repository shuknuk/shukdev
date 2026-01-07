"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export function Header() {
    return (
        <header className="px-6 py-6 border-b border-[--border] bg-[--background]/80 backdrop-blur-md sticky top-0 z-50">
            <nav className="max-w-5xl mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-black tracking-tighter hover:opacity-70 transition-opacity"
                >
                    KINSHUK GOEL
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        href="#projects"
                        className="text-sm font-medium text-[--foreground-secondary] hover:text-[--foreground] transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="https://github.com/shuknuk"
                        target="_blank"
                        className="text-sm font-medium text-[--foreground-secondary] hover:text-[--foreground] transition-colors"
                    >
                        GitHub
                    </Link>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
