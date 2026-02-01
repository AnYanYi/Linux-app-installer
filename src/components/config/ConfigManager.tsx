// Config Management Component
// 配置管理组件

'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, Upload, Share2, Save, Clock, ChevronDown } from 'lucide-react';
import type { DistroId } from '@/lib/data';
import {
    createConfig,
    exportConfig,
    importConfig,
    generateShareUrl,
    copyToClipboard,
    saveToRecentConfigs,
    getRecentConfigs,
    type AppConfig,
} from '@/lib/configManager';

interface ConfigManagerProps {
    selectedDistro: DistroId;
    selectedApps: Set<string>;
    onLoadConfig: (distro: DistroId, apps: string[]) => void;
}

export function ConfigManager({ selectedDistro, selectedApps, onLoadConfig }: ConfigManagerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [recentConfigs, setRecentConfigs] = useState<AppConfig[]>([]);
    const [showCopySuccess, setShowCopySuccess] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPos({
                top: rect.bottom + 8,
                right: window.innerWidth - rect.right,
            });
            setRecentConfigs(getRecentConfigs());
        }
    }, [isOpen]);

    const handleExport = () => {
        const config = createConfig(selectedDistro, selectedApps);
        exportConfig(config);
        saveToRecentConfigs(config);
        setIsOpen(false);
    };

    const handleImport = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const config = await importConfig(file);
            onLoadConfig(config.distro, config.apps);
            saveToRecentConfigs(config);
            setIsOpen(false);
        } catch (err) {
            alert(err instanceof Error ? err.message : '导入失败');
        }
        e.target.value = '';
    };

    const handleSave = () => {
        const name = prompt('为此配置命名（可选）：');
        if (name === null) return;

        const config = createConfig(selectedDistro, selectedApps, name || undefined);
        saveToRecentConfigs(config);
        setRecentConfigs(getRecentConfigs());
    };

    const handleShare = async () => {
        const config = createConfig(selectedDistro, selectedApps);
        const url = generateShareUrl(config);
        const success = await copyToClipboard(url);

        if (success) {
            setShowCopySuccess(true);
            setTimeout(() => setShowCopySuccess(false), 2000);
        } else {
            alert('复制失败，请手动复制：\n' + url);
        }
    };

    const handleLoadRecent = (config: AppConfig) => {
        onLoadConfig(config.distro, config.apps);
        setIsOpen(false);
    };

    if (selectedApps.size === 0) return null;

    const dropdown = isOpen && mounted ? (
        <>
            {/* Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                className="backdrop-blur-[2px]"
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 99998,
                    background: 'rgba(0,0,0,0.05)',
                }}
            />
            {/* Dropdown */}
            <div
                className="bg-[var(--bg-secondary)] border border-[var(--border-primary)]"
                style={{
                    position: 'fixed',
                    top: dropdownPos.top,
                    right: dropdownPos.right,
                    zIndex: 99999,
                    borderRadius: '20px',
                    padding: '10px',
                    width: '300px',
                    maxHeight: '70vh',
                    overflowY: 'auto',
                    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)',
                    transformOrigin: 'top right',
                    animation: 'distroDropdownOpen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
            >
                {/* Header */}
                <div className="px-3 py-2 mb-1">
                    <span className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-widest">配置管理</span>
                </div>

                {/* Actions */}
                <div className="space-y-0.5 mb-2">
                    <button
                        onClick={handleSave}
                        className="w-full flex items-center gap-3 py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left"
                    >
                        <Save className="w-4 h-4 text-[var(--accent)]" />
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-[var(--text-primary)]">保存配置</div>
                            <div className="text-xs text-[var(--text-muted)]">保存到本地历史</div>
                        </div>
                    </button>

                    <button
                        onClick={handleExport}
                        className="w-full flex items-center gap-3 py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left"
                    >
                        <Download className="w-4 h-4 text-green-500" />
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-[var(--text-primary)]">导出为文件</div>
                            <div className="text-xs text-[var(--text-muted)]">下载 JSON</div>
                        </div>
                    </button>

                    <button
                        onClick={handleImport}
                        className="w-full flex items-center gap-3 py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left"
                    >
                        <Upload className="w-4 h-4 text-blue-500" />
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-[var(--text-primary)]">导入配置</div>
                            <div className="text-xs text-[var(--text-muted)]">从文件加载</div>
                        </div>
                    </button>

                    <button
                        onClick={handleShare}
                        className="w-full flex items-center gap-3 py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left relative"
                    >
                        <Share2 className="w-4 h-4 text-purple-500" />
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-[var(--text-primary)]">分享链接</div>
                            <div className="text-xs text-[var(--text-muted)]">复制 URL</div>
                        </div>
                        {showCopySuccess && (
                            <span className="text-xs text-green-500 font-medium">已复制!</span>
                        )}
                    </button>
                </div>

                {/* Recent Configs */}
                {recentConfigs.length > 0 && (
                    <>
                        <div className="px-3 py-2 border-t border-[var(--border-primary)] mt-2">
                            <div className="flex items-center gap-2">
                                <Clock className="w-3 h-3 text-[var(--text-muted)]" />
                                <span className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-widest">最近配置</span>
                            </div>
                        </div>
                        <div className="space-y-0.5">
                            {recentConfigs.map((config) => (
                                <button
                                    key={config.timestamp}
                                    onClick={() => handleLoadRecent(config)}
                                    className="w-full py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left"
                                >
                                    <div className="text-sm font-medium text-[var(--text-primary)] truncate">
                                        {config.name || '未命名配置'}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mt-0.5">
                                        <span className="uppercase">{config.distro}</span>
                                        <span>·</span>
                                        <span>{config.apps.length} 个</span>
                                        <span>·</span>
                                        <span>{new Date(config.timestamp).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' })}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    ) : null;

    return (
        <>
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] border border-[var(--border-primary)] transition-all duration-200"
            >
                <Save className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">配置</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
            />
            {mounted && createPortal(dropdown, document.body)}
        </>
    );
}
