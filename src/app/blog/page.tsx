import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Thoughts on AI engineering, coding, and building products.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Page header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Blog
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Thoughts on AI engineering, web development, and building products
                        that matter.
                    </p>
                </div>

                {/* Posts grid */}
                {posts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg mb-4">
                            No posts yet. Check back soon!
                        </p>
                        <Link
                            href="/"
                            className="text-primary hover:underline inline-flex items-center gap-2"
                        >
                            Back to home
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-border/80 transition-all hover:shadow-lg"
                            >
                                <Link href={`/blog/${post.slug}`} className="block p-6 md:p-8">
                                    {/* Category tag */}
                                    {post.category && (
                                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                                            {post.category}
                                        </span>
                                    )}

                                    {/* Title */}
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>

                                    {/* Subtitle */}
                                    {post.subtitle && (
                                        <p className="text-muted-foreground text-lg mb-4">
                                            {post.subtitle}
                                        </p>
                                    )}

                                    {/* Excerpt */}
                                    <p className="text-muted-foreground mb-6 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta info */}
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4" />
                                            {post.readingTime}
                                        </span>
                                    </div>

                                    {/* Read more arrow */}
                                    <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-5 h-5 text-primary" />
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
