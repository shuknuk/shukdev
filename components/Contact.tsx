import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-16">
            <div className="section-container max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-primary/50"></div>
                    <span className="text-sm font-mono text-primary uppercase tracking-wider">/contact</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">
                    Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                    <a
                        href="mailto:kinshukgoel2@gmail.com"
                        className="group glass-card flex flex-col items-center p-6 hover:border-primary/50 glow-accent-hover"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                            <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors truncate w-full text-center">
                            kinshukgoel2@gmail.com
                        </span>
                    </a>

                    <a
                        href="https://linkedin.com/in/kinshukgoel2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group glass-card flex flex-col items-center p-6 hover:border-primary/50 glow-accent-hover"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                            <Linkedin className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">LinkedIn</h3>
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            Connect on LinkedIn
                        </span>
                    </a>

                    <a
                        href="https://github.com/shuknuk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group glass-card flex flex-col items-center p-6 hover:border-primary/50 glow-accent-hover"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                            <Github className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">GitHub</h3>
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            Follow on GitHub
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};
