'use client';

import { Component, ReactNode } from 'react';
import { logComponentError } from '@/lib/logger';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

/**
 * Error Boundary 组件 - 捕获子组件的错误并显示友好的错误页面
 */
export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        logComponentError(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
                            <span className="text-3xl">⚠️</span>
                        </div>
                        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                            出错了
                        </h2>
                        <p className="text-sm text-[var(--text-muted)] mb-4">
                            应用遇到了一个意外错误，请刷新页面重试。
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-lg hover:opacity-90 transition-opacity"
                        >
                            刷新页面
                        </button>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mt-4 text-left">
                                <summary className="text-xs text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-secondary)]">
                                    技术细节
                                </summary>
                                <pre className="mt-2 p-3 bg-[var(--bg-tertiary)] rounded text-xs text-red-400 overflow-auto">
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
