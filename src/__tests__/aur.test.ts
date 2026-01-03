import { describe, it, expect } from 'vitest';
import { isAurPackage, KNOWN_AUR_PACKAGES, AUR_PATTERNS } from '@/lib/aur';

describe('AUR Package Detection', () => {
    describe('isAurPackage', () => {
        it('should detect known AUR packages', () => {
            expect(isAurPackage('google-chrome')).toBe(true);
            expect(isAurPackage('spotify')).toBe(true);
            expect(isAurPackage('slack-desktop')).toBe(true);
            expect(isAurPackage('sublime-text-4')).toBe(true);
        });

        it('should detect packages with -bin suffix', () => {
            expect(isAurPackage('vscodium-bin')).toBe(true);
            expect(isAurPackage('brave-bin')).toBe(true);
            expect(isAurPackage('random-package-bin')).toBe(true);
        });

        it('should detect packages with -git suffix', () => {
            expect(isAurPackage('neovim-git')).toBe(true);
            expect(isAurPackage('custom-app-git')).toBe(true);
        });

        it('should detect packages with -appimage suffix', () => {
            expect(isAurPackage('joplin-appimage')).toBe(true);
        });

        it('should return false for official Arch packages', () => {
            expect(isAurPackage('firefox')).toBe(false);
            expect(isAurPackage('neovim')).toBe(false);
            expect(isAurPackage('git')).toBe(false);
            expect(isAurPackage('docker')).toBe(false);
        });
    });

    describe('KNOWN_AUR_PACKAGES', () => {
        it('should be a non-empty Set', () => {
            expect(KNOWN_AUR_PACKAGES).toBeInstanceOf(Set);
            expect(KNOWN_AUR_PACKAGES.size).toBeGreaterThan(0);
        });

        it('should include common AUR packages', () => {
            expect(KNOWN_AUR_PACKAGES.has('google-chrome')).toBe(true);
            expect(KNOWN_AUR_PACKAGES.has('spotify')).toBe(true);
        });
    });

    describe('AUR_PATTERNS', () => {
        it('should include common patterns', () => {
            expect(AUR_PATTERNS).toContain('-bin');
            expect(AUR_PATTERNS).toContain('-git');
            expect(AUR_PATTERNS).toContain('-appimage');
        });
    });
});
