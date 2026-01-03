'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { HelpCircle, X } from 'lucide-react';
import { analytics } from '@/lib/analytics';

// The "?" help modal - shows keyboard shortcuts and how to use the app
export function HowItWorks() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [mounted, setMounted] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Global keyboard shortcut: ? to toggle modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if typing in input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

            // Skip if Ctrl/Alt/Meta are pressed (Shift is allowed for ?)
            if (e.ctrlKey || e.altKey || e.metaKey) return;

            if (e.key === '?' || (e.shiftKey && e.key === '/')) {
                e.preventDefault();
                if (isOpen) {
                    handleClose();
                } else {
                    handleOpen();
                }
            }

            // Close on Escape
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleOpen = () => {
        setIsClosing(false);
        setIsOpen(true);
        analytics.helpOpened();
    };

    const handleClose = () => {
        setIsClosing(true);
        analytics.helpClosed();
        // Wait for exit animation to finish
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 200);
    };

    const modal = (
        <>
            {/* Backdrop with blur */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[99998]"
                onClick={handleClose}
                style={{
                    animation: isClosing
                        ? 'fadeOut 0.2s ease-out forwards'
                        : 'fadeIn 0.25s ease-out'
                }}
            />

            {/* Modal */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="how-it-works-title"
                className="fixed bg-[var(--bg-secondary)] border border-[var(--border-primary)] shadow-2xl z-[99999]"
                style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '20px',
                    width: '440px',
                    maxWidth: 'calc(100vw - 32px)',
                    maxHeight: 'min(80vh, 650px)',
                    display: 'flex',
                    flexDirection: 'column',
                    animation: isClosing
                        ? 'modalSlideOut 0.2s ease-out forwards'
                        : 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    overflow: 'hidden',
                }}
            >
                {/* Header */}
                <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-[var(--border-primary)] shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center">
                            <HelpCircle className="w-5 h-5 text-[var(--accent)]" />
                        </div>
                        <div>
                            <h3 id="how-it-works-title" className="text-lg font-semibold text-[var(--text-primary)]">如何使用 Linux 应用安装器</h3>
                            <p className="text-xs text-[var(--text-muted)]">快速指南 & 键盘快捷键</p>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto p-5 space-y-5" style={{ scrollbarGutter: 'stable' }}>
                    {/* Quick Start Steps */}
                    <div>
                        <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">快速开始</h4>
                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--accent)] shrink-0">1</div>
                                <p className="text-sm text-[var(--text-secondary)]">从下拉菜单选择您的发行版</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--accent)] shrink-0">2</div>
                                <p className="text-sm text-[var(--text-secondary)]">勾选您想要安装的应用</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--accent)] shrink-0">3</div>
                                <p className="text-sm text-[var(--text-secondary)]">复制命令或下载脚本</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--accent)] shrink-0">4</div>
                                <p className="text-sm text-[var(--text-secondary)]">粘贴到终端 (<code className="text-xs bg-[var(--bg-tertiary)] px-1 py-0.5 rounded">Ctrl+Shift+V</code>) 并运行</p>
                            </div>
                        </div>
                    </div>

                    {/* Unavailable Apps */}
                    <div className="pt-3 border-t border-[var(--border-primary)]">
                        <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">应用不可用？</h4>
                        <div className="space-y-2.5 text-xs text-[var(--text-muted)] leading-relaxed">
                            <p>灰色应用不在您的发行版仓库中。您可以：</p>
                            <ul className="space-y-2 ml-2">
                                <li className="flex gap-2">
                                    <span className="text-[var(--accent)]">•</span>
                                    <span><strong className="text-[var(--text-secondary)]">使用 Flatpak/Snap：</strong>在发行版选择器中切换到 Flatpak 或 Snap 以获取通用软件包</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[var(--accent)]">•</span>
                                    <span><strong className="text-[var(--text-secondary)]">从网站下载：</strong>访问应用官网下载 <code className="bg-[var(--bg-tertiary)] px-1 rounded">.deb</code>、<code className="bg-[var(--bg-tertiary)] px-1 rounded">.rpm</code> 或 <code className="bg-[var(--bg-tertiary)] px-1 rounded">.AppImage</code></span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[var(--accent)]">•</span>
                                    <span><strong className="text-[var(--text-secondary)]">悬停在 ⓘ 图标：</strong>某些不可用的应用会显示替代下载方式的链接</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Arch & AUR */}
                    <div className="pt-3 border-t border-[var(--border-primary)]">
                        <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">Arch Linux & AUR</h4>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                            某些 Arch 软件包位于 <strong className="text-[var(--text-secondary)]">AUR</strong>（Arch 用户仓库）。
                            TuxMate 使用 <code className="bg-[var(--bg-tertiary)] px-1 rounded">yay</code> 或 <code className="bg-[var(--bg-tertiary)] px-1 rounded">paru</code> 来安装它们。
                            选择 AUR 软件包时，弹窗会询问您使用哪个助手。您可以随时使用 <kbd className="px-1 py-0.5 bg-[var(--bg-tertiary)] rounded text-[10px]">1</kbd> (yay) 或 <kbd className="px-1 py-0.5 bg-[var(--bg-tertiary)] rounded text-[10px]">2</kbd> (paru) 切换助手。
                        </p>
                    </div>

                    {/* Keyboard Shortcuts */}
                    <div className="pt-3 border-t border-[var(--border-primary)]">
                        <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">键盘快捷键</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">↑↓←→</kbd>
                                <span className="text-[var(--text-muted)]">导航</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">hjkl</kbd>
                                <span className="text-[var(--text-muted)]">Vim 导航</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">空格</kbd>
                                <span className="text-[var(--text-muted)]">切换选择</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">/</kbd>
                                <span className="text-[var(--text-muted)]">搜索应用</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">y</kbd>
                                <span className="text-[var(--text-muted)]">复制命令</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">d</kbd>
                                <span className="text-[var(--text-muted)]">下载脚本</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">c</kbd>
                                <span className="text-[var(--text-muted)]">清除选择</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">t</kbd>
                                <span className="text-[var(--text-muted)]">切换主题</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">Tab</kbd>
                                <span className="text-[var(--text-muted)]">打开预览</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">Esc</kbd>
                                <span className="text-[var(--text-muted)]">关闭弹窗</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <kbd className="px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono">?</kbd>
                                <span className="text-[var(--text-muted)]">此帮助</span>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tips */}
                    <div className="pt-3 border-t border-[var(--border-primary)]">
                        <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">专家提示</h4>
                        <ul className="space-y-2 text-xs text-[var(--text-muted)] leading-relaxed">
                            <li className="flex gap-2">
                                <span className="text-emerald-500">💡</span>
                                <span><strong className="text-[var(--text-secondary)]">下载按钮</strong>可生成完整的 Shell 脚本，包含进度跟踪、错误处理和总结报告</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-emerald-500">💡</span>
                                <span>
                                    <strong className="text-[var(--text-secondary)]">运行脚本：</strong>{' '}
                                    <code className="bg-[var(--bg-tertiary)] px-1 rounded">chmod +x linux-installer-*.sh && ./linux-installer-*.sh</code> 或{' '}
                                    <code className="bg-[var(--bg-tertiary)] px-1 rounded">bash linux-installer-*.sh</code>
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-emerald-500">💡</span>
                                <span>您的选择会<strong className="text-[var(--text-secondary)]">自动保存</strong>——随时回来修改您的设置</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-emerald-500">💡</span>
                                <span>运行 <code className="bg-[var(--bg-tertiary)] px-1 rounded">.deb</code> 文件：<code className="bg-[var(--bg-tertiary)] px-1 rounded">sudo dpkg -i file.deb</code></span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-emerald-500">💡</span>
                                <span>运行 <code className="bg-[var(--bg-tertiary)] px-1 rounded">.rpm</code> 文件：<code className="bg-[var(--bg-tertiary)] px-1 rounded">sudo dnf install ./file.rpm</code></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            <button
                ref={triggerRef}
                onClick={handleOpen}
                className={`flex items-center gap-1.5 text-sm transition-[color,transform] duration-200 hover:scale-105 ${isOpen ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'}`}
            >
                <HelpCircle className="w-4 h-4" />
                <span className="hidden sm:inline whitespace-nowrap">如何使用？</span>
            </button>
            {isOpen && mounted && typeof document !== 'undefined' && createPortal(modal, document.body)}
        </>
    );
}
