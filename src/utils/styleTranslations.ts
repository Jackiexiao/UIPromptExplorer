// 设计风格名称的中英文映射
export const styleNameTranslations = {
  'Modern Minimal': '现代简约',
  'Neobrutalism': '新粗野主义',
  'Glassmorphism': '玻璃形态',
  'Windows 98': 'Windows 98',
  'Metro/Fluent Design': '微软Fluent设计',
  'Flat Design': '扁平化设计',
  'Neumorphism': '新拟物风格',
  'Dark Mode': '深色模式',
  'Material Design': 'Material Design',
  'Apple Design': 'Apple设计',
  'Skeuomorphism': '拟物化设计',
  'Brutalism': '粗野主义',
  'Minimalism': '极简主义',
  'Swiss Design': '瑞士设计',
  'Bauhaus': '包豪斯',
  'Art Deco': '装饰艺术',
  'Memphis Design': '孟菲斯设计',
  'Retro': '复古',
  'Vintage': '经典',
  'Cyberpunk': '赛博朋克',
  'Vaporwave': '蒸汽波',
  'Y2K': '千禧年',
  'Web 2.0': 'Web 2.0',
  'Grunge': '垃圾摇滚',
  'Pop Art': '波普艺术',
  'Psychedelic': '迷幻',
  'Neon': '霓虹',
  'Gradient': '渐变',
  'Monochrome': '单色',
  'High Contrast': '高对比度'
};

// 分类名称的中英文映射
export const categoryTranslations = {
  'modern': '现代',
  'experimental': '实验性',
  'retro': '复古',
  'classic': '经典',
  'enterprise': '企业级',
  'artistic': '艺术性',
  'playful': '趣味性',
  'professional': '专业',
  'minimal': '极简',
  'decorative': '装饰性'
};

// 获取设计风格的中文名称
export function getStyleNameInChinese(englishName: string): string {
  return styleNameTranslations[englishName as keyof typeof styleNameTranslations] || englishName;
}

// 获取分类的中文名称
export function getCategoryNameInChinese(englishCategory: string): string {
  return categoryTranslations[englishCategory as keyof typeof categoryTranslations] || englishCategory;
}

// 获取所有支持的风格名称
export function getAllStyleNames(): string[] {
  return Object.keys(styleNameTranslations);
}

// 获取所有支持的分类名称
export function getAllCategoryNames(): string[] {
  return Object.keys(categoryTranslations);
}

// 特征标签的中英文映射
export const characteristicTranslations = {
  'minimalist': '极简主义',
  'clean': '简洁',
  'modern': '现代',
  'professional': '专业',
  'bold': '大胆',
  'contrast': '对比',
  'geometric': '几何',
  'experimental': '实验性',
  'glass': '玻璃',
  'blur': '模糊',
  'transparency': '透明',
  'retro': '复古',
  'system': '系统',
  '3d': '3D',
  'vintage': '经典',
  'windows': 'Windows',
  'microsoft': '微软',
  'tiles': '磁贴',
  'fluent': 'Fluent',
  'enterprise': '企业级',
  'flat': '扁平',
  'simple': '简单',
  'functional': '功能性',
  'classic': '经典',
  'neumorphism': '新拟物',
  'soft': '柔和',
  'shadow': '阴影',
  'dark': '深色',
  'night': '夜间',
  'high-contrast': '高对比度',
  'glow': '发光',
  'material': 'Material',
  'elevation': '层次',
  'ripple': '波纹',
  'colorful': '多彩',
  'refined': '精致',
  'elegant': '优雅',
  'typography': '字体',
  'spacing': '间距',
  'brutal': '粗野',
  'thick-borders': '粗边框',
  'monospace': '等宽字体',
  'vibrant': '鲜艳',
  'skeuomorphic': '拟物化',
  'realistic': '逼真',
  'textures': '纹理',
  'details': '细节'
};

// 获取特征标签的中文名称
export function getCharacteristicInChinese(englishCharacteristic: string): string {
  return characteristicTranslations[englishCharacteristic as keyof typeof characteristicTranslations] || englishCharacteristic;
} 