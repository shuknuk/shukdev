"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                <div className="flex flex-col leading-tight">
                    <Link href="/" className="font-bold text-lg tracking-tight text-neutral-900 dark:text-neutral-100">
                        Kinshuk Goel
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        <Link href="#projects" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                            Projects
                        </Link>
                        <Link href="https://github.com/shuknuk" target="_blank" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                            GitHub
                        </Link>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
