import React from 'react';

// AI Stack icons
const AI_ICONS = {
    ChatGPT: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
    ),
    Copilot: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M9.75 14a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V15.5h-.75a.75.75 0 0 1 0-1.5h1.5zm4.5 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V15.5h-.75a.75.75 0 0 1 0-1.5h1.5zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5A8.5 8.5 0 0 1 20.5 12 8.5 8.5 0 0 1 12 20.5 8.5 8.5 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5zM9.75 6.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
        </svg>
    ),
    Gemini: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2.5l1.5 4l4 1.5l-4 1.5l-1.5 4l-1.5-4l-4-1.5l4-1.5l1.5-4M12 21.5l-1.5-4l-4-1.5l4-1.5l1.5-4l1.5 4l4 1.5l-4 1.5l-1.5 4M4.5 9.5l-1-2.5l-2.5-1l2.5-1l1-2.5l1 2.5l2.5 1l-2.5 1l-1 2.5z" />
        </svg>
    ),
    Kiro: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 3C7.5 3 4 6.5 4 11v7l2-2 2 2 2-2 2 2 2-2 2 2v-7c0-4.5-3.5-8-8-8z" />
            <circle cx="9.5" cy="10" r="1" fill="currentColor" />
            <circle cx="14.5" cy="10" r="1" fill="currentColor" />
        </svg>
    ),
    Tavily: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
            <path d="M11 6v10" />
            <path d="M6 11h10" />
        </svg>
    ),
    Cursor: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            <path d="M13 13l6 6" />
        </svg>
    ),
    LangChain: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
        </svg>
    ),
};

// AI Stack data organized by categories
const AI_STACK = {
    models: [
        {
            name: 'ChatGPT',
            icon: AI_ICONS.ChatGPT,
            color: 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-400/30',
            description: 'Layout suggestions, debugging, component bootstrapping'
        },
        {
            name: 'Gemini 2.5 Pro',
            icon: AI_ICONS.Gemini,
            color: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-400/30',
            description: 'AI agent reasoning, data synthesis, analysis'
        },
        {
            name: 'Tavily Search',
            icon: AI_ICONS.Tavily,
            color: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-400/30',
            description: 'Live web data retrieval for AI agents'
        },
        {
            name: 'LangChain',
            icon: AI_ICONS.LangChain,
            color: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-400/30',
            description: 'AI agent orchestration and tool integration'
        },
    ],
    tools: [
        {
            name: 'GitHub Copilot',
            icon: AI_ICONS.Copilot,
            color: 'bg-gray-100 dark:bg-gray-700/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-300/30',
            description: 'Code autocompletion, boilerplate generation'
        },
        {
            name: 'Cursor',
            icon: AI_ICONS.Cursor,
            color: 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-400/30',
            description: 'AI-powered code editor and pair programming'
        },
        {
            name: 'Kiro',
            icon: AI_ICONS.Kiro,
            color: 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-400/30',
            description: 'AI assistant for development workflows'
        },
    ],
};

export function AIStack() {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-10">AI Stack</h2>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* AI Models & APIs */}
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-foreground mb-6">
                            <span className="text-muted-foreground">Models & APIs</span>
                        </h3>
                        <div className="space-y-3">
                            {AI_STACK.models.map((ai) => {
                                const IconComponent = ai.icon;
                                return (
                                    <div
                                        key={ai.name}
                                        className={`flex items-start gap-3 p-3 rounded-lg border ${ai.color} transition-all duration-200 hover:scale-[1.02]`}
                                    >
                                        {IconComponent && <IconComponent className="w-5 h-5 mt-0.5 flex-shrink-0" />}
                                        <div className="text-left">
                                            <div className="font-medium text-sm">{ai.name}</div>
                                            <div className="text-xs opacity-80 mt-1">{ai.description}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* AI Tools */}
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-foreground mb-6">
                            <span className="text-muted-foreground">Development Tools</span>
                        </h3>
                        <div className="space-y-3">
                            {AI_STACK.tools.map((ai) => {
                                const IconComponent = ai.icon;
                                return (
                                    <div
                                        key={ai.name}
                                        className={`flex items-start gap-3 p-3 rounded-lg border ${ai.color} transition-all duration-200 hover:scale-[1.02]`}
                                    >
                                        {IconComponent && <IconComponent className="w-5 h-5 mt-0.5 flex-shrink-0" />}
                                        <div className="text-left">
                                            <div className="font-medium text-sm">{ai.name}</div>
                                            <div className="text-xs opacity-80 mt-1">{ai.description}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}