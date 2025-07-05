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
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">登录</h3>
          <div className="space-y-3">
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="邮箱"
              readOnly
            />
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="密码"
              type="password"
              readOnly
            />
            <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
              登录
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'neobrutalism',
      name: 'Neobrutalism',
      style: '新粗野主义 - 大胆直接',
      component: (
        <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-lg font-bold text-black mb-3 font-mono">LOGIN!</h3>
          <div className="space-y-3">
            <input 
              className="w-full px-3 py-2 border-2 border-black bg-white font-mono focus:outline-none"
              placeholder="EMAIL"
              readOnly
            />
            <input 
              className="w-full px-3 py-2 border-2 border-black bg-white font-mono focus:outline-none"
              placeholder="PASSWORD"
              type="password"
              readOnly
            />
            <button className="w-full bg-yellow-400 border-2 border-black py-2 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              LOGIN NOW!
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'glassmorphism',
      name: 'Glassmorphism',
      style: '玻璃形态 - 透明模糊',
      component: (
        <div className="p-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Sign In</h3>
          <div className="space-y-3">
            <input 
              className="w-full px-3 py-2 bg-white/40 backdrop-blur-sm border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 placeholder-gray-600"
              placeholder="Email"
              readOnly
            />
            <input 
              className="w-full px-3 py-2 bg-white/40 backdrop-blur-sm border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 placeholder-gray-600"
              placeholder="Password"
              type="password"
              readOnly
            />
            <button className="w-full bg-gradient-to-r from-blue-400/80 to-purple-400/80 backdrop-blur-sm text-white py-2 rounded-lg hover:from-blue-500/80 hover:to-purple-500/80 transition-all">
              Sign In
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'apple',
      name: 'Apple Design',
      style: 'Apple风格 - 精致优雅',
      component: (
        <div className="p-6 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-3 -apple-system">Sign In</h3>
          <div className="space-y-3">
            <input 
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              placeholder="Email"
              readOnly
            />
            <input 
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              placeholder="Password"
              type="password"
              readOnly
            />
            <button className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium">
              Sign In
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'material',
      name: 'Material Design',
      style: 'Material - 层次分明',
      component: (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Sign in</h3>
          <div className="space-y-4">
            <div className="relative">
              <input 
                className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-purple-500 transition-colors peer"
                placeholder=" "
                readOnly
              />
              <label className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-500">
                Email
              </label>
            </div>
            <div className="relative">
              <input 
                className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-purple-500 transition-colors peer"
                placeholder=" "
                type="password"
                readOnly
              />
              <label className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-purple-500">
                Password
              </label>
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition-colors font-medium uppercase tracking-wide">
              Sign in
            </button>
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
        currentStyleIndex === 1 ? 'bg-gradient-to-br from-yellow-50 to-red-50' :
        currentStyleIndex === 2 ? 'bg-gradient-to-br from-blue-50 to-purple-50' :
        currentStyleIndex === 3 ? 'bg-gradient-to-br from-gray-50 to-indigo-50' :
        'bg-gradient-to-br from-purple-50 to-pink-50'
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
            同一个组件，五种风格
          </h3>
          <p className="text-gray-600">
            看看登录表单在不同设计语言下的表现
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