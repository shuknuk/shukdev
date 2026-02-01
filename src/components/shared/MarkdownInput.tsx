import { Eye } from "lucide-react";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { useState } from "react";

interface MarkdownInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
    required?: boolean;
    showHint?: boolean;
}

/**
 * Markdown input field with preview toggle and helpful hints
 */
export function MarkdownInput({
    label,
    value,
    onChange,
    placeholder = "Enter text...",
    rows = 6,
    required = false,
    showHint = true,
}: MarkdownInputProps) {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                    {label} {required && "*"}
                </label>
                <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="text-xs font-semibold flex items-center gap-1 text-accent hover:underline"
                >
                    <Eye className="w-3 h-3" />
                    {showPreview ? "Edit" : "Preview"}
                </button>
            </div>

            {showPreview ? (
                <div className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl min-h-[120px]">
                    {value ? (
                        <MarkdownRenderer content={value} />
                    ) : (
                        <p className="text-gray-400 dark:text-gray-500 italic text-sm">
                            No content to preview
                        </p>
                    )}
                </div>
            ) : (
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    rows={rows}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 dark:text-white font-mono text-sm"
                    placeholder={placeholder}
                    required={required}
                />
            )}

            {showHint && !showPreview && (
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <p className="font-semibold">Markdown supported:</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 font-mono">
                        <span>**bold**</span>
                        <span>*italic*</span>
                        <span>[link](url)</span>
                        <span>`code`</span>
                        <span>- list item</span>
                        <span>1. numbered</span>
                    </div>
                </div>
            )}
        </div>
    );
}
