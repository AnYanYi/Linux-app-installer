// 图片懒加载组件
'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    fallback?: string;
}

export function LazyImage({ src, alt, className, fallback }: LazyImageProps) {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = new Image();
                        img.src = src;
                        
                        img.onload = () => {
                            setImageSrc(src);
                            setIsLoading(false);
                        };
                        
                        img.onerror = () => {
                            setError(true);
                            setIsLoading(false);
                        };
                        
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: '50px' }
        );

        observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, [src]);

    // Don't render anything if there's an error
    if (error) {
        return null;
    }

    return (
        <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            className={cn(
                className,
                isLoading && 'animate-pulse bg-gray-200 dark:bg-gray-800',
                error && 'opacity-50'
            )}
            loading="lazy"
        />
    );
}
