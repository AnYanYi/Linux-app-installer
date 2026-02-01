// 语言切换组件示例
'use client';

import { Globe } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export function LanguageSwitcher() {
    const { locale, setLocale } = useI18n();

    return (
        <button
            onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
            aria-label="切换语言"
        >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">
                {locale === 'zh' ? 'EN' : '中文'}
            </span>
        </button>
    );
}
