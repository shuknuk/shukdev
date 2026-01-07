import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { ChevronRight, Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-28 pb-20">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-foreground transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link
                        href="/blog"
                        className="hover:text-foreground transition-colors"
                    >
                        Blog
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground truncate max-w-[200px]">
                        {post.title}
                    </span>
                </nav>

                {/* Header section - inspired by screenshot */}
                <header className="mb-12">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                        {post.title}
                    </h1>

                    {/* Subtitle */}
                    {post.subtitle && (
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            {post.subtitle}
                        </p>
                    )}

                    {/* Hero image */}
                    {post.image && (
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-8 bg-muted">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Meta bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border">
                        <div className="flex items-center gap-4">
                            {/* Category tag */}
                            {post.category && (
                                <span className="text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md">
                                    {post.category}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {post.readingTime}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <MDXRemote source={post.content} />
                </div>

                {/* Back to blog link */}
                <div className="mt-16 pt-8 border-t border-border">
                    <Link
                        href="/blog"
                        className="text-primary hover:underline inline-flex items-center gap-2"
                    >
                        ← Back to all posts
                    </Link>
                </div>
            </div>
        </article>
    );
}
