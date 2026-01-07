"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="px-6 md:px-10 pt-16 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Status badge */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Status:
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                        Building
                    </span>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                    AI ENGINEER.
                    <br />
                    <span className="text-muted-foreground">BUILDER.</span>
                    <br />
                    CREATOR.
                </h1>

                {/* Description */}
                <p className="text-lg text-muted-foreground max-w-md mb-8">
                    Building intelligent digital products.{" "}
                    <span className="text-foreground font-medium">Apps. Systems. Tools.</span>{" "}
                    Built from scratch, one project at a time.
                </p>

                {/* CTA */}
                <button
                    onClick={scrollToProjects}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    See my work
                    <ArrowDown className="w-4 h-4" />
                </button>
            </motion.div>
        </section>
    );
}
