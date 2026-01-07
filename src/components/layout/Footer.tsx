import Link from "next/link";

export function Footer() {
    return (
        <footer className="px-6 md:px-10 py-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Kinshuk Goel
                </p>
                <p className="text-xs text-muted-foreground/70 italic">
                    &quot;Make stuff. Break it. Build it again.&quot;
                </p>
            </div>
        </footer>
    );
}
