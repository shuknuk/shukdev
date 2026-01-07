"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-[--border] bg-[--background]/80 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                <div className="flex flex-col leading-tight">
                    <Link href="/" className="font-bold text-lg tracking-tight">
                        Kinshuk Goel
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-[--foreground-secondary]">
                        <Link href="#projects" className="hover:text-[--foreground] transition-colors">
                            Projects
                        </Link>
                        <Link href="https://github.com/shuknuk" target="_blank" className="hover:text-[--foreground] transition-colors">
                            GitHub
                        </Link>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
