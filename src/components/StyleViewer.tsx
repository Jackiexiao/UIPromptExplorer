import React, { useState, useEffect } from 'react';
import { StyleConfig, getStyleHtmlUrl } from '../data/stylesLoader';
import { ExternalLink, Copy, Check, Download, Code2 } from 'lucide-react';

interface StyleViewerProps {
  style: StyleConfig;
  selectedCategory?: string;
}

export function StyleViewer({ style, selectedCategory }: StyleViewerProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'info' | 'code'>('preview');

  const htmlUrl = getStyleHtmlUrl(style.htmlFile);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(style.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
    }
  };

  const handleOpenInNewTab = () => {
    window.open(htmlUrl, '_blank');
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{style.name}</h2>
            <p className="text-sm text-gray-600">{style.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleOpenInNewTab}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              title="在新标签页中打开"
            >
              <ExternalLink className="w-5 h-5" />
            </button>
            <button
              onClick={handleToggleFullscreen}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              title={isFullscreen ? '退出全屏' : '全屏预览'}
            >
              <Code2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'preview'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            预览
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'info'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            详情
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'code'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            代码
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'relative'}`}>
        {activeTab === 'preview' && (
          <div className="relative">
            {/* Loading indicator */}
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            )}
            
            {/* Iframe */}
            <iframe
              src={htmlUrl}
              className={`w-full border-0 ${isFullscreen ? 'h-screen' : 'h-[700px]'}`}
              onLoad={() => setIframeLoaded(true)}
              title={`${style.name} Preview`}
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
            
            {/* Fullscreen overlay controls */}
            {isFullscreen && (
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={handleToggleFullscreen}
                  className="px-4 py-2 bg-white text-gray-900 rounded-md shadow-lg hover:bg-gray-50 transition-colors"
                >
                  退出全屏
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'info' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">基本信息</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-600">名称：</span>
                    <span className="text-sm font-medium text-gray-900">{style.name}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">类别：</span>
                    <span className="text-sm font-medium text-gray-900">{style.category}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">作者：</span>
                    <span className="text-sm font-medium text-gray-900">{style.author}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">来源：</span>
                    <span className="text-sm font-medium text-gray-900">{style.source}</span>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">特点</h3>
                <div className="flex flex-wrap gap-2">
                  {style.characteristics.map((char, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Palette */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">色彩方案</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(style.colors).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <div
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: value }}
                      />
                      <span className="text-sm text-gray-600 capitalize">{key}</span>
                      <span className="text-sm font-mono text-gray-500">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">标签</h3>
                <div className="flex flex-wrap gap-2">
                  {style.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="p-6">
            <div className="space-y-4">
              {/* Prompt */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">AI 提示词</h3>
                  <button
                    onClick={handleCopyPrompt}
                    className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? '已复制' : '复制'}</span>
                  </button>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                    {style.prompt}
                  </pre>
                </div>
              </div>

              {/* HTML File Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">文件信息</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">HTML 文件：</span>
                      <span className="text-sm font-mono text-gray-900">{style.htmlFile}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">完整路径：</span>
                      <span className="text-sm font-mono text-gray-900">{htmlUrl}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Instructions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">使用说明</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-800 space-y-2">
                    <p>1. 使用上述提示词在 AI 工具中生成相似风格的设计</p>
                    <p>2. 参考色彩方案和设计特点进行自定义</p>
                    <p>3. 可以直接查看 HTML 文件的源代码进行学习</p>
                    <p>4. 建议结合具体需求调整提示词的描述</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 