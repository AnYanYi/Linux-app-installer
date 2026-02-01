'use client';

import { ExternalLink, Code, FileText, Tag } from 'lucide-react';
import { type AppData } from '@/lib/data';

interface AppDetailsPanelProps {
    app: AppData;
    onClose?: () => void;
}

export function AppDetailsPanel({ app, onClose }: AppDetailsPanelProps) {
    const hasDetails = app.website || app.license || app.sourceCode || (app.tags && app.tags.length > 0);

    if (!hasDetails) return null;

    return (
        <div className="mt-2 p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-2 text-sm">
                {/* Website */}
                {app.website && (
                    <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0" />
                        <span className="text-[var(--text-muted)] min-w-[60px]">官网:</span>
                        <a
                            href={app.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] hover:underline truncate"
                        >
                            {app.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                        </a>
                    </div>
                )}

                {/* License */}
                {app.license && (
                    <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0" />
                        <span className="text-[var(--text-muted)] min-w-[60px]">许可证:</span>
                        <span className="text-[var(--text-secondary)]">{app.license}</span>
                    </div>
                )}

                {/* Source Code */}
                {app.sourceCode && (
                    <div className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0" />
                        <span className="text-[var(--text-muted)] min-w-[60px]">源代码:</span>
                        <a
                            href={app.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] hover:underline truncate"
                        >
                            {app.sourceCode.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                        </a>
                    </div>
                )}

                {/* Tags */}
                {app.tags && app.tags.length > 0 && (
                    <div className="flex items-start gap-2">
                        <Tag className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-muted)] min-w-[60px]">标签:</span>
                        <div className="flex flex-wrap gap-1.5 flex-1">
                            {app.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
