'use client';

import { Check, Copy, X, Download, FileCode } from 'lucide-react';
import { AurDrawerSettings } from './AurDrawerSettings';

interface CommandDrawerProps {
    isOpen: boolean;
    isClosing: boolean;
    onClose: () => void;
    command: string;
    selectedCount: number;
    copied: boolean;
    onCopy: () => void;
    onDownload: () => void;
    onDownloadNixConfig: () => void;
    isNix: boolean;
    // AUR settings
    showAur: boolean;
    aurAppNames: string[];
    hasYayInstalled: boolean;
    setHasYayInstalled: (value: boolean) => void;
    selectedHelper: 'yay' | 'paru';
    setSelectedHelper: (helper: 'yay' | 'paru') => void;
}

// Slide-up drawer for command preview (mobile: bottom sheet, desktop: centered modal)
export function CommandDrawer({
    isOpen,
    isClosing,
    onClose,
    command,
    selectedCount,
    copied,
    onCopy,
    onDownload,
    onDownloadNixConfig,
    isNix,
    showAur,
    aurAppNames,
    hasYayInstalled,
    setHasYayInstalled,
    selectedHelper,
    setSelectedHelper,
}: CommandDrawerProps) {
    if (!isOpen) return null;

    const handleCopyAndClose = () => {
        onCopy();
        setTimeout(onClose, 3000);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                onClick={onClose}
                aria-hidden="true"
                style={{ animation: isClosing ? 'fadeOut 0.3s ease-out forwards' : 'fadeIn 0.3s ease-out' }}
            />

            {/* Drawer */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-title"
                className="fixed z-50 bg-[var(--bg-secondary)] border border-[var(--border-primary)] shadow-2xl
                    bottom-0 left-0 right-0 rounded-t-2xl
                    md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:max-w-2xl md:w-[90vw]"
                style={{
                    animation: isClosing
                        ? 'slideDown 0.3s cubic-bezier(0.32, 0, 0.67, 0) forwards'
                        : 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxHeight: '80vh'
                }}
            >
                {/* Drawer Handle - mobile only */}
                <div className="flex justify-center pt-3 pb-2 md:hidden">
                    <button
                        className="w-12 h-1.5 bg-[var(--text-muted)]/40 rounded-full cursor-pointer hover:bg-[var(--text-muted)] transition-colors"
                        onClick={onClose}
                        aria-label="关闭抽屉"
                    />
                </div>

                {/* Drawer Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 pb-3 md:pt-4 border-b border-[var(--border-primary)]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <span className="text-emerald-500 font-bold text-sm">$</span>
                        </div>
                        <div>
                            <h3 id="drawer-title" className="text-sm font-semibold text-[var(--text-primary)]">终端命令</h3>
                            <p className="text-xs text-[var(--text-muted)]">{selectedCount} 个应用 • 按 Esc 关闭</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        aria-label="关闭抽屉"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Command Content */}
                <div className="p-4 sm:p-6 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 200px)' }}>
                    {/* AUR Settings */}
                    {showAur && (
                        <AurDrawerSettings
                            aurAppNames={aurAppNames}
                            hasYayInstalled={hasYayInstalled}
                            setHasYayInstalled={setHasYayInstalled}
                            selectedHelper={selectedHelper}
                            setSelectedHelper={setSelectedHelper}
                        />
                    )}

                    {/* Terminal window */}
                    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[var(--border-primary)]">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#252525] border-b border-[var(--border-primary)]">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-xs text-[var(--text-muted)]">bash</span>
                            </div>
                            {/* Desktop action buttons */}
                            <div className="hidden md:flex items-center gap-2">
                                {isNix && (
                                    <button
                                        onClick={onDownloadNixConfig}
                                        className="h-7 px-3 flex items-center gap-1.5 rounded-md bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors text-xs font-medium"
                                        title="下载 NixOS configuration.nix"
                                    >
                                        <FileCode className="w-3.5 h-3.5" />
                                        Config
                                    </button>
                                )}
                                <button
                                    onClick={onDownload}
                                    className="h-7 px-3 flex items-center gap-1.5 rounded-md bg-[var(--bg-tertiary)]/50 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors text-xs font-medium"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    下载
                                </button>
                                <button
                                    onClick={handleCopyAndClose}
                                    className={`h-7 px-3 flex items-center gap-1.5 rounded-md text-xs font-medium transition-colors ${copied
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white'
                                        }`}
                                >
                                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                    {copied ? '已复制!' : '复制'}
                                </button>
                            </div>
                        </div>
                        <div className="p-4 font-mono text-sm overflow-x-auto">
                            <div className="flex gap-2">
                                <span className="text-emerald-400 select-none shrink-0">$</span>
                                <code className="text-gray-300 break-all whitespace-pre-wrap" style={{ lineHeight: '1.6' }}>
                                    {command}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Actions */}
                <div className="md:hidden flex flex-col items-stretch gap-3 px-4 py-4 border-t border-[var(--border-primary)]">
                    {isNix && (
                        <button
                            onClick={onDownloadNixConfig}
                            className="h-12 flex items-center justify-center gap-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors font-medium text-sm"
                        >
                            <FileCode className="w-4 h-4" />
                            下载 configuration.nix
                        </button>
                    )}
                    <button
                        onClick={onDownload}
                        className="flex-1 h-14 flex items-center justify-center gap-2 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-colors font-medium text-base"
                    >
                        <Download className="w-5 h-5" />
                        下载脚本
                    </button>
                    <button
                        onClick={handleCopyAndClose}
                        className={`flex-1 h-14 flex items-center justify-center gap-2 rounded-xl font-medium text-base transition-colors ${copied
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90'
                            }`}
                    >
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        {copied ? '已复制!' : '复制命令'}
                    </button>
                </div>
            </div>
        </>
    );
}
