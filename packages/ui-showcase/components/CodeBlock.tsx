'use client';

import React, { useState } from 'react';

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
}

export function CodeBlock({ code, language = 'tsx', title }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code: ', err);
        }
    };

    return (
        <div className="relative">
            {title && (
                <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-t-lg">
                    <span className="text-sm font-medium">{title}</span>
                    <span className="text-xs text-gray-400">{language}</span>
                </div>
            )}
            <div className="relative bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs transition-colors"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
                <pre className="text-sm">
                    <code className={`language-${language}`}>{code}</code>
                </pre>
            </div>
        </div>
    );
} 