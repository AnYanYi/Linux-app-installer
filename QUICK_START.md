# 快速开始：配置管理功能

## 🚀 5 分钟上手

### 第一步：选择你的应用

1. 打开网站：[Linux 应用安装器](https://your-github-username.github.io/Linux-app-installer)
2. 在右上角选择你的 Linux 发行版
3. 浏览应用目录，点击想要安装的应用
4. 选中的应用会高亮显示

### 第二步：保存你的配置

当你选好应用后，右上角会出现 **"配置"** 按钮：

```
┌─────────────────────────┐
│ [配置] ←点击这里         │
└─────────────────────────┘
```

点击后选择：
- **💾 保存配置** - 快速保存到浏览器
- **📥 导出为文件** - 下载 JSON 文件备份
- **🔗 分享链接** - 复制 URL 分享给朋友

### 第三步：使用你的配置

#### 方式 1：本地加载
1. 点击"配置"按钮
2. 在"最近保存"列表中选择之前的配置
3. 立即加载

#### 方式 2：文件导入
1. 点击"配置" → "导入配置"
2. 选择之前导出的 JSON 文件
3. 自动加载配置

#### 方式 3：URL 分享
1. 别人发给你的分享链接
2. 直接打开链接
3. 配置自动加载

## 🎯 实用示例

### 示例 1：开发环境配置

**场景**：你是一名 Web 开发者，需要配置新电脑

**步骤**：
```
1. 选择发行版：Ubuntu
2. 选择应用：
   ✓ VS Code (编辑器)
   ✓ Node.js (运行时)
   ✓ Git (版本控制)
   ✓ Docker (容器)
   ✓ Firefox Developer (浏览器)
   ✓ Postman (API 测试)
3. 点击"导出为文件"
4. 保存为 "web-dev-setup.json"
5. 下次重装系统时，直接导入这个文件
```

### 示例 2：团队标准环境

**场景**：技术 Leader 要为团队创建统一开发环境

**步骤**：
```
1. 创建标准配置，包含：
   - 统一的开发工具
   - 团队使用的通讯软件
   - 必要的命令行工具
2. 点击"分享链接"
3. 复制生成的 URL
4. 发送到团队群
5. 团队成员打开链接，自动加载配置
6. 下载安装脚本，运行即可
```

### 示例 3：多场景配置

**场景**：你需要不同的软件组合用于不同目的

**配置清单**：
```
1. "minimal-office.json" - 轻量办公
   - Firefox
   - LibreOffice
   - Thunderbird

2. "full-dev.json" - 完整开发
   - VS Code
   - Docker
   - Git
   - Node.js
   - Python
   - PostgreSQL

3. "media-center.json" - 娱乐影音
   - VLC
   - Spotify
   - Steam
   - OBS Studio
```

根据需要导入不同配置！

## 💡 专业技巧

### 技巧 1：配置版本控制
```bash
# 创建配置仓库
mkdir ~/.linux-configs
cd ~/.linux-configs
git init

# 导出配置到仓库
cp ~/Downloads/linux-apps-*.json ./

# 提交和推送
git add .
git commit -m "Update configs"
git push
```

### 技巧 2：URL 分享的最佳实践
```
✅ 好的做法：
- 分享时说明配置用途："这是我的开发环境配置"
- 定期更新配置并重新分享
- 为配置命名清晰易懂的名称

❌ 避免：
- 分享包含大量应用的超长 URL（考虑用短链接服务）
- 不说明配置目的直接发链接
```

### 技巧 3：配置文件组织
```
建议的文件夹结构：

~/linux-configs/
├── personal/
│   ├── dev-environment.json
│   ├── office-setup.json
│   └── gaming-setup.json
├── work/
│   ├── company-standard.json
│   └── team-specific.json
└── templates/
    ├── minimal.json
    ├── standard.json
    └── full.json
```

## 🔧 常见问题速查

**Q: 如何在新电脑上快速配置？**
```
1. 从云盘/Git 下载配置文件
2. 访问网站
3. 导入配置
4. 下载脚本
5. 运行安装
```

**Q: 配置可以跨发行版使用吗？**
```
不完全可以。配置会记录目标发行版，但导入时：
- 如果切换到其他发行版
- 系统会自动过滤不兼容的应用
- 只加载该发行版支持的应用
```

**Q: 如何快速分享配置给不熟悉技术的朋友？**
```
1. 创建配置
2. 点击"分享链接"
3. 使用短链接服务（如 bit.ly）缩短 URL
4. 配上说明发送：
   "点击这个链接，然后点右下角的'下载脚本'，
    在终端里运行就可以自动安装这些软件了"
```

## 📱 移动端使用

虽然网站是响应式的，但建议：
1. 在桌面端创建和保存配置
2. 通过云盘同步或分享链接
3. 在 Linux 设备上加载使用

## 🎓 进阶用法

### 自定义配置模板

手动编辑 JSON 文件创建模板：

```json
{
  "version": "1.0",
  "distro": "ubuntu",
  "apps": [
    "firefox",
    "vscode",
    "git"
  ],
  "timestamp": 1738483200000,
  "name": "最小开发环境"
}
```

### 批量配置管理

使用脚本批量处理配置：

```bash
#!/bin/bash
# merge-configs.sh - 合并多个配置文件

jq -s '
  {
    version: "1.0",
    distro: .[0].distro,
    apps: [.[].apps[]] | unique,
    timestamp: now,
    name: "合并配置"
  }
' config1.json config2.json > merged.json
```

---

**准备好开始了吗？** 访问网站，选择你的应用，保存你的第一个配置吧！🚀
