// 国际化 Hook
'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Locale, defaultLocale, translations, type Translations } from '@/lib/i18n-enhanced';

interface I18nStore {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: keyof Translations, params?: Record<string, string | number>) => string;
}

export const useI18n = create<I18nStore>()(
    persist(
        (set, get) => ({
            locale: defaultLocale,
            setLocale: (locale: Locale) => set({ locale }),
            t: (key: keyof Translations, params?: Record<string, string | number>) => {
                const { locale } = get();
                let text = translations[locale]?.[key] || translations[defaultLocale][key] || key;
                
                if (params) {
                    Object.entries(params).forEach(([param, value]) => {
                        text = text.replace(`{${param}}`, String(value));
                    });
                }
                
                return text;
            },
        }),
        {
            name: 'locale-storage',
        }
    )
);
