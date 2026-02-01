'use client';

import { Check } from 'lucide-react';

// Shows AUR packages in a bar with "I have yay" checkbox
export function AurBar({
    aurAppNames,
    hasYayInstalled,
    setHasYayInstalled,
}: {
    aurAppNames: string[];
    hasYayInstalled: boolean;
    setHasYayInstalled: (value: boolean) => void;
}) {
    return (
        <div
            className="bg-[var(--bg-secondary)]/95 backdrop-blur-md border-t border-[var(--border-primary)]"
            style={{ transition: 'background-color 0.5s, border-color 0.5s' }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                    {/* Info section */}
                    <div className="flex items-center gap-2 flex-1 min-w-0 flex-wrap">
                        <span className="text-xs font-medium text-[var(--text-muted)]" style={{ transition: 'color 0.5s' }}>
                            AUR packages:
                        </span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                            {aurAppNames.map((appName, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-0.5 bg-[var(--accent)]/15 text-[var(--accent)] rounded text-xs font-medium"
                                    style={{ transition: 'background-color 0.5s, color 0.5s' }}
                                >
                                    {appName}
                                </span>
                            ))}
                        </div>
                        <span className="text-xs text-[var(--text-muted)] hidden sm:inline" style={{ transition: 'color 0.5s' }}>
                            — {hasYayInstalled ? 'will use yay' : 'will install yay first'}
                        </span>
                    </div>

                    {/* Checkbox */}
                    <label className="flex items-center gap-2 cursor-pointer select-none group shrink-0">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={hasYayInstalled}
                                onChange={(e) => setHasYayInstalled(e.target.checked)}
                                className="sr-only"
                            />
                            <div
                                className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-150
                                    ${hasYayInstalled
                                        ? 'bg-[var(--accent)] border-[var(--accent)]'
                                        : 'bg-[var(--bg-primary)] border-[var(--border-secondary)] group-hover:border-[var(--accent)]'}`}
                                style={{ transition: 'background-color 0.5s, border-color 0.5s' }}
                            >
                                {hasYayInstalled && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                            </div>
                        </div>
                        <span className="text-xs text-[var(--text-secondary)] whitespace-nowrap" style={{ transition: 'color 0.5s' }}>
                            I have yay installed
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
}
