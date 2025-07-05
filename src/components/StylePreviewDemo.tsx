import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface StylePreview {
  id: string;
  name: string;
  style: string;
  component: React.ReactNode;
}

export function StylePreviewDemo() {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // 不同风格的示例组件
  const styleExamples: StylePreview[] = [
    {
      id: 'modern',
      name: 'Modern Minimal',
      style: 'Vercel风格 - 简约现代',
      component: (
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">用户</p>
                <p className="text-xl font-semibold text-gray-900">1,234</p>
                <p className="text-xs text-green-600">+12%</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">收入</p>
                <p className="text-xl font-semibold text-gray-900">¥5,678</p>
                <p className="text-xs text-green-600">+8%</p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">快速操作</p>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
                  新建
                </button>
                <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
                  导出
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'neobrutalism',
      name: 'Neobrutalism',
      style: '新粗野主义 - 大胆直接',
      component: (
        <div className="w-full max-w-md bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 bg-yellow-400 border-b-4 border-black">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-black font-mono">DASHBOARD!</h3>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-black rotate-45"></div>
                <div className="w-3 h-3 bg-black"></div>
                <div className="w-3 h-3 bg-red-500 rotate-45"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-pink-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xs font-bold text-black font-mono mb-1">USERS</p>
                <p className="text-xl font-black text-black font-mono">1,234</p>
                <p className="text-xs font-bold text-green-800 font-mono">+12%</p>
              </div>
              <div className="p-3 bg-cyan-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xs font-bold text-black font-mono mb-1">MONEY</p>
                <p className="text-xl font-black text-black font-mono">¥5,678</p>
                <p className="text-xs font-bold text-green-800 font-mono">+8%</p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-black font-mono">QUICK ACTIONS!</p>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-red-400 border-2 border-black text-black font-bold font-mono shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  NEW!
                </button>
                <button className="flex-1 px-3 py-2 bg-blue-400 border-2 border-black text-black font-bold font-mono shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  EXPORT!
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'glassmorphism',
      name: 'Glassmorphism',
      style: '玻璃形态 - 透明模糊',
      component: (
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Dashboard</h3>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
                <p className="text-xs text-white/70 mb-1">用户</p>
                <p className="text-xl font-semibold text-white">1,234</p>
                <p className="text-xs text-green-300">+12%</p>
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
                <p className="text-xs text-white/70 mb-1">收入</p>
                <p className="text-xl font-semibold text-white">¥5,678</p>
                <p className="text-xs text-green-300">+8%</p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-white/90">快速操作</p>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-400/60 to-purple-400/60 backdrop-blur-sm border border-white/30 text-white text-sm rounded-xl hover:from-blue-500/60 hover:to-purple-500/60 transition-all">
                  新建
                </button>
                <button className="flex-1 px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white text-sm rounded-xl hover:bg-white/30 transition-all">
                  导出
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'apple',
      name: 'Apple Design',
      style: 'Apple风格 - 精致优雅',
      component: (
        <div className="w-full max-w-md bg-white/90 backdrop-blur-2xl border border-gray-200/50 rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 bg-white/60 backdrop-blur-xl border-b border-gray-200/30">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display"'}}>Dashboard</h3>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50/80 backdrop-blur-sm rounded-2xl">
                <p className="text-xs text-gray-500 mb-2 font-medium">用户</p>
                <p className="text-2xl font-semibold text-gray-900" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display"'}}>1,234</p>
                <p className="text-xs text-green-600 font-medium">+12%</p>
              </div>
              <div className="p-4 bg-gray-50/80 backdrop-blur-sm rounded-2xl">
                <p className="text-xs text-gray-500 mb-2 font-medium">收入</p>
                <p className="text-2xl font-semibold text-gray-900" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display"'}}>¥5,678</p>
                <p className="text-xs text-green-600 font-medium">+8%</p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-900">快速操作</p>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-blue-500 text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition-all active:scale-95">
                  新建
                </button>
                <button className="flex-1 px-4 py-3 bg-gray-100 text-gray-900 text-sm font-medium rounded-xl hover:bg-gray-200 transition-all active:scale-95">
                  导出
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material',
      name: 'Material Design',
      style: 'Material - 层次分明',
      component: (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden" style={{elevation: '4'}}>
          {/* Header */}
          <div className="px-6 py-5 bg-purple-600 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium" style={{fontFamily: 'Roboto, sans-serif'}}>Dashboard</h3>
              <div className="flex gap-2">
                <div className="w-6 h-1 bg-white/30 rounded-full"></div>
                <div className="w-6 h-1 bg-white/30 rounded-full"></div>
                <div className="w-6 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-purple-500">
                <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide font-medium">用户</p>
                <p className="text-2xl font-bold text-gray-900" style={{fontFamily: 'Roboto, sans-serif'}}>1,234</p>
                <p className="text-xs text-green-600 font-medium">+12%</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-indigo-500">
                <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide font-medium">收入</p>
                <p className="text-2xl font-bold text-gray-900" style={{fontFamily: 'Roboto, sans-serif'}}>¥5,678</p>
                <p className="text-xs text-green-600 font-medium">+8%</p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700 uppercase tracking-wide">快速操作</p>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-purple-600 text-white text-sm font-medium rounded shadow-md hover:bg-purple-700 hover:shadow-lg transition-all active:shadow-sm uppercase tracking-wide">
                  新建
                </button>
                <button className="flex-1 px-4 py-3 border border-purple-600 text-purple-600 text-sm font-medium rounded hover:bg-purple-50 transition-all uppercase tracking-wide">
                  导出
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // 自动播放逻辑
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentStyleIndex((prev) => (prev + 1) % styleExamples.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay, styleExamples.length]);

  const handleStyleChange = (index: number) => {
    setCurrentStyleIndex(index);
    setIsAutoPlay(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const resetDemo = () => {
    setCurrentStyleIndex(0);
    setIsAutoPlay(true);
  };

  return (
    <div className="relative">
      {/* 背景渐变，根据当前风格变化 */}
      <div className={`absolute inset-0 rounded-3xl transition-all duration-1000 ${
        currentStyleIndex === 0 ? 'bg-gradient-to-br from-gray-50 to-blue-50' :
        currentStyleIndex === 1 ? 'bg-gradient-to-br from-yellow-200 to-pink-200' :
        currentStyleIndex === 2 ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500' :
        currentStyleIndex === 3 ? 'bg-gradient-to-br from-blue-50 to-indigo-100' :
        'bg-gradient-to-br from-purple-100 to-indigo-100'
      }`} />
      
      <div className="relative p-8">
        {/* 标题和控制 */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={toggleAutoPlay}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white transition-colors"
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={resetDemo}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            同一个界面，五种风格
          </h3>
          <p className="text-gray-600">
            看看Dashboard在不同设计语言下的惊艳表现
          </p>
        </div>

        {/* 主预览区 */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStyleIndex}
                initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-80"
              >
                {styleExamples[currentStyleIndex].component}
              </motion.div>
            </AnimatePresence>
            
            {/* 当前风格信息 */}
            <motion.div
              key={`info-${currentStyleIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-center"
            >
              <h4 className="font-semibold text-gray-900">
                {styleExamples[currentStyleIndex].name}
              </h4>
              <p className="text-sm text-gray-600">
                {styleExamples[currentStyleIndex].style}
              </p>
            </motion.div>
          </div>
        </div>

        {/* 风格选择器 */}
        <div className="flex justify-center gap-2 mb-6">
          {styleExamples.map((style, index) => (
            <button
              key={style.id}
              onClick={() => handleStyleChange(index)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                currentStyleIndex === index
                  ? 'bg-gray-900 text-white'
                  : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80'
              }`}
            >
              {style.name}
            </button>
          ))}
        </div>

        {/* 进度指示器 */}
        <div className="flex justify-center gap-2">
          {styleExamples.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentStyleIndex === index ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* 自动播放提示 */}
        {isAutoPlay && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-gray-500 mt-4"
          >
            自动切换中... 点击暂停按钮停止
          </motion.p>
        )}
      </div>
    </div>
  );
} 