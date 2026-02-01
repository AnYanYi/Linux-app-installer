// Preset configurations for common use cases
// 预设配置：常见使用场景

import type { DistroId } from './data';

export interface Preset {
    id: string;
    name: string;
    description: string;
    icon: string;
    apps: string[];
    distros?: DistroId[]; // If specified, only show for these distros
}

export const presets: Preset[] = [
    {
        id: 'web-dev',
        name: 'Web 开发',
        description: '前端/后端 Web 开发环境',
        icon: '💻',
        apps: [
            'vscode',
            'nodejs',
            'git',
            'docker',
            'firefox',
            'postman',
            'github-desktop',
        ],
    },
    {
        id: 'full-stack',
        name: '全栈开发',
        description: '完整开发环境，包含多种语言和工具',
        icon: '🚀',
        apps: [
            'vscode',
            'nodejs',
            'python3',
            'go',
            'rust',
            'git',
            'docker',
            'postgresql',
            'redis',
            'postman',
        ],
    },
    {
        id: 'office',
        name: '办公套装',
        description: '日常办公和文档处理',
        icon: '📝',
        apps: [
            'firefox',
            'chromium',
            'libreoffice',
            'thunderbird',
            'gimp',
            'inkscape',
            'pdfarranger',
        ],
    },
    {
        id: 'gaming',
        name: '游戏娱乐',
        description: '游戏平台和娱乐软件',
        icon: '🎮',
        apps: [
            'steam',
            'discord',
            'lutris',
            'obs',
            'vlc',
            'spotify',
        ],
    },
    {
        id: 'content-creator',
        name: '内容创作',
        description: '视频、音频、图像编辑',
        icon: '🎨',
        apps: [
            'obs',
            'kdenlive',
            'gimp',
            'inkscape',
            'audacity',
            'blender',
            'krita',
        ],
    },
    {
        id: 'minimal',
        name: '极简配置',
        description: '基础浏览和轻量办公',
        icon: '✨',
        apps: [
            'firefox',
            'thunderbird',
            'libreoffice',
            'vlc',
        ],
    },
    {
        id: 'security',
        name: '安全工具',
        description: '隐私保护和安全软件',
        icon: '🔒',
        apps: [
            'tor',
            'librewolf',
            'bitwarden',
            'protonvpn',
            'veracrypt',
            'keepassxc',
        ],
    },
    {
        id: 'data-science',
        name: '数据科学',
        description: 'Python 数据分析和机器学习',
        icon: '📊',
        apps: [
            'python3',
            'vscode',
            'jupyter',
            'git',
            'docker',
        ],
    },
    {
        id: 'sysadmin',
        name: '系统管理',
        description: '服务器管理和运维工具',
        icon: '⚙️',
        apps: [
            'docker',
            'kubectl',
            'terraform',
            'ansible',
            'wireshark',
            'htop',
            'tmux',
        ],
    },
    {
        id: 'student',
        name: '学生套装',
        description: '学习、笔记和生产力工具',
        icon: '🎓',
        apps: [
            'firefox',
            'libreoffice',
            'thunderbird',
            'obsidian',
            'notion',
            'vlc',
            'gimp',
        ],
    },
];

/**
 * Get all presets compatible with a distro
 */
export function getPresetsForDistro(distroId: DistroId): Preset[] {
    return presets.filter(preset => {
        // If preset doesn't specify distros, it's available for all
        if (!preset.distros) return true;
        // Otherwise check if current distro is in the list
        return preset.distros.includes(distroId);
    });
}

/**
 * Get preset by id
 */
export function getPresetById(id: string): Preset | undefined {
    return presets.find(p => p.id === id);
}
