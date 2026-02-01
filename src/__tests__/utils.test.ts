import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('utils', () => {
    describe('cn (className merge)', () => {
        it('应该合并多个 className', () => {
            const result = cn('class1', 'class2', 'class3');
            expect(result).toContain('class1');
            expect(result).toContain('class2');
            expect(result).toContain('class3');
        });

        it('应该处理条件性的 className', () => {
            const isActive = true;
            const result = cn('base', isActive && 'active');
            expect(result).toContain('base');
            expect(result).toContain('active');
        });

        it('应该过滤掉 false 值', () => {
            const result = cn('base', false, null, undefined, 'valid');
            expect(result).toContain('base');
            expect(result).toContain('valid');
            expect(result).not.toContain('false');
        });

        it('应该合并 Tailwind 冲突的类', () => {
            // tailwind-merge 应该处理冲突的类
            const result = cn('px-2', 'px-4');
            expect(result).toContain('px-4');
            expect(result).not.toContain('px-2');
        });
    });
});
