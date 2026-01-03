'use client';

// Skeleton UI while localStorage hydrates. Inline CSS for instant animation.
export function LoadingSkeleton() {
    return (
        <>
            {/* Inline keyframes for immediate animation - no external CSS needed */}
            <style jsx global>{`
                @keyframes skeletonShimmer {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.7; }
                }
                .sk-pulse {
                    animation: skeletonShimmer 1.5s ease-in-out infinite;
                    will-change: opacity;
                }
            `}</style>

            <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
                {/* Header Skeleton */}
                <header className="pt-8 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                                {/* Logo placeholder */}
                                <div
                                    className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl bg-[var(--bg-tertiary)] sk-pulse"
                                />
                                <div className="flex flex-col gap-2">
                                    <div className="h-6 w-32 bg-[var(--bg-tertiary)] rounded sk-pulse" />
                                    <div
                                        className="h-3 w-48 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                        style={{ animationDelay: '0.1s' }}
                                    />
                                    <div
                                        className="h-3 w-36 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                        style={{ animationDelay: '0.2s' }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div
                                    className="h-6 w-16 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                    style={{ animationDelay: '0.1s' }}
                                />
                                <div
                                    className="h-6 w-16 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                    style={{ animationDelay: '0.15s' }}
                                />
                                <div className="w-px h-6 bg-[var(--border-primary)]" />
                                <div
                                    className="h-6 w-12 bg-[var(--bg-tertiary)] rounded-full sk-pulse"
                                    style={{ animationDelay: '0.2s' }}
                                />
                                <div
                                    className="h-10 w-28 bg-[var(--bg-tertiary)] rounded-2xl sk-pulse"
                                    style={{ animationDelay: '0.25s' }}
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Grid Skeleton */}
                <main className="px-4 sm:px-6 pb-40">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-8">
                            {[...Array(5)].map((_, colIdx) => (
                                <div key={colIdx} className="space-y-5">
                                    {[...Array(3)].map((_, catIdx) => (
                                        <div key={catIdx} className="mb-5">
                                            {/* Category header skeleton */}
                                            <div className="flex items-center gap-2 mb-3 pb-1.5 border-b border-[var(--border-primary)]">
                                                <div
                                                    className="w-3 h-3 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                    style={{ animationDelay: `${colIdx * 0.08}s` }}
                                                />
                                                <div
                                                    className="h-3 w-20 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                    style={{ animationDelay: `${colIdx * 0.08 + 0.03}s` }}
                                                />
                                            </div>
                                            {/* App items skeleton */}
                                            {[...Array(3 + catIdx)].map((_, appIdx) => (
                                                <div
                                                    key={appIdx}
                                                    className="flex items-center gap-2.5 py-1.5 px-2"
                                                >
                                                    <div
                                                        className="w-4 h-4 rounded border-2 border-[var(--bg-tertiary)] sk-pulse"
                                                        style={{ animationDelay: `${colIdx * 0.08 + appIdx * 0.02}s` }}
                                                    />
                                                    <div
                                                        className="w-5 h-5 rounded bg-[var(--bg-tertiary)] sk-pulse"
                                                        style={{ animationDelay: `${colIdx * 0.08 + appIdx * 0.02 + 0.01}s` }}
                                                    />
                                                    <div
                                                        className="h-4 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                        style={{
                                                            width: `${60 + (appIdx % 4) * 10}%`,
                                                            animationDelay: `${colIdx * 0.08 + appIdx * 0.02 + 0.02}s`
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Footer Skeleton - Matches new nvim-style footer */}
                <div className="fixed bottom-0 left-0 right-0 p-3">
                    <div className="relative w-[85%] mx-auto flex flex-col gap-1.5">
                        {/* ShortcutsBar skeleton */}
                        <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between h-8">
                                <div className="flex items-center">
                                    <div className="w-20 h-full bg-[var(--text-primary)]/20 sk-pulse" />
                                    <div className="flex items-center gap-2 px-3">
                                        <div className="w-3 h-3 bg-[var(--bg-secondary)] rounded sk-pulse" />
                                        <div className="w-20 h-3 bg-[var(--bg-secondary)] rounded sk-pulse" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-4">
                                    <div className="w-32 h-3 bg-[var(--bg-secondary)] rounded sk-pulse hidden sm:block" />
                                    <div className="w-12 h-full bg-[var(--text-primary)]/20 sk-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Command Bar skeleton */}
                        <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)]/40 rounded-lg overflow-hidden">
                            <div className="flex items-center h-11">
                                <div
                                    className="w-24 h-full bg-indigo-500/10 sk-pulse flex-shrink-0"
                                    style={{ animationDelay: '0.1s' }}
                                />
                                <div className="flex-1 flex items-center justify-center px-4 bg-[var(--bg-secondary)]">
                                    <div
                                        className="w-48 h-4 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                        style={{ animationDelay: '0.15s' }}
                                    />
                                </div>
                                <div
                                    className="w-20 h-full bg-[var(--bg-tertiary)] sk-pulse flex-shrink-0"
                                    style={{ animationDelay: '0.2s' }}
                                />
                                <div
                                    className="w-16 h-full bg-[var(--text-primary)]/20 sk-pulse flex-shrink-0"
                                    style={{ animationDelay: '0.25s' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
