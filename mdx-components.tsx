import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mt-10 mb-4">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-semibold tracking-tight text-foreground mt-8 mb-3">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="text-muted-foreground leading-7 mb-4">{children}</p>
        ),
        a: ({ href, children }) => (
            <a
                href={href}
                className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
                {children}
            </a>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-2">
                {children}
            </ol>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground my-6">
                {children}
            </blockquote>
        ),
        code: ({ children }) => (
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
                {children}
            </code>
        ),
        pre: ({ children }) => (
            <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto my-6 text-sm">
                {children}
            </pre>
        ),
        ...components,
    };
}
