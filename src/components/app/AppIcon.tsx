'use client';

import { useState } from 'react';
import { LazyImage } from '@/components/common';

// App icon with lazy loading, falls back to first letter if it fails
export function AppIcon({ url, name }: { url: string; name: string }) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="w-4 h-4 rounded bg-[var(--accent)] flex items-center justify-center text-[10px] font-bold">
                {name[0]}
            </div>
        );
    }

    return (
        <div className="w-4 h-4">
            <LazyImage
                src={url}
                alt=""
                className="w-full h-full object-contain opacity-75"
            />
        </div>
    );
}
