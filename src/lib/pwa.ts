// PWA utilities
// Register service worker and handle PWA events

export function registerServiceWorker(): void {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
        return;
    }

    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
                console.log('[PWA] Service Worker registered:', registration);

                // Check for updates periodically
                setInterval(() => {
                    registration.update();
                }, 60000); // Check every minute

                // Handle updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (!newWorker) return;

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New service worker available
                            console.log('[PWA] New version available');
                            // You can show a notification here
                        }
                    });
                });
            })
            .catch((error) => {
                console.error('[PWA] Service Worker registration failed:', error);
            });

        // Handle controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log('[PWA] Controller changed, reloading...');
            window.location.reload();
        });
    });
}

export interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export function setupPWAInstallPrompt(
    onPromptAvailable?: (event: BeforeInstallPromptEvent) => void
): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e as BeforeInstallPromptEvent;
        console.log('[PWA] Install prompt available');
        onPromptAvailable?.(deferredPrompt);
    });

    window.addEventListener('appinstalled', () => {
        console.log('[PWA] App installed');
        deferredPrompt = null;
    });
}

export async function showInstallPrompt(): Promise<boolean> {
    if (!deferredPrompt) {
        console.log('[PWA] Install prompt not available');
        return false;
    }

    try {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log('[PWA] User response:', outcome);
        deferredPrompt = null;
        return outcome === 'accepted';
    } catch (error) {
        console.error('[PWA] Install prompt error:', error);
        return false;
    }
}

export function isPWAInstalled(): boolean {
    if (typeof window === 'undefined') return false;
    
    // Check if running in standalone mode
    return (
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true
    );
}
