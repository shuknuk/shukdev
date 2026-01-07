"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="px-6 md:px-10 py-4">
                <div className="flex items-center justify-between">
                    {/* Name as logo */}
                    <Link href="/" className="group">
                        <span className="font-bold text-foreground">KINSHUK</span>
                        <span className="font-bold text-primary">GOEL</span>
                    </Link>

                    {/* Simple nav */}
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/#projects"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            PROJECTS
                        </Link>
                        <Link
                            href="/blog"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            BLOG
                        </Link>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
