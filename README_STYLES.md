# UI Prompt Explorer - 风格系统使用说明

## 概述

UI Prompt Explorer 采用了全新的独立风格系统，每个设计风格都有自己的独立HTML页面，避免了样式冲突问题。这个系统可以轻松扩展到200+个设计风格。

## 系统架构

### 文件结构
```
public/styles/
├── styles-config.json          # 风格配置文件
├── modern-minimal.html         # 现代简约风格
├── neobrutalism.html          # 新残酷主义风格
├── glassmorphism.html         # 玻璃质感风格
└── ...                        # 更多风格HTML文件

src/data/
├── stylesLoader.ts            # 风格加载器
└── themes.ts                  # 旧版主题文件（保留兼容性）

src/components/
├── StyleViewer.tsx            # 风格查看器组件
└── StyleShowcase.tsx          # 旧版风格展示组件

scripts/
└── manage-styles.js           # 风格管理脚本
```

### 配置文件格式

`public/styles/styles-config.json` 是主要的配置文件：

```json
{
  "version": "1.0.0",
  "styles": [
    {
      "id": "modern-minimal",
      "name": "Modern Minimal",
      "shortName": "Modern",
      "category": "现代简约",
      "description": "简洁优雅的现代设计风格",
      "characteristics": ["极简主义", "大量留白", "清晰层次"],
      "author": "Design Team",
      "source": "Internal",
      "htmlFile": "modern-minimal.html",
      "isDefault": true,
      "tags": ["minimalist", "clean", "modern"],
      "colors": {
        "primary": "#3b82f6",
        "secondary": "#6b7280",
        "accent": "#10b981",
        "background": "#ffffff"
      },
      "prompt": "Create a modern, minimal UI design..."
    }
  ]
}
```

## 使用方法

### 1. 查看现有风格

```bash
# 使用风格管理脚本
node scripts/manage-styles.js

# 选择选项 2: 列出所有风格
```

### 2. 添加新风格

#### 方法一：使用管理脚本（推荐）

```bash
node scripts/manage-styles.js

# 选择选项 1: 添加新风格
# 按提示输入风格信息
```

#### 方法二：手动创建

1. 创建HTML文件：
```html
<!-- public/styles/your-style.html -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Style</title>
    <style>
        /* 你的CSS样式 */
    </style>
</head>
<body>
    <!-- 你的HTML内容 -->
</body>
</html>
```

2. 更新配置文件：
```json
{
  "id": "your-style",
  "name": "Your Style Name",
  "shortName": "Your Style",
  "category": "你的类别",
  "description": "风格描述",
  "characteristics": ["特点1", "特点2"],
  "author": "作者",
  "source": "来源",
  "htmlFile": "your-style.html",
  "isDefault": false,
  "tags": ["tag1", "tag2"],
  "colors": {
    "primary": "#000000",
    "secondary": "#666666",
    "accent": "#ff0000",
    "background": "#ffffff"
  },
  "prompt": "AI提示词..."
}
```

### 3. 管理风格

```bash
# 启动管理脚本
node scripts/manage-styles.js

# 可用操作：
# 1. 添加新风格
# 2. 列出所有风格
# 3. 删除风格
# 4. 设置默认风格
# 5. 验证配置
# 6. 退出
```

## 风格设计指南

### HTML文件最佳实践

1. **完整的页面结构**
   - 包含完整的导航、内容区域和交互元素
   - 展示该风格的主要特点

2. **响应式设计**
   - 确保在iframe中正确显示
   - 适配不同屏幕尺寸

3. **独立样式**
   - 所有CSS都写在HTML文件内
   - 避免外部依赖

4. **示例内容**
   - 包含多种UI组件（按钮、卡片、表单等）
   - 展示色彩方案和排版风格

### 配置字段说明

- **id**: 唯一标识符，只能包含小写字母、数字和连字符
- **name**: 完整的风格名称
- **shortName**: 简短名称，用于按钮显示
- **category**: 风格类别，用于筛选
- **description**: 风格描述
- **characteristics**: 风格特点数组
- **author**: 作者或团队名称
- **source**: 来源信息
- **htmlFile**: HTML文件名
- **isDefault**: 是否为默认风格（只能有一个）
- **tags**: 标签数组，用于搜索和筛选
- **colors**: 色彩方案对象
- **prompt**: AI提示词，用于生成类似风格

### 色彩方案定义

```json
{
  "colors": {
    "primary": "#3b82f6",    // 主色调
    "secondary": "#6b7280",  // 辅助色
    "accent": "#10b981",     // 强调色
    "background": "#ffffff"  // 背景色
  }
}
```

## 开发集成

### 在组件中使用

```typescript
import { getAllStyles, getDefaultStyle, getStyleById } from '../data/stylesLoader';

// 获取所有风格
const styles = await getAllStyles();

// 获取默认风格
const defaultStyle = await getDefaultStyle();

// 根据ID获取风格
const style = await getStyleById('modern-minimal');
```

### StyleViewer组件

```tsx
import { StyleViewer } from '../components/StyleViewer';

// 在组件中使用
<StyleViewer 
  style={selectedStyle} 
  selectedCategory={selectedCategory}
/>
```

## 扩展和维护

### 批量添加风格

可以直接编辑 `public/styles/styles-config.json` 文件来批量添加风格，然后使用管理脚本验证配置：

```bash
node scripts/manage-styles.js
# 选择选项 5: 验证配置
```

### 备份和恢复

定期备份配置文件和HTML文件：

```bash
# 备份styles目录
cp -r public/styles/ backup/styles-$(date +%Y%m%d)/
```

### 性能优化

1. **图片资源**: 使用Data URI或CDN链接
2. **CSS优化**: 压缩CSS，移除未使用的样式
3. **加载优化**: 使用懒加载技术

## 故障排除

### 常见问题

1. **风格不显示**: 检查HTML文件是否存在，路径是否正确
2. **配置无效**: 使用管理脚本验证配置
3. **样式冲突**: 确保HTML文件中的样式是独立的

### 调试技巧

1. 在浏览器中直接访问风格HTML文件
2. 检查浏览器开发者工具中的网络请求
3. 查看控制台错误信息

## 贡献指南

欢迎贡献新的设计风格！请遵循以下步骤：

1. 使用管理脚本添加新风格
2. 确保HTML文件质量符合标准
3. 提供完整的配置信息
4. 测试在不同设备上的显示效果

## 许可证

本项目采用MIT许可证，详情请参阅LICENSE文件。 