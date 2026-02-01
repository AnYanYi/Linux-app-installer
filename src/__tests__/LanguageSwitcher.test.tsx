import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';

// Mock useI18n hook
vi.mock('@/hooks/useI18n', () => ({
    useI18n: () => ({
        locale: 'zh',
        setLocale: vi.fn(),
    }),
}));

describe('LanguageSwitcher', () => {
    it('应该渲染语言切换按钮', () => {
        const { container } = render(<LanguageSwitcher />);
        const button = container.querySelector('button');
        expect(button).toBeTruthy();
    });

    it('应该显示当前语言的反向选项', () => {
        const { container } = render(<LanguageSwitcher />);
        // 当前是中文，应该显示 EN
        expect(container.textContent).toContain('EN');
    });

    it('应该有地球图标', () => {
        const { container } = render(<LanguageSwitcher />);
        const svg = container.querySelector('svg');
        expect(svg).toBeTruthy();
    });
});
