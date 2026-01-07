"use client";

import React from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function LaserBackground({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, rgba(34, 197, 94, 0.15), transparent)`;

    return (
        <div
            className={cn("relative group w-full h-full overflow-hidden", containerClassName)}
            onMouseMove={onMouseMove}
        >
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

            {/* Laser glow effect */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: maskImage }}
            />

            {/* Content */}
            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
}
