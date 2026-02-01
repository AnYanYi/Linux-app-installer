// Preset Selector Component
// 预设配置选择器

'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, ChevronDown } from 'lucide-react';
import { presets, type Preset } from '@/lib/presets';
import type { DistroId } from '@/lib/data';

interface PresetSelectorProps {
    selectedDistro: DistroId;
    onSelectPreset: (appIds: string[]) => void;
}

export function PresetSelector({ selectedDistro, onSelectPreset }: PresetSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
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
        }
    }, [isOpen]);

    const handleSelectPreset = (preset: Preset) => {
        onSelectPreset(preset.apps);
        setIsOpen(false);
    };

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
                    width: '380px',
                    maxHeight: '70vh',
                    overflowY: 'auto',
                    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)',
                    transformOrigin: 'top right',
                    animation: 'distroDropdownOpen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
            >
                {/* Header */}
                <div className="px-3 py-2 mb-2">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                        <span className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-widest">预设配置</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mt-1 ml-6">根据使用场景一键选择</p>
                </div>

                {/* Presets List */}
                <div className="space-y-1">
                    {presets.map((preset, i) => (
                        <button
                            key={preset.id}
                            onClick={() => handleSelectPreset(preset)}
                            className="group w-full flex items-center gap-3 py-3 px-3 rounded-xl border-none cursor-pointer text-left transition-[background-color,transform] duration-200 bg-transparent hover:bg-[var(--bg-hover)] hover:scale-[1.01]"
                            style={{
                                animation: `distroItemSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.03}s both`,
                            }}
                        >
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl transition-transform duration-200 bg-[var(--bg-tertiary)] group-hover:scale-105">
                                {preset.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm font-medium text-[var(--text-primary)]">{preset.name}</span>
                                    <span className="text-[10px] font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">{preset.apps.length}</span>
                                </div>
                                <p className="text-xs text-[var(--text-muted)] mt-0.5">{preset.description}</p>
                            </div>
                        </button>
                    ))}
                </div>
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
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">预设</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {mounted && createPortal(dropdown, document.body)}
        </>
    );
}
