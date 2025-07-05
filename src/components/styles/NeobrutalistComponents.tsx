import React from 'react';
import { ComponentExample } from '../../data/themes';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

interface NeobrutalistComponentsProps {
  example: ComponentExample;
}

export const NeobrutalistComponents: React.FC<NeobrutalistComponentsProps> = ({ example }) => {
  const neobrutalistStyle = {
    button: "border-2 border-black bg-white text-black font-bold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all",
    card: "border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4",
    input: "border-2 border-black bg-white px-3 py-2 focus:outline-none focus:ring-0 focus:border-black",
    accent: "bg-yellow-400",
    destructive: "bg-red-500 text-white border-red-500",
    success: "bg-green-500 text-white border-green-500"
  };

  const renderComponent = () => {
    switch (example.category) {
      case 'button':
        return (
          <div className="space-y-4">
            <button className={neobrutalistStyle.button}>
              点击我
            </button>
            <button className={`${neobrutalistStyle.button} ${neobrutalistStyle.destructive}`}>
              删除
            </button>
            <button className={`${neobrutalistStyle.button} ${neobrutalistStyle.success}`}>
              确认
            </button>
            <button className={`${neobrutalistStyle.button} ${neobrutalistStyle.accent} text-black`}>
              主要按钮
            </button>
          </div>
        );

      case 'card':
        return (
          <div className="space-y-4">
            <div className={neobrutalistStyle.card}>
              <h3 className="font-bold text-lg mb-2">产品卡片</h3>
              <p className="text-gray-700 mb-3">这是一个新野兽派风格的产品卡片，具有粗糙的边框和强烈的阴影效果。</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-yellow-400 text-black font-bold text-sm border border-black">
                  新品
                </span>
                <span className="px-2 py-1 bg-green-400 text-black font-bold text-sm border border-black">
                  热卖
                </span>
              </div>
            </div>
            
            <div className={`${neobrutalistStyle.card} bg-pink-200`}>
              <h3 className="font-bold text-lg mb-2">彩色卡片</h3>
              <p className="text-gray-800">支持不同的背景色彩</p>
            </div>
          </div>
        );

      case 'form':
        return (
          <div className={`${neobrutalistStyle.card} max-w-md`}>
            <h3 className="font-bold text-lg mb-4">联系表单</h3>
            <div className="space-y-4">
              <div>
                <label className="block font-bold mb-2">姓名</label>
                <input 
                  className={neobrutalistStyle.input}
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block font-bold mb-2">邮箱</label>
                <input 
                  className={neobrutalistStyle.input}
                  placeholder="请输入您的邮箱"
                  type="email"
                />
              </div>
              <div>
                <label className="block font-bold mb-2">消息</label>
                <textarea 
                  className={`${neobrutalistStyle.input} min-h-[80px] resize-none`}
                  placeholder="请输入您的消息"
                />
              </div>
              <button className={`${neobrutalistStyle.button} ${neobrutalistStyle.accent} text-black w-full`}>
                发送消息
              </button>
            </div>
          </div>
        );

      case 'navigation':
        return (
          <div className="space-y-4">
            <nav className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl">BRUTAL NAV</h2>
                <div className="flex gap-2">
                  <button className={`${neobrutalistStyle.button} text-sm`}>首页</button>
                  <button className={`${neobrutalistStyle.button} text-sm`}>产品</button>
                  <button className={`${neobrutalistStyle.button} text-sm`}>关于</button>
                  <button className={`${neobrutalistStyle.button} ${neobrutalistStyle.accent} text-black text-sm`}>联系</button>
                </div>
              </div>
            </nav>
            
            <div className="border-2 border-black bg-gray-100 p-3">
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-white border-2 border-black font-bold text-sm">全部</button>
                <button className="px-3 py-1 bg-yellow-400 border-2 border-black font-bold text-sm">新品</button>
                <button className="px-3 py-1 bg-white border-2 border-black font-bold text-sm">热门</button>
                <button className="px-3 py-1 bg-white border-2 border-black font-bold text-sm">促销</button>
              </div>
            </div>
          </div>
        );

      case 'layout':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-black bg-yellow-400 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-bold">主要内容</h3>
                <p className="text-sm mt-2">这是主要的内容区域</p>
              </div>
              <div className="border-2 border-black bg-pink-300 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-bold">侧边栏</h3>
                <p className="text-sm mt-2">这是侧边栏区域</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="border-2 border-black bg-green-300 p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-bold text-sm">卡片 1</div>
              </div>
              <div className="border-2 border-black bg-blue-300 p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-bold text-sm">卡片 2</div>
              </div>
              <div className="border-2 border-black bg-purple-300 p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-bold text-sm">卡片 3</div>
              </div>
            </div>
          </div>
        );

      case 'data-display':
        return (
          <div className="space-y-4">
            <div className={neobrutalistStyle.card}>
              <h3 className="font-bold text-lg mb-4">数据统计</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold">销售额</span>
                  <span className="px-2 py-1 bg-green-400 text-black font-bold text-sm border border-black">
                    ↑ 12%
                  </span>
                </div>
                <div className="border-2 border-black bg-gray-100 h-4 overflow-hidden">
                  <div className="bg-green-400 h-full w-3/4 border-r-2 border-black"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold">访问量</span>
                  <span className="px-2 py-1 bg-red-400 text-black font-bold text-sm border border-black">
                    ↓ 3%
                  </span>
                </div>
                <div className="border-2 border-black bg-gray-100 h-4 overflow-hidden">
                  <div className="bg-red-400 h-full w-1/2 border-r-2 border-black"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold">用户数</span>
                  <span className="px-2 py-1 bg-yellow-400 text-black font-bold text-sm border border-black">
                    ↑ 8%
                  </span>
                </div>
                <div className="border-2 border-black bg-gray-100 h-4 overflow-hidden">
                  <div className="bg-yellow-400 h-full w-2/3 border-r-2 border-black"></div>
                </div>
              </div>
            </div>
            
            <div className={`${neobrutalistStyle.card} bg-cyan-100`}>
              <h3 className="font-bold text-lg mb-2">实时数据</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-sm">在线用户</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5,678</div>
                  <div className="text-sm">今日访问</div>
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