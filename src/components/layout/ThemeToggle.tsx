"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-6 w-11 rounded-full bg-[--border]" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[--background-secondary] border border-[--border]",
                className
            )}
            aria-label="Toggle theme"
        >
            <span
                className={cn(
                    "inline-block h-4 w-4 transform rounded-full shadow-md transition-transform duration-200",
                    isDark
                        ? "translate-x-6 bg-[#88C0D0]"
                        : "translate-x-1 bg-[#5E81AC]"
                )}
            />
        </button>
    );
}
