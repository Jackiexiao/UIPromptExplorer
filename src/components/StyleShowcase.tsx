import React from 'react';
import { DesignStyle, ComponentExample } from '../data/themes';

// Import all style components
import { NeobrutalistComponents } from './styles/NeobrutalistComponents';
import { BentoGridComponents } from './styles/BentoGridComponents';
import { AppleDesignComponents } from './styles/AppleDesignComponents';
import { MaterialDesignComponents } from './styles/MaterialDesignComponents';
import {
  ModernMinimalButton,
  ModernMinimalCard,
  ModernMinimalForm,
  ModernMinimalNavigation,
  ModernMinimalLayout,
  ModernMinimalDataDisplay
} from './styles/ModernMinimalComponents';

interface StyleShowcaseProps {
  style: DesignStyle;
  selectedCategory?: string;
}

export function StyleShowcase({ style, selectedCategory }: StyleShowcaseProps) {
  
  const renderComponent = (example: ComponentExample) => {
    // Modern Minimal 组件使用单独的导出
    if (style.id === 'modern-minimal') {
      switch (example.category) {
        case 'button':
          return <ModernMinimalButton key={example.id} />;
        case 'card':
          return <ModernMinimalCard key={example.id} />;
        case 'form':
          return <ModernMinimalForm key={example.id} />;
        case 'navigation':
          return <ModernMinimalNavigation key={example.id} />;
        case 'layout':
          return <ModernMinimalLayout key={example.id} />;
        case 'data-display':
          return <ModernMinimalDataDisplay key={example.id} />;
        default:
          return (
            <div key={example.id} className="p-6 bg-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">{example.name}</h3>
              <p className="text-gray-600 text-sm">{example.description}</p>
              <p className="text-xs text-gray-500 mt-2">
                组件正在开发中...
              </p>
            </div>
          );
      }
    }

    // 其他风格使用现有的组件结构
    switch (style.id) {
      case 'neobrutalism':
        return <NeobrutalistComponents key={example.id} example={example} />;
      case 'bento-grid':
        return <BentoGridComponents key={example.id} example={example} />;
      case 'apple-design':
        return <AppleDesignComponents key={example.id} example={example} />;
      case 'material-design':
        return <MaterialDesignComponents key={example.id} example={example} />;
      default:
        return (
          <div key={example.id} className="p-6 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-2">{example.name}</h3>
            <p className="text-gray-600 text-sm">{example.description}</p>
            <p className="text-xs text-gray-500 mt-2">
              组件正在开发中...
            </p>
          </div>
        );
    }
  };

  const filteredExamples = selectedCategory 
    ? style.examples.filter(example => example.category === selectedCategory)
    : style.examples;

  const getThemeClass = () => {
    switch (style.id) {
      case 'modern-minimal':
        return 'theme-modern';
      case 'neobrutalism':
        return 'theme-neobrutalism';
      case 'bento-grid':
        return 'theme-bento';
      case 'apple-design':
        return 'theme-apple';
      case 'material-design':
        return 'theme-material';
      default:
        return 'theme-modern';
    }
  };

  return (
    <div className={`w-full min-h-screen ${getThemeClass()}`}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="showcase-container p-8">
          {filteredExamples.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-4">
                暂无该类别的组件示例
              </h3>
              <p className="text-gray-600">
                请选择其他类别或查看所有组件。
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredExamples.map(renderComponent)}
            </div>
          )}
        </div>
        
        {/* Style Guidelines Section */}
        <div className="showcase-container p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-6">设计指南</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {style.id === 'modern-minimal' && (
              <>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">设计原则</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 简洁优雅的设计语言</li>
                    <li>• 功能性优先</li>
                    <li>• 清晰的视觉层次</li>
                    <li>• 响应式设计</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">配色方案</h3>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded border"></div>
                    <div className="w-8 h-8 bg-gray-900 rounded border"></div>
                    <div className="w-8 h-8 bg-gray-100 rounded border"></div>
                    <div className="w-8 h-8 bg-white rounded border border-gray-300"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">适用场景</h3>
                  <p className="text-sm text-gray-600">
                    企业级应用、SaaS产品、管理后台、专业工具
                  </p>
                </div>
              </>
            )}
            
            {style.id === 'neobrutalism' && (
              <>
                <div className="space-y-2">
                  <h3 className="font-medium text-black font-mono">设计原则</h3>
                  <ul className="text-sm text-black font-mono space-y-1">
                    <li>• 粗糙的边框和强烈的阴影</li>
                    <li>• 大胆的色彩对比</li>
                    <li>• 功能性优于装饰性</li>
                    <li>• 极简的几何形状</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-black font-mono">配色方案</h3>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-black rounded border-2 border-black"></div>
                    <div className="w-8 h-8 bg-yellow-400 rounded border-2 border-black"></div>
                    <div className="w-8 h-8 bg-red-500 rounded border-2 border-black"></div>
                    <div className="w-8 h-8 bg-green-500 rounded border-2 border-black"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-black font-mono">适用场景</h3>
                  <p className="text-sm text-black font-mono">
                    创意网站、个人作品集、实验性项目、艺术平台
                  </p>
                </div>
              </>
            )}
            
            {style.id === 'bento-grid' && (
              <>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">设计原则</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 整齐的网格布局</li>
                    <li>• 清晰的分割线</li>
                    <li>• 均衡的空间分配</li>
                    <li>• 强调内容的有序性</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">配色方案</h3>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded border"></div>
                    <div className="w-8 h-8 bg-gray-100 rounded border"></div>
                    <div className="w-8 h-8 bg-gray-50 rounded border"></div>
                    <div className="w-8 h-8 bg-white rounded border border-gray-300"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">适用场景</h3>
                  <p className="text-sm text-gray-600">
                    信息密集型仪表板、管理界面、数据展示
                  </p>
                </div>
              </>
            )}
            
            {/* Add more style guidelines for other styles... */}
          </div>
        </div>
      </div>
    </div>
  );
} 