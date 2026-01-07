"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const highlights = ["Clarity", "Speed", "Data", "Impact"];

export function About() {
    return (
        <section id="about" className="px-6 md:px-10 py-12 border-t border-border">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-[2fr,1fr] gap-8"
            >
                <div>
                    <h2 className="text-xs font-medium uppercase tracking-wider text-primary mb-4">
                        00 // The Mission
                    </h2>
                    <h3 className="text-2xl font-bold mb-4">Build. Publish. Own.</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        I&apos;m a CS student at Rutgers building real software that ships.
                        LLM agents, full-stack apps, browser extensions — projects that get
                        used in real workflows. The wins. The failures. The journey to
                        becoming a builder.
                    </p>
                </div>

                <div className="space-y-2">
                    {highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span className="text-sm">{item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
