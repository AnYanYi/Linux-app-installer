'use client';

import { useEffect } from 'react';

// Next.js error boundary - shows when something explodes
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log error to console (could send to error reporting service)
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    出现错误
                </h2>
                <p className="text-sm text-[var(--text-muted)] mb-6">
                    发生了意外错误。您的选择已保存，将会被恢复。
                </p>
                <button
                    onClick={reset}
                    className="w-full h-12 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                    重试
                </button>
                <button
                    onClick={() => window.location.reload()}
                    className="w-full h-12 mt-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm"
                >
                    重新加载页面
                </button>
            </div>
        </div>
    );
}
