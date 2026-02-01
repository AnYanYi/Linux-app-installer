# 部署到 GitHub Pages

本项目完全支持静态部署到 GitHub Pages，所有功能都是纯前端实现，无需后端服务器。

## 🚀 自动部署（推荐）

### 方法 1：使用 GitHub Actions（最简单）

1. **在仓库根目录创建 `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]  # 或者你的主分支名称
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          NODE_ENV: production
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
          
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **修改 `next.config.ts` 以支持静态导出**

在项目根目录的 `next.config.ts` 中添加：

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // 禁用图片优化（GitHub Pages 不支持）
  },
  // 如果部署在子路径，需要设置 basePath
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};

export default nextConfig;
```

3. **配置 GitHub Pages**

- 进入仓库 Settings → Pages
- Source 选择 "GitHub Actions"
- 保存设置

4. **推送代码**

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

等待几分钟，访问 `https://your-username.github.io/your-repo-name/`

---

## 📦 手动部署

### 方法 2：本地构建后推送

1. **修改 `next.config.ts`**（同上）

2. **构建静态文件**

```bash
npm run build
```

这会在 `out` 目录生成静态文件。

3. **推送到 gh-pages 分支**

```bash
# 安装 gh-pages 工具
npm install -D gh-pages

# 添加部署脚本到 package.json
```

在 `package.json` 的 `scripts` 中添加：

```json
{
  "scripts": {
    "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
  }
}
```

4. **执行部署**

```bash
npm run deploy
```

5. **配置 GitHub Pages**

- 进入 Settings → Pages
- Source 选择 "Deploy from a branch"
- Branch 选择 "gh-pages" 和 "/ (root)"
- 保存

---

## 🔧 配置选项

### 部署到自定义域名

1. 在 `public` 目录创建 `CNAME` 文件：

```
your-domain.com
```

2. 在域名提供商配置 DNS：

```
Type: CNAME
Name: www (或 @)
Value: your-username.github.io
```

### 部署到仓库子路径

如果你的仓库不是 `username.github.io`，而是 `username.github.io/project-name`：

修改 `next.config.ts`：

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/project-name',
  assetPrefix: '/project-name/',
  images: {
    unoptimized: true,
  },
};
```

---

## ✅ 验证部署

部署完成后，测试以下功能：

- [ ] 页面正常加载
- [ ] 应用图标正常显示
- [ ] 暗色/亮色主题切换
- [ ] 搜索功能
- [ ] 应用选择
- [ ] 脚本生成
- [ ] 配置保存（本地存储）
- [ ] 配置导出（JSON 下载）
- [ ] 配置导入（文件上传）
- [ ] 分享链接（URL 参数）

---

## 🐛 常见问题

### 问题 1：页面 404

**原因**：可能是路径配置问题

**解决**：
- 检查 `next.config.ts` 中的 `basePath` 设置
- 确认 GitHub Pages 的 Source 配置正确

### 问题 2：样式丢失

**原因**：静态资源路径错误

**解决**：
- 确保设置了 `output: 'export'`
- 检查 `basePath` 和 `assetPrefix` 配置

### 问题 3：配置保存不工作

**原因**：localStorage 在某些情况下被禁用

**解决**：
- 这是浏览器安全限制，功能正常
- 用户需要在浏览器设置中允许 cookie 和存储

### 问题 4：分享链接过长

**原因**：选择了大量应用

**建议**：
- 使用"导出为文件"功能
- 或使用短链接服务（bit.ly、tinyurl.com）

---

## 🔄 更新部署

### 使用 GitHub Actions

只需推送代码到主分支，自动触发部署：

```bash
git add .
git commit -m "Update features"
git push
```

### 手动部署

重新运行部署命令：

```bash
npm run deploy
```

---

## 📊 性能优化

### 1. 启用 Cloudflare（可选）

为 GitHub Pages 添加 Cloudflare CDN：

1. 注册 Cloudflare 账号
2. 添加你的域名
3. 配置 DNS 指向 Cloudflare
4. 启用缓存和优化

### 2. 图片优化

虽然 Next.js 图片优化在静态导出时不可用，但可以：

- 使用 WebP 格式
- 压缩图片文件
- 使用外部 CDN 托管大图

### 3. 代码分割

Next.js 自动进行代码分割，但确保：

- 组件按需加载
- 避免不必要的大型依赖

---

## 🎯 最佳实践

1. **版本标记**
   ```bash
   git tag v1.1.0
   git push --tags
   ```

2. **保持更新**
   - 定期更新依赖：`npm update`
   - 检查安全漏洞：`npm audit`

3. **备份配置**
   - 提交前测试构建：`npm run build`
   - 保留工作分支进行测试

4. **文档同步**
   - 更新功能时同步更新 README
   - 维护 CHANGELOG

---

## 📞 获取帮助

如果遇到部署问题：

1. 检查 GitHub Actions 日志（如果使用）
2. 查看浏览器控制台错误
3. 参考 [Next.js Static Export 文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
4. 在仓库提 Issue

---

**准备好了吗？** 选择一种方法开始部署吧！🚀
