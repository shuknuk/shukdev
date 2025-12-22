import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                    Get in Touch
                </h2>
                <p className="text-muted-foreground mb-12 max-w-xl mx-auto text-lg">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <a
                        href="mailto:kinshukgoel2@gmail.com"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/50 hover:border-border transition-all hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all">
                            <Mail className="w-6 h-6 text-foreground/80 md:w-7 md:h-7" />
                        </div>
                        <h3 className="font-semibold mb-1 text-lg">Email</h3>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate w-full px-2">
                            kinshukgoel2@gmail.com
                        </span>
                    </a>

                    <a
                        href="https://linkedin.com/in/kinshukgoel2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/50 hover:border-border transition-all hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-all">
                            <Linkedin className="w-6 h-6 text-foreground/80 md:w-7 md:h-7" />
                        </div>
                        <h3 className="font-semibold mb-1 text-lg">LinkedIn</h3>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            Connect on LinkedIn
                        </span>
                    </a>

                    <a
                        href="https://github.com/shuknuk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/50 hover:border-border transition-all hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all">
                            <Github className="w-6 h-6 text-foreground/80 md:w-7 md:h-7" />
                        </div>
                        <h3 className="font-semibold mb-1 text-lg">GitHub</h3>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            Follow on GitHub
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};
