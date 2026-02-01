// 国际化配置
export type Locale = 'zh' | 'en';

export const locales: Locale[] = ['zh', 'en'];
export const defaultLocale: Locale = 'zh';

export type Translations = {
    // Header
    'header.title': string;
    'header.subtitle': string;
    'header.howItWorks': string;
    'header.contribute': string;
    
    // Search
    'search.placeholder': string;
    'search.noResults': string;
    
    // Distro selector
    'distro.select': string;
    'distro.selected': string;
    
    // App actions
    'app.install': string;
    'app.installed': string;
    'app.unavailable': string;
    'app.details': string;
    
    // Command footer
    'command.selectedApps': string;
    'command.downloadScript': string;
    'command.copyCommand': string;
    'command.clearAll': string;
    'command.copied': string;
    
    // Config manager
    'config.title': string;
    'config.save': string;
    'config.load': string;
    'config.export': string;
    'config.import': string;
    'config.share': string;
    
    // Presets
    'preset.title': string;
    'preset.developer': string;
    'preset.gaming': string;
    'preset.productivity': string;
    
    // Categories
    'category.browsers': string;
    'category.communication': string;
    'category.development': string;
    'category.media': string;
    'category.games': string;
    'category.office': string;
    'category.security': string;
    'category.system': string;
    
    // Common
    'common.loading': string;
    'common.error': string;
    'common.retry': string;
    'common.cancel': string;
    'common.confirm': string;
};

export const translations: Record<Locale, Translations> = {
    zh: {
        'header.title': 'Linux 应用安装器',
        'header.subtitle': '基于 TuxMate 的完整中文版',
        'header.howItWorks': '使用说明',
        'header.contribute': '参与贡献',
        
        'search.placeholder': '搜索应用... (按 / 快速聚焦)',
        'search.noResults': '没有找到匹配的应用',
        
        'distro.select': '选择发行版',
        'distro.selected': '已选择',
        
        'app.install': '安装',
        'app.installed': '已安装',
        'app.unavailable': '不可用',
        'app.details': '详情',
        
        'command.selectedApps': '已选择 {count} 个应用',
        'command.downloadScript': '下载脚本',
        'command.copyCommand': '复制命令',
        'command.clearAll': '清空全部',
        'command.copied': '已复制!',
        
        'config.title': '配置管理',
        'config.save': '保存配置',
        'config.load': '加载配置',
        'config.export': '导出为文件',
        'config.import': '导入配置',
        'config.share': '分享链接',
        
        'preset.title': '预设方案',
        'preset.developer': '开发环境',
        'preset.gaming': '游戏娱乐',
        'preset.productivity': '办公效率',
        
        'category.browsers': '网页浏览器',
        'category.communication': '通讯软件',
        'category.development': '开发工具',
        'category.media': '媒体播放',
        'category.games': '游戏',
        'category.office': '办公软件',
        'category.security': '安全工具',
        'category.system': '系统工具',
        
        'common.loading': '加载中...',
        'common.error': '出错了',
        'common.retry': '重试',
        'common.cancel': '取消',
        'common.confirm': '确认',
    },
    en: {
        'header.title': 'Linux App Installer',
        'header.subtitle': 'Complete Chinese Version Based on TuxMate',
        'header.howItWorks': 'How It Works',
        'header.contribute': 'Contribute',
        
        'search.placeholder': 'Search apps... (Press / to focus)',
        'search.noResults': 'No apps found',
        
        'distro.select': 'Select Distribution',
        'distro.selected': 'Selected',
        
        'app.install': 'Install',
        'app.installed': 'Installed',
        'app.unavailable': 'Unavailable',
        'app.details': 'Details',
        
        'command.selectedApps': '{count} apps selected',
        'command.downloadScript': 'Download Script',
        'command.copyCommand': 'Copy Command',
        'command.clearAll': 'Clear All',
        'command.copied': 'Copied!',
        
        'config.title': 'Config Manager',
        'config.save': 'Save Config',
        'config.load': 'Load Config',
        'config.export': 'Export File',
        'config.import': 'Import Config',
        'config.share': 'Share Link',
        
        'preset.title': 'Presets',
        'preset.developer': 'Developer Setup',
        'preset.gaming': 'Gaming Setup',
        'preset.productivity': 'Productivity Setup',
        
        'category.browsers': 'Web Browsers',
        'category.communication': 'Communication',
        'category.development': 'Development Tools',
        'category.media': 'Media Players',
        'category.games': 'Games',
        'category.office': 'Office',
        'category.security': 'Security Tools',
        'category.system': 'System Tools',
        
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'common.retry': 'Retry',
        'common.cancel': 'Cancel',
        'common.confirm': 'Confirm',
    },
};

// Helper function to get translation
export function t(key: keyof Translations, locale: Locale = defaultLocale, params?: Record<string, string | number>): string {
    let text = translations[locale][key] || translations[defaultLocale][key] || key;
    
    // Replace parameters like {count}
    if (params) {
        Object.entries(params).forEach(([param, value]) => {
            text = text.replace(`{${param}}`, String(value));
        });
    }
    
    return text;
}
