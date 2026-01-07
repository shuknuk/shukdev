"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-6 w-11 rounded-full bg-neutral-200 dark:bg-neutral-800" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isDark ? "bg-neutral-700" : "bg-neutral-200",
                className
            )}
            aria-label="Toggle theme"
        >
            <span
                className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200",
                    isDark ? "translate-x-6" : "translate-x-1"
                )}
            />
        </button>
    );
}
