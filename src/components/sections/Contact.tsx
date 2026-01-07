"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="px-6 md:px-10 py-12 border-t border-border">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-xs font-medium uppercase tracking-wider text-primary mb-4">
                    03 // Contact
                </h2>
                <p className="text-muted-foreground mb-6">
                    Open to opportunities and collaborations.
                </p>

                <div className="flex items-center gap-6">
                    <Link
                        href="mailto:kinshukgoel2@gmail.com"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        Email
                    </Link>
                    <Link
                        href="https://linkedin.com/in/kinshukgoel2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/shuknuk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
