import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kinshuk Goel | Software Engineer",
    template: "%s | Kinshuk Goel",
  },
  description:
    "Portfolio of Kinshuk Goel, a software engineer specializing in web development, AI, and open source contributions.",
  keywords: [
    "Kinshuk Goel",
    "software engineer",
    "web development",
    "AI",
    "open source",
    "portfolio",
    "Rutgers University",
  ],
  authors: [{ name: "Kinshuk Goel" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kinshuk-goel.vercel.app",
    title: "Kinshuk Goel | Software Engineer",
    description:
      "Portfolio of Kinshuk Goel. Building intelligent systems and full-stack platforms.",
    siteName: "Kinshuk Goel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinshuk Goel | Software Engineer",
    description:
      "Portfolio of Kinshuk Goel. Building intelligent systems and full-stack platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-muted/30">
            {/* Page container - the white/dark card */}
            <div className="max-w-4xl mx-auto bg-background border-x border-border min-h-screen shadow-sm">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
