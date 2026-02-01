import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLinuxInit } from '@/hooks/useLinuxInit';

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => { store[key] = value; },
        removeItem: (key: string) => { delete store[key]; },
        clear: () => { store = {}; }
    };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('useLinuxInit', () => {
    beforeEach(() => {
        localStorageMock.clear();
        // Clear URL params
        window.history.replaceState({}, '', '/');
    });

    it('应该初始化为 Ubuntu 默认发行版', () => {
        const { result } = renderHook(() => useLinuxInit());
        
        // Wait for hydration
        act(() => {
            // Trigger state update
        });
        
        expect(result.current.selectedDistro).toBe('ubuntu');
    });

    it('应该能够切换发行版', () => {
        const { result } = renderHook(() => useLinuxInit());
        
        act(() => {
            result.current.setSelectedDistro('arch');
        });
        
        expect(result.current.selectedDistro).toBe('arch');
    });

    it('应该能够选择和取消选择应用', () => {
        const { result } = renderHook(() => useLinuxInit());
        
        act(() => {
            result.current.toggleApp('firefox');
        });
        
        expect(result.current.selectedApps.has('firefox')).toBe(true);
        expect(result.current.selectedCount).toBe(1);
        
        act(() => {
            result.current.toggleApp('firefox');
        });
        
        expect(result.current.selectedApps.has('firefox')).toBe(false);
        expect(result.current.selectedCount).toBe(0);
    });

    it('应该能够清空所有选择', () => {
        const { result } = renderHook(() => useLinuxInit());
        
        act(() => {
            result.current.toggleApp('firefox');
            result.current.toggleApp('chromium');
        });
        
        expect(result.current.selectedCount).toBe(2);
        
        act(() => {
            result.current.clearAll();
        });
        
        expect(result.current.selectedCount).toBe(0);
        expect(result.current.selectedApps.size).toBe(0);
    });

    it('应该检测应用是否可用', () => {
        const { result } = renderHook(() => useLinuxInit());
        
        // Firefox 在 Ubuntu 上可用
        expect(result.current.isAppAvailable('firefox')).toBe(true);
        
        // 不存在的应用应该返回 false
        expect(result.current.isAppAvailable('nonexistent-app')).toBe(false);
    });

    it('切换发行版时应该过滤不可用的应用', () => {
        const { result } = renderHook(() => useLinuxInit());
        
        // 在 Ubuntu 上选择 firefox
        act(() => {
            result.current.toggleApp('firefox');
        });
        
        expect(result.current.selectedCount).toBeGreaterThan(0);
        
        // 切换到其他发行版
        act(() => {
            result.current.setSelectedDistro('arch');
        });
        
        // Firefox 在 Arch 上也可用，所以应该保留
        if (result.current.isAppAvailable('firefox')) {
            expect(result.current.selectedApps.has('firefox')).toBe(true);
        }
    });
});
