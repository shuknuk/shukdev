import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

/**
 * Reusable markdown renderer with consistent styling and plugin support.
 * Supports:
 * - Paragraphs (double line break)
 * - Bold (**text** or __text__)
 * - Italic (*text* or _text_)
 * - Lists (- item or * item or 1. item)
 * - Links ([text](url))
 * - Code (`inline` or ```block```)
 * - Strikethrough (~~text~~)
 */
export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
    return (
        <div className={`prose prose-sm dark:prose-invert max-w-none ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={{
                    // Ensure paragraphs have proper spacing
                    p: ({ children }) => (
                        <p className="mb-4 last:mb-0 leading-relaxed">{children}</p>
                    ),
                    // Style links
                    a: ({ children, href }) => (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline font-medium"
                        >
                            {children}
                        </a>
                    ),
                    // Style lists
                    ul: ({ children }) => (
                        <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
                    ),
                    li: ({ children }) => (
                        <li className="leading-relaxed">{children}</li>
                    ),
                    // Style code blocks
                    code: ({ className, children }) => {
                        const isInline = !className;
                        return isInline ? (
                            <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
                                {children}
                            </code>
                        ) : (
                            <code className={`block bg-gray-200 dark:bg-gray-800 p-3 rounded-lg overflow-x-auto font-mono text-sm ${className}`}>
                                {children}
                            </code>
                        );
                    },
                    // Style headings
                    h1: ({ children }) => (
                        <h1 className="text-2xl font-bold mb-3 mt-6 first:mt-0">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-xl font-bold mb-3 mt-5 first:mt-0">{children}</h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-lg font-bold mb-2 mt-4 first:mt-0">{children}</h3>
                    ),
                    // Style blockquotes
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-accent pl-4 italic my-4 text-gray-700 dark:text-gray-300">
                            {children}
                        </blockquote>
                    ),
                    // Style strong/bold
                    strong: ({ children }) => (
                        <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>
                    ),
                    // Style emphasis/italic
                    em: ({ children }) => (
                        <em className="italic">{children}</em>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
