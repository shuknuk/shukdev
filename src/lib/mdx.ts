import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
    slug: string;
    title: string;
    subtitle?: string;
    date: string;
    category?: string;
    author: string;
    image?: string;
    excerpt?: string;
    readingTime: string;
    content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

    const posts = files
        .map((filename) => {
            const slug = filename.replace(".mdx", "");
            const filePath = path.join(BLOG_DIR, filename);
            const fileContents = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title || slug,
                subtitle: data.subtitle,
                date: data.date || new Date().toISOString(),
                category: data.category,
                author: data.author || "Kinshuk Goel",
                image: data.image,
                excerpt: data.excerpt || content.slice(0, 160) + "...",
                readingTime: readingTime(content).text,
                content,
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title || slug,
        subtitle: data.subtitle,
        date: data.date || new Date().toISOString(),
        category: data.category,
        author: data.author || "Kinshuk Goel",
        image: data.image,
        excerpt: data.excerpt || content.slice(0, 160) + "...",
        readingTime: readingTime(content).text,
        content,
    };
}

export function getAllPostSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    return fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(".mdx", ""));
}
