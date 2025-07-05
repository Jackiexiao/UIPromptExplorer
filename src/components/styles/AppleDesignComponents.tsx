import React from 'react';
import { ComponentExample } from '../../data/themes';

interface AppleDesignComponentsProps {
  example: ComponentExample;
}

export const AppleDesignComponents: React.FC<AppleDesignComponentsProps> = ({ example }) => {
  const appleStyle = {
    container: "bg-white rounded-2xl p-6 shadow-sm",
    card: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
    button: "px-6 py-3 rounded-full font-medium transition-all active:scale-95",
    input: "px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    accent: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };

  const renderComponent = () => {
    switch (example.category) {
      case 'button':
        return (
          <div className="space-y-4">
            <div className="flex gap-3">
              <button className={`${appleStyle.button} ${appleStyle.primary}`}>
                继续
              </button>
              <button className={`${appleStyle.button} ${appleStyle.secondary}`}>
                取消
              </button>
            </div>
            
            <div className="flex gap-3">
              <button className={`${appleStyle.button} ${appleStyle.accent}`}>
                确认
              </button>
              <button className={`${appleStyle.button} ${appleStyle.danger}`}>
                删除
              </button>
            </div>
            
            <button className={`${appleStyle.button} ${appleStyle.primary} w-full`}>
              开始使用
            </button>
          </div>
        );

      case 'card':
        return (
          <div className="space-y-4">
            <div className={appleStyle.card}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Apple Card</h3>
                  <p className="text-gray-600 text-sm">简洁优雅的设计</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                这是一个典型的Apple风格卡片，具有圆角、微妙的阴影和精致的排版。
              </p>
              
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  设计
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  UI/UX
                </span>
              </div>
            </div>
            
            <div className={`${appleStyle.card} bg-gradient-to-r from-blue-50 to-purple-50`}>
              <h3 className="font-semibold text-lg mb-2">渐变卡片</h3>
              <p className="text-gray-700">支持优雅的渐变背景</p>
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