// 独立HTML风格系统的数据结构
export interface StyleConfig {
  id: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  characteristics: string[];
  author: string;
  source: string;
  htmlFile: string;
  isDefault: boolean;
  tags: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  prompt: string;
}

export interface StylesConfig {
  version: string;
  styles: StyleConfig[];
}

// 缓存配置数据
let stylesConfig: StylesConfig | null = null;

/**
 * 加载样式配置文件
 */
export async function loadStylesConfig(): Promise<StylesConfig> {
  if (stylesConfig) {
    return stylesConfig;
  }

  try {
    const response = await fetch('/styles/styles-config.json');
    if (!response.ok) {
      throw new Error(`Failed to load styles config: ${response.status}`);
    }
    stylesConfig = await response.json();
    return stylesConfig;
  } catch (error) {
    console.error('Error loading styles config:', error);
    // 返回默认配置
    return {
      version: '1.0.0',
      styles: [
        {
          id: 'modern-minimal',
          name: 'Modern Minimal',
          shortName: 'Modern',
          category: '现代简约',
          description: '简洁优雅的现代设计风格',
          characteristics: ['极简主义', '大量留白', '清晰层次', '现代字体'],
          author: 'Design Team',
          source: 'Internal',
          htmlFile: 'modern-minimal.html',
          isDefault: true,
          tags: ['minimalist', 'clean', 'modern'],
          colors: {
            primary: '#3b82f6',
            secondary: '#6b7280',
            accent: '#10b981',
            background: '#ffffff'
          },
          prompt: 'Create a modern, minimal UI design with clean lines and elegant typography.'
        }
      ]
    };
  }
}

/**
 * 获取所有风格配置
 */
export async function getAllStyles(): Promise<StyleConfig[]> {
  const config = await loadStylesConfig();
  return config.styles;
}

/**
 * 根据ID获取风格配置
 */
export async function getStyleById(id: string): Promise<StyleConfig | null> {
  const config = await loadStylesConfig();
  return config.styles.find(style => style.id === id) || null;
}

/**
 * 获取默认风格
 */
export async function getDefaultStyle(): Promise<StyleConfig> {
  const config = await loadStylesConfig();
  const defaultStyle = config.styles.find(style => style.isDefault);
  return defaultStyle || config.styles[0];
}

/**
 * 根据标签筛选风格
 */
export async function getStylesByTag(tag: string): Promise<StyleConfig[]> {
  const config = await loadStylesConfig();
  return config.styles.filter(style => style.tags.includes(tag));
}

/**
 * 根据类别筛选风格
 */
export async function getStylesByCategory(category: string): Promise<StyleConfig[]> {
  const config = await loadStylesConfig();
  return config.styles.filter(style => style.category === category);
}

/**
 * 获取风格的HTML文件URL
 */
export function getStyleHtmlUrl(htmlFile: string): string {
  return `/styles/${htmlFile}`;
}

/**
 * 重新加载样式配置（清除缓存）
 */
export function reloadStylesConfig(): void {
  stylesConfig = null;
}

/**
 * 获取所有可用的类别
 */
export async function getAllCategories(): Promise<string[]> {
  const config = await loadStylesConfig();
  const categories = new Set(config.styles.map(style => style.category));
  return Array.from(categories);
}

/**
 * 获取所有可用的标签
 */
export async function getAllTags(): Promise<string[]> {
  const config = await loadStylesConfig();
  const tags = new Set(config.styles.flatMap(style => style.tags));
  return Array.from(tags);
}

/**
 * 搜索风格
 */
export async function searchStyles(query: string): Promise<StyleConfig[]> {
  const config = await loadStylesConfig();
  const lowercaseQuery = query.toLowerCase();
  
  return config.styles.filter(style =>
    style.name.toLowerCase().includes(lowercaseQuery) ||
    style.description.toLowerCase().includes(lowercaseQuery) ||
    style.characteristics.some(char => char.toLowerCase().includes(lowercaseQuery)) ||
    style.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

/**
 * 验证风格配置
 */
export function validateStyleConfig(config: StyleConfig): boolean {
  const requiredFields = ['id', 'name', 'htmlFile'];
  return requiredFields.every(field => field in config && config[field as keyof StyleConfig]);
}

/**
 * 添加新的风格配置（仅限开发模式）
 */
export async function addStyleConfig(newStyle: StyleConfig): Promise<boolean> {
  if (process.env.NODE_ENV !== 'development') {
    console.warn('Adding style config is only available in development mode');
    return false;
  }

  if (!validateStyleConfig(newStyle)) {
    console.error('Invalid style configuration');
    return false;
  }

  const config = await loadStylesConfig();
  
  // 检查ID是否已存在
  if (config.styles.some(style => style.id === newStyle.id)) {
    console.error(`Style with ID "${newStyle.id}" already exists`);
    return false;
  }

  config.styles.push(newStyle);
  stylesConfig = config;
  
  console.log(`Style "${newStyle.name}" added successfully`);
  return true;
} 