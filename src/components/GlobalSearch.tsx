import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, Hash, Palette, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UiTheme, uiThemes } from '../data/themes';
import { StyleConfig } from '../data/stylesLoader';
import { useI18n } from '../hooks/useI18n';
import { getStyleNameInChinese } from '../utils/styleTranslations';

interface SearchResult {
  type: 'theme' | 'style';
  id: string;
  title: string;
  description: string;
  category?: string;
  tags?: string[];
  characteristics?: string[];
  match: string; // 匹配的字段
}

interface GlobalSearchProps {
  styles: StyleConfig[];
  onThemeSelect: (theme: UiTheme) => void;
  onStyleSelect: (style: StyleConfig) => void;
}

export function GlobalSearch({ styles, onThemeSelect, onStyleSelect }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useI18n();

  // 搜索结果
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // 搜索主题
    uiThemes.forEach(theme => {
      const matches: string[] = [];
      
      if (theme.title.toLowerCase().includes(lowercaseQuery)) {
        matches.push('标题');
      }
      if (theme.description.toLowerCase().includes(lowercaseQuery)) {
        matches.push('描述');
      }
      if (theme.category.toLowerCase().includes(lowercaseQuery)) {
        matches.push('分类');
      }
      if (theme.uiStyle.toLowerCase().includes(lowercaseQuery)) {
        matches.push('UI风格');
      }
      if (theme.prompt.toLowerCase().includes(lowercaseQuery)) {
        matches.push('提示词');
      }

      if (matches.length > 0) {
        results.push({
          type: 'theme',
          id: theme.id,
          title: theme.title,
          description: theme.description,
          category: theme.category,
          match: matches.join(', ')
        });
      }
    });

    // 搜索设计风格
    styles.forEach(style => {
      const matches: string[] = [];
      
      if (style.name.toLowerCase().includes(lowercaseQuery)) {
        matches.push('名称');
      }
      if (style.description.toLowerCase().includes(lowercaseQuery)) {
        matches.push('描述');
      }
      if (style.category.toLowerCase().includes(lowercaseQuery)) {
        matches.push('分类');
      }
      if (style.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))) {
        matches.push('标签');
      }
      if (style.characteristics.some(char => char.toLowerCase().includes(lowercaseQuery))) {
        matches.push('特征');
      }
      if (style.prompt.toLowerCase().includes(lowercaseQuery)) {
        matches.push('提示词');
      }

      if (matches.length > 0) {
        results.push({
          type: 'style',
          id: style.id,
          title: getStyleNameInChinese(style.name),
          description: style.description,
          category: style.category,
          tags: style.tags,
          characteristics: style.characteristics,
          match: matches.join(', ')
        });
      }
    });

    return results.slice(0, 10); // 限制结果数量
  }, [query, styles]);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (searchResults[selectedIndex]) {
            handleResultClick(searchResults[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setQuery('');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, searchResults]);

  // 重置选择索引
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'theme') {
      const theme = uiThemes.find(t => t.id === result.id);
      if (theme) {
        onThemeSelect(theme);
      }
    } else {
      const style = styles.find(s => s.id === result.id);
      if (style) {
        onStyleSelect(style);
      }
    }
    setIsOpen(false);
    setQuery('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.length > 0);
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  const getResultIcon = (result: SearchResult) => {
    switch (result.type) {
      case 'theme':
        return <FileText className="w-4 h-4 text-blue-500" />;
      case 'style':
        return <Palette className="w-4 h-4 text-purple-500" />;
      default:
        return <Hash className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="relative">
      {/* 搜索输入框 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={t('search.placeholder')}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 搜索结果下拉框 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            {searchResults.length > 0 ? (
              <div className="py-2">
                {searchResults.map((result, index) => (
                  <button
                    key={`${result.type}-${result.id}`}
                    onClick={() => handleResultClick(result)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                      index === selectedIndex ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {getResultIcon(result)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-gray-900 truncate">
                            {result.title}
                          </h4>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {result.type === 'theme' ? '主题' : '风格'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {result.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                          <span>匹配: {result.match}</span>
                          {result.category && (
                            <span className="bg-gray-100 px-2 py-0.5 rounded">
                              {result.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : query ? (
              <div className="py-8 text-center text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p className="text-sm">{t('search.no_results')}</p>
                <p className="text-xs mt-1 text-gray-400">
                  {t('search.suggestions')}: "现代", "卡片", "按钮", "仪表盘"
                </p>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 