'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

// Handles tooltip show/hide with a delay so they don't flash annoyingly
export function useDelayedTooltip(delay = 600) {
    const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number; width: number; key: number } | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const isHoveringTooltip = useRef(false);
    const keyRef = useRef(0);

    // Cleanup timer on unmount to prevent memory leaks
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const show = useCallback((text: string, e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        // Position centered above the element
        keyRef.current += 1; // Increment key for fresh animation
        const newTooltip = {
            text,
            x: rect.left + rect.width / 2,
            y: rect.top - 12,
            width: rect.width,
            key: keyRef.current
        };
        if (timerRef.current) clearTimeout(timerRef.current);
        // Clear existing tooltip first to reset animation
        setTooltip(null);
        timerRef.current = setTimeout(() => setTooltip(newTooltip), delay);
    }, [delay]);

    const hide = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        // Delay hide to allow moving to tooltip (increased to 500ms for better usability)
        timerRef.current = setTimeout(() => {
            if (!isHoveringTooltip.current) {
                setTooltip(null);
            }
        }, 500);
    }, []);

    const onTooltipEnter = useCallback(() => {
        isHoveringTooltip.current = true;
        if (timerRef.current) clearTimeout(timerRef.current);
    }, []);

    const onTooltipLeave = useCallback(() => {
        isHoveringTooltip.current = false;
        setTooltip(null);
    }, []);

    return { tooltip, show, hide, onTooltipEnter, onTooltipLeave };
}
