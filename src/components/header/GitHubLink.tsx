'use client';

import { Github } from 'lucide-react';
import { analytics } from '@/lib/analytics';

// GitHub logo that links to the repo
export function GitHubLink({ href = "https://github.com/AnYanYi/Linux-app-installer" }: { href?: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
            title="在 GitHub 上查看"
            onClick={() => analytics.githubClicked()}
        >
            <Github className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            <span className="hidden sm:inline relative">
                GitHub
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--text-muted)] transition-[width] duration-300 group-hover:w-full" />
            </span>
        </a>
    );
}
