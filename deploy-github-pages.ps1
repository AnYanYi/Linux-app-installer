# GitHub Pages 一键部署脚本

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "🚀 GitHub Pages 部署助手" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否是 git 仓库
if (Test-Path ".git") {
    Write-Host "✅ Git 仓库已存在" -ForegroundColor Green
    $remotes = git remote -v 2>&1
    if ($remotes -match "origin") {
        Write-Host "✅ 远程仓库已配置" -ForegroundColor Green
    } else {
        Write-Host "⚠️  未配置远程仓库" -ForegroundColor Yellow
        $repoUrl = Read-Host "请输入 GitHub 仓库地址"
        git remote add origin $repoUrl
        Write-Host "✅ 远程仓库已添加" -ForegroundColor Green
    }
} else {
    Write-Host "初始化 Git 仓库..." -ForegroundColor Cyan
    git init
    $repoUrl = Read-Host "请输入 GitHub 仓库地址 (如: https://github.com/user/repo.git)"
    git remote add origin $repoUrl
    Write-Host "✅ Git 仓库初始化完成" -ForegroundColor Green
}

Write-Host ""

# 检查未提交的更改
$status = git status --porcelain
if ($status) {
    Write-Host "📝 检测到未提交的更改" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    
    $commit = Read-Host "提交这些更改? (y/n)"
    if ($commit -eq 'y' -or $commit -eq 'Y') {
        git add .
        $message = Read-Host "提交信息 (留空使用默认)"
        if ([string]::IsNullOrWhiteSpace($message)) {
            $message = "chore: update project files"
        }
        git commit -m $message
        Write-Host "✅ 更改已提交" -ForegroundColor Green
    } else {
        Write-Host "⚠️  已跳过提交" -ForegroundColor Yellow
        exit
    }
}

Write-Host ""

# 获取当前分支
$branch = git branch --show-current
if ([string]::IsNullOrWhiteSpace($branch)) {
    $branch = "main"
    git branch -M main
}

Write-Host "当前分支: $branch" -ForegroundColor Cyan
$push = Read-Host "推送到 GitHub? (y/n)"

if ($push -eq 'y' -or $push -eq 'Y') {
    try {
        git push -u origin $branch
        Write-Host ""
        Write-Host "=====================================" -ForegroundColor Green
        Write-Host "🎉 部署成功！" -ForegroundColor Green
        Write-Host "=====================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "下一步:" -ForegroundColor Cyan
        Write-Host "1. 打开 GitHub 仓库 Settings → Pages" -ForegroundColor White
        Write-Host "2. Source 选择 'GitHub Actions'" -ForegroundColor White
        Write-Host "3. 等待自动部署完成" -ForegroundColor White
        
        $remote = git remote get-url origin
        if ($remote -match "github.com[:/](.+)/(.+)\.git") {
            Write-Host ""
            Write-Host "网站地址: https://$($Matches[1]).github.io/$($Matches[2])/" -ForegroundColor Yellow
            Write-Host "部署状态: https://github.com/$($Matches[1])/$($Matches[2])/actions" -ForegroundColor Yellow
        }
    } catch {
        Write-Host ""
        Write-Host "❌ 推送失败: $_" -ForegroundColor Red
        Write-Host ""
        Write-Host "请检查:" -ForegroundColor Yellow
        Write-Host "• GitHub 仓库是否已创建" -ForegroundColor White
        Write-Host "• Git 身份验证是否配置" -ForegroundColor White
    }
} else {
    Write-Host "已取消推送" -ForegroundColor Yellow
}
