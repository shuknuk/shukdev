"use client";

import { useEffect, useRef } from "react";

interface LaserLine {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
    speed: number;
}

export function LaserBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const linesRef = useRef<LaserLine[]>([]);
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Initialize laser lines
        const initLines = () => {
            const lines: LaserLine[] = [];
            const numLines = 25;

            for (let i = 0; i < numLines; i++) {
                lines.push(createLine(canvas.width, canvas.height));
            }

            linesRef.current = lines;
        };

        const createLine = (width: number, height: number): LaserLine => {
            const startX = Math.random() * width;
            const startY = Math.random() * height;
            const length = 50 + Math.random() * 150;
            const angle = Math.random() * Math.PI * 2;

            return {
                x1: startX,
                y1: startY,
                x2: startX + Math.cos(angle) * length,
                y2: startY + Math.sin(angle) * length,
                opacity: 0.1 + Math.random() * 0.3,
                speed: 0.2 + Math.random() * 0.5,
            };
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw lines
            linesRef.current.forEach((line, index) => {
                ctx.beginPath();
                ctx.moveTo(line.x1, line.y1);
                ctx.lineTo(line.x2, line.y2);

                // Create gradient for each line
                const gradient = ctx.createLinearGradient(line.x1, line.y1, line.x2, line.y2);
                gradient.addColorStop(0, `rgba(136, 192, 208, 0)`);
                gradient.addColorStop(0.5, `rgba(136, 192, 208, ${line.opacity})`);
                gradient.addColorStop(1, `rgba(136, 192, 208, 0)`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1;
                ctx.stroke();

                // Move line
                line.x1 += line.speed * 0.5;
                line.y1 += line.speed * 0.3;
                line.x2 += line.speed * 0.5;
                line.y2 += line.speed * 0.3;

                // Fade in/out
                line.opacity += (Math.random() - 0.5) * 0.02;
                line.opacity = Math.max(0.05, Math.min(0.4, line.opacity));

                // Reset line if it goes off screen
                if (line.x1 > canvas.width + 200 || line.y1 > canvas.height + 200) {
                    linesRef.current[index] = createLine(canvas.width, canvas.height);
                    linesRef.current[index].x1 = -100;
                    linesRef.current[index].y1 = Math.random() * canvas.height;
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        initLines();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-100"
            style={{ mixBlendMode: "screen" }}
        />
    );
}
