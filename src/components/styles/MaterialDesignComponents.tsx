import React from 'react';
import { ComponentExample } from '../../data/themes';

interface MaterialDesignComponentsProps {
  example: ComponentExample;
}

export const MaterialDesignComponents: React.FC<MaterialDesignComponentsProps> = ({ example }) => {
  const materialStyle = {
    container: "bg-white rounded-lg p-6 shadow-lg elevation-2",
    card: "bg-white rounded-lg p-6 shadow-md elevation-1",
    button: "px-6 py-3 rounded-lg font-medium transition-all active:scale-95 uppercase text-sm tracking-wide",
    input: "px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 bg-gray-50 rounded-t-lg",
    fab: "w-14 h-14 rounded-full shadow-lg transition-all hover:shadow-xl active:scale-95",
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-teal-500 text-white hover:bg-teal-600",
    accent: "bg-orange-500 text-white hover:bg-orange-600",
    surface: "bg-white text-gray-900"
  };

  const renderComponent = () => {
    switch (example.category) {
      case 'button':
        return (
          <div className="space-y-4">
            <div className="flex gap-3">
              <button className={`${materialStyle.button} ${materialStyle.primary}`}>
                确认
              </button>
              <button className={`${materialStyle.button} border-2 border-purple-600 text-purple-600 bg-white hover:bg-purple-50`}>
                取消
              </button>
            </div>
            
            <div className="flex gap-3">
              <button className={`${materialStyle.button} ${materialStyle.secondary}`}>
                保存
              </button>
              <button className={`${materialStyle.button} ${materialStyle.accent}`}>
                编辑
              </button>
            </div>
            
            <div className="flex gap-3">
              <button className={`${materialStyle.fab} ${materialStyle.primary}`}>
                <span className="text-2xl">+</span>
              </button>
              <button className={`${materialStyle.fab} ${materialStyle.secondary}`}>
                <span className="text-xl">✓</span>
              </button>
            </div>
          </div>
        );

      case 'card':
        return (
          <div className="space-y-4">
            <div className={materialStyle.card}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Material Card</h3>
                  <p className="text-gray-600 text-sm">遵循Material Design规范</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                这是一个Material Design风格的卡片，具有适当的阴影层次和清晰的信息架构。
              </p>
              
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                  Material
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">
                  Design
                </span>
              </div>
              
              <div className="flex justify-end gap-2 mt-4">
                <button className="text-purple-600 font-medium px-4 py-2 uppercase text-sm tracking-wide">
                  学习更多
                </button>
                <button className="text-purple-600 font-medium px-4 py-2 uppercase text-sm tracking-wide">
                  操作
                </button>
              </div>
            </div>
            
            <div className={`${materialStyle.card} bg-gradient-to-r from-purple-50 to-teal-50`}>
              <h3 className="font-semibold text-lg mb-2">彩色卡片</h3>
              <p className="text-gray-700">支持Material Design的色彩系统</p>
            </div>
          </div>
        );

      case 'form':
        return (
          <div className={`${materialStyle.container} max-w-md`}>
            <h3 className="font-semibold text-xl mb-6">联系我们</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  姓名
                </label>
                <input 
                  className={materialStyle.input}
                  placeholder="请输入您的姓名"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  电子邮箱
                </label>
                <input 
                  className={materialStyle.input}
                  placeholder="example@email.com"
                  type="email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  消息
                </label>
                <textarea 
                  className={`${materialStyle.input} min-h-[100px] resize-none`}
                  placeholder="请输入您的消息"
                />
              </div>
              
              <div className="pt-4">
                <button className={`${materialStyle.button} ${materialStyle.primary} w-full`}>
                  发送消息
                </button>
              </div>
            </div>
          </div>
        );

      case 'navigation':
        return (
          <div className="space-y-4">
            <nav className="bg-purple-600 text-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-xl">Material App</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-white hover:bg-purple-700 rounded-lg transition-colors">
                    首页
                  </button>
                  <button className="px-4 py-2 text-white hover:bg-purple-700 rounded-lg transition-colors">
                    产品
                  </button>
                  <button className="px-4 py-2 text-white hover:bg-purple-700 rounded-lg transition-colors">
                    关于
                  </button>
                  <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium">
                    联系
                  </button>
                </div>
              </div>
            </nav>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex gap-2 justify-center">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-sm">
                  全部
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                  新品
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                  热门
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                  促销
                </button>
              </div>
            </div>
          </div>
        );

      case 'layout':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className={`${materialStyle.card} bg-gradient-to-br from-purple-50 to-purple-100`}>
                <h3 className="font-semibold text-lg mb-2">主要内容</h3>
                <p className="text-gray-700 text-sm">
                  展示主要的内容和功能
                </p>
              </div>
              
              <div className={`${materialStyle.card} bg-gradient-to-br from-teal-50 to-teal-100`}>
                <h3 className="font-semibold text-lg mb-2">侧边栏</h3>
                <p className="text-gray-700 text-sm">
                  导航和辅助功能
                </p>
              </div>
            </div>
            
            <div className={`${materialStyle.card} bg-gradient-to-r from-orange-50 to-purple-50`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Material Design 3</h3>
                  <p className="text-gray-600 text-sm">最新的设计系统</p>
                </div>
                <button className={`${materialStyle.fab} ${materialStyle.primary}`}>
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                </div>
                <p className="text-sm font-medium">设计</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <div className="w-8 h-8 bg-teal-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-sm font-medium">开发</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                </div>
                <p className="text-sm font-medium">测试</p>
              </div>
            </div>
          </div>
        );

      case 'data-display':
        return (
          <div className="space-y-4">
            <div className={materialStyle.card}>
              <h3 className="font-semibold text-lg mb-4">性能指标</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">CPU使用率</p>
                      <p className="text-sm text-gray-600">当前状态</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">75%</p>
                    <p className="text-sm text-gray-600">正常</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">内存使用</p>
                      <p className="text-sm text-gray-600">当前状态</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">4.2GB</p>
                    <p className="text-sm text-gray-600">of 8GB</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: '52%' }}></div>
                </div>
              </div>
            </div>
            
            <div className={`${materialStyle.card} bg-gradient-to-r from-purple-50 to-teal-50`}>
              <h3 className="font-semibold text-lg mb-4">今日统计</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">8,549</p>
                  <p className="text-sm text-gray-600">页面浏览量</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-teal-600">1,234</p>
                  <p className="text-sm text-gray-600">独立访客</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="text-center text-gray-500">暂无组件示例</div>;
    }
  };

  return (
    <div className="w-full">
      {renderComponent()}
    </div>
  );
}; 