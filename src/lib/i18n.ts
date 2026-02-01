// 中文语言包
export const zh = {
  // Header
  header: {
    howItWorks: '如何使用',
    contribute: '贡献代码',
  },

  // Distro Selector
  distroSelector: {
    selectDistro: '选择发行版',
  },

  // Search
  search: {
    placeholder: '搜索应用... (按 / 快速聚焦)',
    noResults: '未找到应用',
  },

  // Command Footer
  commandFooter: {
    selectedApps: '已选应用',
    copyCommand: '复制命令',
    downloadScript: '下载脚本',
    copied: '已复制!',
    clearAll: '清空全部',
    showFullCommand: '查看完整命令',
  },

  // AUR
  aur: {
    title: 'AUR 助手检测',
    description: '您已选择了 AUR 软件包。是否已安装 AUR 助手？',
    hasHelper: '是，我已安装',
    noHelper: '否，请安装',
    selectHelper: '选择 AUR 助手:',
    installing: '安装中...',
    willInstall: '脚本将自动安装',
    aurPackages: 'AUR 软件包:',
  },

  // Categories
  categories: {
    'Web Browsers': '网页浏览器',
    'Communication': '通讯软件',
    'Dev: Languages': '开发：编程语言',
    'Dev: Editors': '开发：编辑器',
    'Dev: Tools': '开发：工具',
    'Terminal': '终端',
    'CLI Tools': '命令行工具',
    'Media': '媒体播放',
    'Creative': '创意设计',
    'Gaming': '游戏',
    'Office': '办公软件',
    'VPN & Network': 'VPN 与网络',
    'Security': '安全工具',
    'File Sharing': '文件共享',
    'System': '系统工具',
  },

  // How It Works Modal
  howItWorks: {
    title: '如何使用 TuxMate',
    step1: {
      title: '1. 选择您的发行版',
      description: '点击右上角选择您的 Linux 发行版',
    },
    step2: {
      title: '2. 选择应用',
      description: '点击应用卡片将其添加到安装列表',
    },
    step3: {
      title: '3. 复制或下载',
      description: '复制命令到终端执行，或下载完整的安装脚本',
    },
    keyboardShortcuts: '键盘快捷键',
    shortcuts: {
      search: '聚焦搜索',
      help: '显示此帮助',
      theme: '切换主题',
      navigation: '导航应用 (Vim 风格)',
      select: '选择应用',
      expandCollapse: '展开/折叠分类',
      clearFocus: '清除焦点',
    },
    features: {
      title: '特性',
      smartDetection: '智能检测已安装软件包',
      aurSupport: 'Arch Linux AUR 自动支持',
      progressBars: '进度条和预估时间',
      parallelInstall: 'Flatpak 并行安装',
      errorHandling: '自动错误处理和重试',
      colorOutput: '彩色输出和总结报告',
    },
  },

  // App availability
  availability: {
    available: '可用',
    unavailable: '不可用',
    aurPackage: 'AUR 软件包',
  },

  // Common
  common: {
    close: '关闭',
    cancel: '取消',
    confirm: '确认',
    loading: '加载中...',
  },
};

export type Locale = typeof zh;
export default zh;
