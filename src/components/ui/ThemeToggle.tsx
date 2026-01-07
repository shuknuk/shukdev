"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-12 h-6 rounded-full bg-secondary/50 animate-pulse" />
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-12 h-6 rounded-full bg-secondary border border-border transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            {/* Track background indicator */}
            <span
                className={`absolute inset-0.5 rounded-full transition-colors duration-300 ${isDark ? "bg-primary/20" : "bg-yellow-400/20"
                    }`}
            />

            {/* Sliding circle */}
            <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-foreground shadow-sm transition-all duration-300 flex items-center justify-center ${isDark ? "left-0.5" : "left-[calc(100%-22px)]"
                    }`}
            >
                {/* Sun/Moon icon inside the circle */}
                <svg
                    className={`w-3 h-3 transition-transform duration-300 ${isDark ? "text-primary" : "text-background"
                        }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isDark ? (
                        // Moon icon
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    ) : (
                        // Sun icon
                        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
                    )}
                </svg>
            </span>
        </button>
    );
}
