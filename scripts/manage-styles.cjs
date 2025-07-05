#!/usr/bin/env node

/**
 * UI Prompt Explorer - 风格管理脚本
 * 用于管理设计风格的配置和HTML文件
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const STYLES_DIR = path.join(__dirname, '../public/styles');
const CONFIG_FILE = path.join(STYLES_DIR, 'styles-config.json');

// 创建命令行接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提示用户输入
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

// 加载配置文件
function loadConfig() {
  try {
    if (!fs.existsSync(CONFIG_FILE)) {
      return {
        version: '1.0.0',
        styles: []
      };
    }
    const content = fs.readFileSync(CONFIG_FILE, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('❌ 加载配置文件失败:', error.message);
    return null;
  }
}

// 保存配置文件
function saveConfig(config) {
  try {
    const content = JSON.stringify(config, null, 2);
    fs.writeFileSync(CONFIG_FILE, content, 'utf8');
    console.log('✅ 配置文件已保存');
    return true;
  } catch (error) {
    console.error('❌ 保存配置文件失败:', error.message);
    return false;
  }
}

// 生成HTML模板
function generateHtmlTemplate(styleConfig) {
  const { name, description, colors } = styleConfig;
  
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} Style</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: ${colors.background};
            color: ${colors.primary};
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .title {
            font-size: 2.5rem;
            font-weight: 600;
            color: ${colors.primary};
            margin-bottom: 1rem;
        }
        
        .subtitle {
            font-size: 1.125rem;
            color: ${colors.secondary};
            max-width: 600px;
            margin: 0 auto;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .card {
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
            padding: 2rem;
            transition: all 0.3s ease;
        }
        
        .card:hover {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
        }
        
        .card-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: ${colors.primary};
            margin-bottom: 1rem;
        }
        
        .card-text {
            color: ${colors.secondary};
            margin-bottom: 1.5rem;
        }
        
        .button {
            display: inline-flex;
            align-items: center;
            padding: 0.75rem 1.5rem;
            background-color: ${colors.accent};
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        
        .button:hover {
            opacity: 0.9;
            transform: translateY(-1px);
        }
        
        .nav {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .nav-item {
            color: ${colors.secondary};
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        
        .nav-item:hover {
            background-color: ${colors.accent}20;
            color: ${colors.primary};
        }
        
        .nav-item.active {
            background-color: ${colors.accent};
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">${name}</h1>
            <p class="subtitle">${description}</p>
        </div>
        
        <div class="nav">
            <a href="#" class="nav-item active">首页</a>
            <a href="#" class="nav-item">产品</a>
            <a href="#" class="nav-item">服务</a>
            <a href="#" class="nav-item">关于我们</a>
        </div>
        
        <div class="grid">
            <div class="card">
                <h3 class="card-title">主要功能</h3>
                <p class="card-text">这里展示了 ${name} 风格的主要特点和功能介绍。</p>
                <a href="#" class="button">了解更多</a>
            </div>
            
            <div class="card">
                <h3 class="card-title">设计特色</h3>
                <p class="card-text">展示这种设计风格的独特之处和设计理念。</p>
                <a href="#" class="button">查看详情</a>
            </div>
            
            <div class="card">
                <h3 class="card-title">使用场景</h3>
                <p class="card-text">介绍这种风格适合的应用场景和目标用户群体。</p>
                <a href="#" class="button">开始使用</a>
            </div>
        </div>
    </div>
</body>
</html>`;
}

// 添加新风格
async function addNewStyle() {
  console.log('\n📝 添加新的设计风格\n');

  try {
    // 收集基本信息
    const id = await prompt('风格ID (英文，如: cyberpunk-neon): ');
    if (!id || !/^[a-z0-9-]+$/.test(id)) {
      console.log('❌ 风格ID格式无效（只允许小写字母、数字和连字符）');
      return;
    }

    const name = await prompt('风格名称 (如: Cyberpunk Neon): ');
    const shortName = await prompt('简短名称 (如: Cyberpunk): ');
    const category = await prompt('风格类别 (如: 未来主义): ');
    const description = await prompt('风格描述: ');
    const author = await prompt('作者 (可选): ') || 'Design Team';
    const source = await prompt('来源 (可选): ') || 'Internal';

    // 收集特点
    console.log('\n请输入风格特点（每行一个，输入空行结束）:');
    const characteristics = [];
    while (true) {
      const char = await prompt('特点: ');
      if (!char) break;
      characteristics.push(char);
    }

    // 收集标签
    console.log('\n请输入标签（用逗号分隔）:');
    const tagsInput = await prompt('标签: ');
    const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);

    // 收集颜色配置
    console.log('\n配置颜色方案:');
    const colors = {
      primary: await prompt('主色调 (如: #3b82f6): ') || '#3b82f6',
      secondary: await prompt('辅助色 (如: #6b7280): ') || '#6b7280',
      accent: await prompt('强调色 (如: #10b981): ') || '#10b981',
      background: await prompt('背景色 (如: #ffffff): ') || '#ffffff'
    };

    // AI提示词
    const prompt_text = await prompt('\nAI提示词: ');

    // 构建配置对象
    const styleConfig = {
      id,
      name,
      shortName,
      category,
      description,
      characteristics,
      author,
      source,
      htmlFile: `${id}.html`,
      isDefault: false,
      tags,
      colors,
      prompt: prompt_text
    };

    // 加载现有配置
    const config = loadConfig();
    if (!config) return;

    // 检查ID是否已存在
    if (config.styles.some(style => style.id === id)) {
      console.log(`❌ 风格ID "${id}" 已存在`);
      return;
    }

    // 生成HTML文件
    const htmlContent = generateHtmlTemplate(styleConfig);
    const htmlPath = path.join(STYLES_DIR, styleConfig.htmlFile);
    
    try {
      fs.writeFileSync(htmlPath, htmlContent, 'utf8');
      console.log(`✅ HTML文件已生成: ${styleConfig.htmlFile}`);
    } catch (error) {
      console.error(`❌ 生成HTML文件失败: ${error.message}`);
      return;
    }

    // 添加到配置
    config.styles.push(styleConfig);

    // 保存配置
    if (saveConfig(config)) {
      console.log(`\n🎉 成功添加风格 "${name}"`);
      console.log(`📁 HTML文件: /styles/${styleConfig.htmlFile}`);
      console.log(`🏷️  风格ID: ${id}`);
    }

  } catch (error) {
    console.error('❌ 添加风格失败:', error.message);
  }
}

// 列出所有风格
function listStyles() {
  const config = loadConfig();
  if (!config) return;

  console.log('\n📋 当前风格列表:\n');
  
  if (config.styles.length === 0) {
    console.log('暂无风格配置');
    return;
  }

  config.styles.forEach((style, index) => {
    console.log(`${index + 1}. ${style.name} (${style.id})`);
    console.log(`   类别: ${style.category}`);
    console.log(`   文件: ${style.htmlFile}`);
    console.log(`   默认: ${style.isDefault ? '是' : '否'}`);
    console.log('');
  });
}

// 删除风格
async function removeStyle() {
  const config = loadConfig();
  if (!config) return;

  listStyles();

  const id = await prompt('\n请输入要删除的风格ID: ');
  const styleIndex = config.styles.findIndex(style => style.id === id);
  
  if (styleIndex === -1) {
    console.log(`❌ 未找到风格 "${id}"`);
    return;
  }

  const style = config.styles[styleIndex];
  const confirm = await prompt(`确定要删除风格 "${style.name}" 吗？(y/N): `);
  
  if (confirm.toLowerCase() !== 'y') {
    console.log('❌ 取消删除');
    return;
  }

  // 删除HTML文件
  const htmlPath = path.join(STYLES_DIR, style.htmlFile);
  try {
    if (fs.existsSync(htmlPath)) {
      fs.unlinkSync(htmlPath);
      console.log(`✅ 已删除HTML文件: ${style.htmlFile}`);
    }
  } catch (error) {
    console.log(`⚠️  删除HTML文件失败: ${error.message}`);
  }

  // 从配置中移除
  config.styles.splice(styleIndex, 1);

  if (saveConfig(config)) {
    console.log(`✅ 成功删除风格 "${style.name}"`);
  }
}

// 设置默认风格
async function setDefaultStyle() {
  const config = loadConfig();
  if (!config) return;

  listStyles();

  const id = await prompt('\n请输入要设为默认的风格ID: ');
  const style = config.styles.find(style => style.id === id);
  
  if (!style) {
    console.log(`❌ 未找到风格 "${id}"`);
    return;
  }

  // 清除其他默认设置
  config.styles.forEach(s => s.isDefault = false);
  
  // 设置新的默认风格
  style.isDefault = true;

  if (saveConfig(config)) {
    console.log(`✅ 已将 "${style.name}" 设为默认风格`);
  }
}

// 验证配置
function validateConfig() {
  const config = loadConfig();
  if (!config) return;

  console.log('\n🔍 验证配置文件...\n');

  let hasErrors = false;
  const errors = [];

  // 检查是否有默认风格
  const defaultStyles = config.styles.filter(style => style.isDefault);
  if (defaultStyles.length === 0) {
    errors.push('❌ 没有设置默认风格');
    hasErrors = true;
  } else if (defaultStyles.length > 1) {
    errors.push('❌ 设置了多个默认风格');
    hasErrors = true;
  }

  // 检查每个风格
  config.styles.forEach((style, index) => {
    const prefix = `风格 ${index + 1} (${style.id})`;
    
    // 检查必需字段
    const requiredFields = ['id', 'name', 'htmlFile'];
    requiredFields.forEach(field => {
      if (!style[field]) {
        errors.push(`❌ ${prefix}: 缺少必需字段 "${field}"`);
        hasErrors = true;
      }
    });

    // 检查HTML文件是否存在
    const htmlPath = path.join(STYLES_DIR, style.htmlFile);
    if (!fs.existsSync(htmlPath)) {
      errors.push(`❌ ${prefix}: HTML文件不存在 "${style.htmlFile}"`);
      hasErrors = true;
    }

    // 检查ID格式
    if (style.id && !/^[a-z0-9-]+$/.test(style.id)) {
      errors.push(`❌ ${prefix}: ID格式无效`);
      hasErrors = true;
    }
  });

  if (hasErrors) {
    console.log('配置文件存在问题:\n');
    errors.forEach(error => console.log(error));
  } else {
    console.log('✅ 配置文件验证通过');
    console.log(`📊 总计 ${config.styles.length} 个风格`);
  }
}

// 主菜单
async function showMenu() {
  console.log('\n🎨 UI Prompt Explorer - 风格管理工具\n');
  console.log('1. 添加新风格');
  console.log('2. 列出所有风格');
  console.log('3. 删除风格');
  console.log('4. 设置默认风格');
  console.log('5. 验证配置');
  console.log('6. 退出');
  
  const choice = await prompt('\n请选择操作 (1-6): ');
  
  switch (choice) {
    case '1':
      await addNewStyle();
      break;
    case '2':
      listStyles();
      break;
    case '3':
      await removeStyle();
      break;
    case '4':
      await setDefaultStyle();
      break;
    case '5':
      validateConfig();
      break;
    case '6':
      console.log('👋 再见！');
      rl.close();
      return;
    default:
      console.log('❌ 无效选择');
  }
  
  // 显示菜单继续
  setTimeout(() => showMenu(), 1000);
}

// 确保styles目录存在
if (!fs.existsSync(STYLES_DIR)) {
  fs.mkdirSync(STYLES_DIR, { recursive: true });
  console.log(`✅ 创建目录: ${STYLES_DIR}`);
}

// 启动程序
console.log('🚀 启动风格管理工具...');
showMenu(); 