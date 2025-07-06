import React, { useState, useEffect, useRef } from 'react';
import { loadStylesConfig } from '../data/stylesLoader';
import { ChevronDown, ChevronUp, Eye, Code, Copy, Heart, Share2, ExternalLink, Palette, Sparkles, Star, Monitor, Smartphone, Tablet, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';
import { getStyleNameInChinese, getCharacteristicInChinese } from '../utils/styleTranslations';

interface StyleConfig {
  id: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  characteristics: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  tags: string[];
  prompt: string;
  htmlFile: string;
  isDefault?: boolean;
}

interface StyleShowcaseProps {
  className?: string;
}

export function StyleShowcase({ className = '' }: StyleShowcaseProps) {
  const [styles, setStyles] = useState<StyleConfig[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<StyleConfig | null>(null);
  const [expandedStyle, setExpandedStyle] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'detailed'>('cards');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  
  // 分页相关状态
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  // 添加ref用于滚动定位
  const showcaseRef = useRef<HTMLDivElement>(null);
  
  const { t } = useI18n();

  useEffect(() => {
    loadStylesConfig().then(config => {
      setStyles(config.styles);
      setLoading(false);
      
      // 设置默认选择的样式
      const defaultStyle = config.styles.find(s => s.isDefault) || config.styles[0];
      setSelectedStyle(defaultStyle);
      // 默认展开第一个风格
      if (defaultStyle) {
        setExpandedStyle(defaultStyle.id);
      }
      
      // 获取所有分类
      const uniqueCategories = [...new Set(config.styles.map(s => s.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  // 分类变化时重置到第一页
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handleStyleClick = (style: StyleConfig) => {
    setSelectedStyle(style);
    // 切换展开状态：如果点击的是当前展开的风格，则收起；否则展开新的风格
    setExpandedStyle(expandedStyle === style.id ? null : style.id);
  };

  const filteredStyles = selectedCategory === 'all' 
    ? styles 
    : styles.filter(style => style.category === selectedCategory);

  // 分页计算
  const totalPages = Math.ceil(filteredStyles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStyles = filteredStyles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // 滚动到设计风格栏目的顶部，而不是整个页面顶部
      if (showcaseRef.current) {
        showcaseRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    // 可以添加提示信息
  };

  const toggleFavorite = (styleId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(styleId)) {
        newFavorites.delete(styleId);
      } else {
        newFavorites.add(styleId);
      }
      return newFavorites;
    });
  };

  const openStylePreview = (style: StyleConfig) => {
    window.open(`/styles/${style.htmlFile}`, '_blank');
  };

  const getPreviewDimensions = () => {
    switch (previewMode) {
      case 'mobile':
        return { width: '375px', height: '667px' };
      case 'tablet':
        return { width: '768px', height: '1024px' };
      default:
        return { width: '100%', height: '100%' };
    }
  };

  // 分页导航组件
  const PaginationControls = () => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
      const pages = [];
      const maxVisible = 5;
      
      if (totalPages <= maxVisible) {
        // 如果总页数少于最大显示数，显示所有页码
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // 复杂的分页逻辑
        if (currentPage <= 3) {
          // 当前页在前3页
          pages.push(1, 2, 3, 4, 5);
        } else if (currentPage >= totalPages - 2) {
          // 当前页在后3页
          pages.push(totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
          // 当前页在中间
          pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
        }
      }
      
      return pages;
    };

    return (
      <div className="flex items-center justify-between p-6 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>
            显示 {startIndex + 1}-{Math.min(endIndex, filteredStyles.length)} 
            项，共 {filteredStyles.length} 项
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* 上一页按钮 */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg border transition-colors ${
              currentPage === 1
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {/* 页码按钮 */}
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-2 rounded-lg border transition-colors ${
                currentPage === page
                  ? 'border-blue-500 bg-blue-500 text-white'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          
          {/* 下一页按钮 */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg border transition-colors ${
              currentPage === totalPages
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-96 ${className}`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <Sparkles className="w-8 h-8 text-blue-600" />
          <div className="absolute inset-0 rounded-full bg-blue-100 animate-ping" />
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={showcaseRef} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      {/* 顶部控制栏 */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Palette className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900">{t('showcase.title')}</h3>
              <p className="text-sm text-gray-600">
                发现完美的设计语言 • 共 {filteredStyles.length} 个风格
              </p>
            </div>
          </div>
          
          {/* 布局和预览控制 */}
          <div className="flex items-center gap-3">
            {/* 预览设备选择 */}
            <div className="flex items-center gap-1 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`p-2 rounded-md transition-all ${
                  previewMode === 'desktop' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                title="桌面预览"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewMode('tablet')}
                className={`p-2 rounded-md transition-all ${
                  previewMode === 'tablet' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                title="平板预览"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`p-2 rounded-md transition-all ${
                  previewMode === 'mobile' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                title="手机预览"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* 视图切换 */}
            <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-2 rounded-md text-sm transition-all ${
                  viewMode === 'cards' 
                    ? 'bg-blue-100 text-blue-600 font-medium' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                卡片视图
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={`px-3 py-2 rounded-md text-sm transition-all ${
                  viewMode === 'detailed' 
                    ? 'bg-blue-100 text-blue-600 font-medium' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                详细视图
              </button>
            </div>
          </div>
        </div>
        
        {/* 分类标签 */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {t('showcase.all_categories')}
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 内容区域 */}
      {filteredStyles.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎨</div>
          <p className="text-gray-500">{t('showcase.select_style')}</p>
        </div>
      ) : viewMode === 'cards' ? (
        // 卡片式纯展示视图
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentStyles.map((style) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div 
                  className={`bg-white rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                    selectedStyle?.id === style.id
                      ? 'border-blue-500 shadow-lg ring-4 ring-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleStyleClick(style)}
                >
                  {/* iframe预览区域 */}
                  <div className="relative h-40 bg-gray-100 rounded-t-xl overflow-hidden">
                    <iframe
                      src={`/styles/${style.htmlFile}`}
                      className="w-full h-full border-0 pointer-events-none scale-50 origin-top-left"
                      style={{ 
                        width: '200%', 
                        height: '200%', 
                        transform: 'scale(0.5) translate(0, 0)' 
                      }}
                      title={`${style.name} 预览`}
                    />
                    
                    {/* 悬停遮罩层 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(style.id);
                          }}
                          className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        >
                          <Heart 
                            className={`w-4 h-4 ${
                              favorites.has(style.id) 
                                ? 'text-red-500 fill-red-500' 
                                : 'text-gray-600'
                            }`} 
                          />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openStylePreview(style);
                          }}
                          className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyPrompt(style.prompt);
                          }}
                          className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        >
                          <Copy className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* 卡片信息 */}
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {getStyleNameInChinese(style.name)}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {style.description}
                        </p>
                      </div>
                      
                      {/* 特征标签 */}
                      <div className="flex flex-wrap gap-1">
                        {style.characteristics.slice(0, 2).map((char, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {getCharacteristicInChinese(char)}
                          </span>
                        ))}
                        {style.characteristics.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            +{style.characteristics.length - 2}
                          </span>
                        )}
                      </div>
                      
                      {/* 底部颜色显示 */}
                      <div className="flex gap-1">
                        {Object.entries(style.colors).slice(0, 4).map(([key, color]) => (
                          <div
                            key={key}
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: color }}
                            title={`${key}: ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        // 详细视图：左侧选择器 + 右侧大预览
        <div className="flex h-[700px]">
          {/* 左侧样式选择器 */}
          <div className="w-80 border-r border-gray-200 flex flex-col">
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {currentStyles.map((style) => (
                <div key={style.id} className="border-b border-gray-100">
                  <div
                    className={`p-4 cursor-pointer transition-colors ${
                      selectedStyle?.id === style.id
                        ? 'bg-blue-50 border-r-2 border-blue-500'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleStyleClick(style)}
                  >
                    <div className="flex items-center gap-3">
                      {/* 小预览缩略图 */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                        <iframe
                          src={`/styles/${style.htmlFile}`}
                          className="w-full h-full border-0 pointer-events-none scale-25 origin-top-left"
                          style={{ 
                            width: '400%', 
                            height: '400%', 
                            transform: 'scale(0.25) translate(0, 0)' 
                          }}
                          title={`${style.name} 缩略图`}
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">
                          {getStyleNameInChinese(style.name)}
                        </h4>
                        <p className="text-sm text-gray-500 truncate">
                          {style.description}
                        </p>
                      </div>
                      
                      <div className="flex gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(style.id);
                          }}
                          className="p-1 rounded hover:bg-gray-200 transition-colors"
                        >
                          <Heart 
                            className={`w-3 h-3 ${
                              favorites.has(style.id) 
                                ? 'text-red-500 fill-red-500' 
                                : 'text-gray-400'
                            }`} 
                          />
                        </button>
                      </div>
                    </div>
                    
                    {/* 展开的详细信息 */}
                    <AnimatePresence>
                      {expandedStyle === style.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pt-3 border-t border-gray-200"
                        >
                          <div className="space-y-2">
                            {/* 特征标签 */}
                            <div className="flex flex-wrap gap-1">
                              {style.characteristics.map((char, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                                >
                                  {getCharacteristicInChinese(char)}
                                </span>
                              ))}
                            </div>
                            
                            {/* 颜色面板 */}
                            <div>
                              <p className="text-xs text-gray-500 mb-1">配色方案</p>
                              <div className="flex gap-1">
                                {Object.entries(style.colors).map(([key, color]) => (
                                  <div
                                    key={key}
                                    className="w-6 h-6 rounded border border-gray-300"
                                    style={{ backgroundColor: color }}
                                    title={`${key}: ${color}`}
                                  />
                                ))}
                              </div>
                            </div>
                            
                            {/* 操作按钮 */}
                            <div className="flex gap-2 pt-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  copyPrompt(style.prompt);
                                }}
                                className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                              >
                                <Copy className="w-3 h-3" />
                                复制提示词
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openStylePreview(style);
                                }}
                                className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                              >
                                <ExternalLink className="w-3 h-3" />
                                全屏预览
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧预览区域 */}
          <div className="flex-1 flex flex-col">
            {selectedStyle ? (
              <>
                {/* 预览头部 */}
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {getStyleNameInChinese(selectedStyle.name)}
                      </h3>
                      <p className="text-sm text-gray-600">{selectedStyle.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        {previewMode === 'desktop' ? '桌面预览' : 
                         previewMode === 'tablet' ? '平板预览' : '手机预览'}
                      </span>
                      <button
                        onClick={() => copyPrompt(selectedStyle.prompt)}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        复制提示词
                      </button>
                      <button
                        onClick={() => openStylePreview(selectedStyle)}
                        className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        全屏预览
                      </button>
                    </div>
                  </div>
                </div>

                {/* 预览内容 */}
                <div className="flex-1 p-4 bg-gray-100 flex items-center justify-center">
                  <div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
                    style={getPreviewDimensions()}
                  >
                    <iframe
                      src={`/styles/${selectedStyle.htmlFile}`}
                      className="w-full h-full border-0"
                      title={`${selectedStyle.name} 预览`}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Eye className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>{t('showcase.select_style')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* 分页导航 */}
      <PaginationControls />
    </div>
  );
} 