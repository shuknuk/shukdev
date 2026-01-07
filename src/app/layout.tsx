import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kinshuk Goel | Software Engineer",
    description: "CS student at Rutgers. Building AI tools and full-stack apps that actually get used in real workflows.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased bg-[--background] text-[--foreground]">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Header />
                    <main className="pt-14">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
