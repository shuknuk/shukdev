import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Kinshuk Goel | Digital Architect",
  description:
    "Portfolio of Kinshuk Goel - CS student at Rutgers, AI Engineer, and Full-stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-accent/30">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="page-container">
            <main className="page-sheet">
              <Header />
              {children}
            </main>
          </div>
          <ScrollIndicator />
          <Analytics />
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
