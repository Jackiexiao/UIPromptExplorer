import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, Hash, Palette, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UiTheme, uiThemes } from '../data/themes';
import { StyleConfig } from '../data/stylesLoader';

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
          title: style.name,
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
          placeholder="搜索设计风格、主题、标签..."
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

      {/* 搜索结果下拉 */}
      <AnimatePresence>
        {isOpen && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            <div className="p-2">
              <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-100">
                找到 {searchResults.length} 个结果
              </div>
              {searchResults.map((result, index) => (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => handleResultClick(result)}
                  className={`w-full text-left px-3 py-3 rounded-md transition-colors ${
                    index === selectedIndex
                      ? 'bg-blue-50 border-blue-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {getResultIcon(result)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900 truncate">
                          {result.title}
                        </h4>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          result.type === 'theme' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {result.type === 'theme' ? '主题' : '风格'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                        {result.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>匹配: {result.match}</span>
                        {result.category && (
                          <>
                            <span>•</span>
                            <span>{result.category}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 无结果提示 */}
      <AnimatePresence>
        {isOpen && query && searchResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            <div className="p-6 text-center">
              <Search className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 mb-2">没有找到相关结果</p>
              <p className="text-sm text-gray-400">
                试试搜索 "minimal"、"brutalism" 或 "glassmorphism"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 搜索快捷键提示 */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 text-xs text-gray-400 text-center">
          <p>↑↓ 选择 • Enter 确认 • Esc 取消</p>
        </div>
      )}
    </div>
  );
} 