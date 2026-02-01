// Configuration management utilities
// Handles save/load/export/import of app selections

import { apps, distros, type DistroId } from './data';

export interface AppConfig {
    version: string;
    distro: DistroId;
    apps: string[];
    timestamp: number;
    name?: string;
}

const CONFIG_VERSION = '1.0';
const RECENT_CONFIGS_KEY = 'linuxinit_recent_configs';
const MAX_RECENT_CONFIGS = 5;

/**
 * Create a config object from current selections
 */
export function createConfig(
    distro: DistroId,
    selectedApps: Set<string>,
    name?: string
): AppConfig {
    return {
        version: CONFIG_VERSION,
        distro,
        apps: Array.from(selectedApps),
        timestamp: Date.now(),
        name: name || `配置 ${new Date().toLocaleDateString('zh-CN')}`,
    };
}

/**
 * Validate a config object
 */
export function validateConfig(config: unknown): config is AppConfig {
    if (!config || typeof config !== 'object') return false;

    const c = config as Partial<AppConfig>;

    // Check required fields
    if (!c.version || !c.distro || !Array.isArray(c.apps)) return false;

    // Validate distro
    if (!distros.some(d => d.id === c.distro)) return false;

    // Validate apps exist
    const validApps = c.apps.every(appId => apps.some(a => a.id === appId));
    if (!validApps) return false;

    return true;
}

/**
 * Export config as JSON file download
 */
export function exportConfig(config: AppConfig): void {
    const json = JSON.stringify(config, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `linux-apps-${config.distro}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Import config from JSON file
 */
export function importConfig(file: File): Promise<AppConfig> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const config = JSON.parse(e.target?.result as string);
                if (validateConfig(config)) {
                    resolve(config);
                } else {
                    reject(new Error('无效的配置文件格式'));
                }
            } catch (err) {
                reject(new Error('配置文件解析失败'));
            }
        };
        reader.onerror = () => reject(new Error('文件读取失败'));
        reader.readAsText(file);
    });
}

/**
 * Encode config to URL-safe base64
 */
export function encodeConfigToUrl(config: AppConfig): string {
    const json = JSON.stringify({
        d: config.distro,
        a: config.apps,
    });
    return btoa(encodeURIComponent(json));
}

/**
 * Decode config from URL parameter
 */
export function decodeConfigFromUrl(encoded: string): Partial<AppConfig> | null {
    try {
        const json = decodeURIComponent(atob(encoded));
        const data = JSON.parse(json);
        return {
            distro: data.d,
            apps: data.a,
            version: CONFIG_VERSION,
            timestamp: Date.now(),
        };
    } catch (err) {
        console.error('Failed to decode config from URL:', err);
        return null;
    }
}

/**
 * Generate shareable URL with current config
 */
export function generateShareUrl(config: AppConfig): string {
    const encoded = encodeConfigToUrl(config);
    const url = new URL(window.location.href);
    url.searchParams.set('config', encoded);
    return url.toString();
}

/**
 * Save config to recent history
 */
export function saveToRecentConfigs(config: AppConfig): void {
    try {
        const recent = getRecentConfigs();
        // Add to front, remove duplicates by timestamp
        const updated = [
            config,
            ...recent.filter(c => c.timestamp !== config.timestamp),
        ].slice(0, MAX_RECENT_CONFIGS);
        localStorage.setItem(RECENT_CONFIGS_KEY, JSON.stringify(updated));
    } catch (err) {
        console.error('Failed to save recent config:', err);
    }
}

/**
 * Get recent configs from localStorage
 */
export function getRecentConfigs(): AppConfig[] {
    try {
        const stored = localStorage.getItem(RECENT_CONFIGS_KEY);
        if (!stored) return [];
        const configs = JSON.parse(stored);
        return Array.isArray(configs) ? configs.filter(validateConfig) : [];
    } catch (err) {
        console.error('Failed to load recent configs:', err);
        return [];
    }
}

/**
 * Clear recent configs
 */
export function clearRecentConfigs(): void {
    try {
        localStorage.removeItem(RECENT_CONFIGS_KEY);
    } catch (err) {
        console.error('Failed to clear recent configs:', err);
    }
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        return success;
    }
}
