# Vercel 部署指南

## 🚀 自动部署（推荐）

### 1. 连接 GitHub 仓库
1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 选择你的 GitHub 仓库
4. 点击 "Import"

### 2. 配置项目设置
Vercel 会自动检测到这是一个 Vite 项目，但你可以确认以下设置：

- **Framework Preset**: `Vite`
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

### 3. 部署
点击 "Deploy" 按钮，Vercel 会自动构建和部署你的项目。

## 🛠️ 手动部署

### 1. 安装 Vercel CLI
```bash
npm i -g vercel
```

### 2. 登录 Vercel
```bash
vercel login
```

### 3. 部署项目
在项目根目录执行：
```bash
# 第一次部署
vercel

# 后续部署
vercel --prod
```

## 📝 配置文件说明

### vercel.json
项目根目录的 `vercel.json` 配置文件包含：

- **SPA 路由支持**: 所有路由重写到 `index.html`
- **静态资源缓存**: 优化资源加载性能
- **构建配置**: 指定构建命令和输出目录

### vite.config.ts
已优化的 Vite 配置包含：

- **代码分割**: 自动分割 vendor、router、ui 包
- **构建优化**: 关闭 sourcemap，优化构建大小
- **基础路径**: 设置为根路径 `/`

## 🌍 环境变量（如果需要）

如果项目需要环境变量，在 Vercel Dashboard 中设置：

1. 进入项目设置页面
2. 选择 "Environment Variables"
3. 添加需要的环境变量

常见环境变量格式：
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=UI Style Showcase
```

## 🔍 部署后检查

部署完成后，检查以下功能：

- [ ] 首页正常加载
- [ ] 路由跳转正常（/themes, /styles 等）
- [ ] 静态资源加载正常（图片、字体、样式）
- [ ] 响应式设计在不同设备上正常
- [ ] 国际化切换正常

## 🚨 常见问题

### 1. 404 错误
如果访问子路由出现 404，确保 `vercel.json` 中的 rewrite 规则正确：
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. 静态资源加载失败
确保静态资源路径使用相对路径，避免硬编码域名。

### 3. 构建失败
检查：
- 依赖是否完整安装
- TypeScript 类型错误
- ESLint 错误

### 4. 性能优化
- 启用 gzip 压缩（Vercel 自动启用）
- 使用 CDN（Vercel 自动提供）
- 图片优化（考虑使用 WebP 格式）

## 📊 域名配置

### 自定义域名
1. 在 Vercel Dashboard 中选择项目
2. 进入 "Settings" > "Domains"
3. 添加自定义域名
4. 根据提示配置 DNS 记录

### SSL 证书
Vercel 自动为所有域名提供免费 SSL 证书。

## 🔄 持续部署

连接 GitHub 后，每次推送到主分支都会自动触发部署：

- **Preview 部署**: Pull Request 会创建预览部署
- **Production 部署**: 合并到主分支会部署到生产环境

## 📈 监控和分析

Vercel 提供内置的分析功能：

- **Core Web Vitals**: 性能指标监控
- **访问统计**: 页面访问量分析
- **错误追踪**: 实时错误监控

访问项目 Dashboard 查看详细分析数据。

---

🎉 **部署成功后，你的 UI Style Showcase 就可以在全球范围内访问了！** 