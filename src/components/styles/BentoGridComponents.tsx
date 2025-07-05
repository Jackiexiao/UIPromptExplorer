import React from 'react';
import { ComponentExample } from '../../data/themes';

interface BentoGridComponentsProps {
  example: ComponentExample;
}

export const BentoGridComponents: React.FC<BentoGridComponentsProps> = ({ example }) => {
  const bentoStyle = {
    container: "grid gap-2 bg-gray-50 p-4 rounded-lg",
    card: "bg-white rounded-lg p-4 border border-gray-200 shadow-sm",
    button: "px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80",
    input: "px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-100 text-gray-700",
    accent: "bg-blue-100 text-blue-700",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white"
  };

  const renderComponent = () => {
    switch (example.category) {
      case 'button':
        return (
          <div className={`${bentoStyle.container} grid-cols-2`}>
            <button className={`${bentoStyle.button} ${bentoStyle.primary}`}>
              主要按钮
            </button>
            <button className={`${bentoStyle.button} ${bentoStyle.secondary}`}>
              次要按钮
            </button>
            <button className={`${bentoStyle.button} ${bentoStyle.success}`}>
              成功按钮
            </button>
            <button className={`${bentoStyle.button} ${bentoStyle.danger}`}>
              危险按钮
            </button>
          </div>
        );

      case 'card':
        return (
          <div className={`${bentoStyle.container} grid-cols-2`}>
            <div className={`${bentoStyle.card} col-span-2`}>
              <h3 className="font-semibold text-lg mb-2">主要卡片</h3>
              <p className="text-gray-600 text-sm mb-3">这是一个跨越两列的主要卡片，展示了Bento Grid的灵活布局。</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">标签1</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">标签2</span>
              </div>
            </div>
            
            <div className={bentoStyle.card}>
              <h4 className="font-semibold mb-2">卡片A</h4>
              <p className="text-gray-600 text-sm">简洁的内容展示</p>
            </div>
            
            <div className={bentoStyle.card}>
              <h4 className="font-semibold mb-2">卡片B</h4>
              <p className="text-gray-600 text-sm">均衡的空间分配</p>
            </div>
          </div>
        );

      case 'form':
        return (
          <div className={`${bentoStyle.card} max-w-md`}>
            <h3 className="font-semibold text-lg mb-4">注册表单</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">姓</label>
                  <input className={bentoStyle.input} placeholder="张" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">名</label>
                  <input className={bentoStyle.input} placeholder="三" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">邮箱</label>
                <input className={bentoStyle.input} placeholder="example@email.com" type="email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">密码</label>
                <input className={bentoStyle.input} placeholder="••••••••" type="password" />
              </div>
              
              <button className={`${bentoStyle.button} ${bentoStyle.primary} w-full`}>
                创建账户
              </button>
            </div>
          </div>
        );

      case 'navigation':
        return (
          <div className="space-y-3">
            <nav className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg">BentoNav</h2>
                <div className="flex gap-2">
                  <button className={`${bentoStyle.button} ${bentoStyle.secondary} text-sm`}>首页</button>
                  <button className={`${bentoStyle.button} ${bentoStyle.secondary} text-sm`}>产品</button>
                  <button className={`${bentoStyle.button} ${bentoStyle.secondary} text-sm`}>关于</button>
                  <button className={`${bentoStyle.button} ${bentoStyle.primary} text-sm`}>联系</button>
                </div>
              </div>
            </nav>
            
            <div className={`${bentoStyle.container} grid-cols-4`}>
              <button className={`${bentoStyle.button} ${bentoStyle.accent}`}>全部</button>
              <button className={`${bentoStyle.button} ${bentoStyle.secondary}`}>新品</button>
              <button className={`${bentoStyle.button} ${bentoStyle.secondary}`}>热门</button>
              <button className={`${bentoStyle.button} ${bentoStyle.secondary}`}>促销</button>
            </div>
          </div>
        );

      case 'layout':
        return (
          <div className={`${bentoStyle.container} grid-cols-4 grid-rows-3`}>
            <div className={`${bentoStyle.card} col-span-2 row-span-2`}>
              <h3 className="font-semibold mb-2">主要内容区</h3>
              <p className="text-gray-600 text-sm">这是主要的内容展示区域，占据较大空间。</p>
            </div>
            
            <div className={`${bentoStyle.card} col-span-2`}>
              <h4 className="font-semibold mb-2">顶部横幅</h4>
              <p className="text-gray-600 text-sm">重要信息展示</p>
            </div>
            
            <div className={`${bentoStyle.card}`}>
              <h4 className="font-semibold mb-1">统计1</h4>
              <p className="text-2xl font-bold text-blue-600">1,234</p>
            </div>
            
            <div className={`${bentoStyle.card}`}>
              <h4 className="font-semibold mb-1">统计2</h4>
              <p className="text-2xl font-bold text-green-600">5,678</p>
            </div>
            
            <div className={`${bentoStyle.card} col-span-2`}>
              <h4 className="font-semibold mb-2">底部信息</h4>
              <p className="text-gray-600 text-sm">附加信息和链接</p>
            </div>
            
            <div className={`${bentoStyle.card} col-span-2`}>
              <h4 className="font-semibold mb-2">操作面板</h4>
              <div className="flex gap-2">
                <button className={`${bentoStyle.button} ${bentoStyle.primary} text-sm`}>编辑</button>
                <button className={`${bentoStyle.button} ${bentoStyle.secondary} text-sm`}>删除</button>
              </div>
            </div>
          </div>
        );

      case 'data-display':
        return (
          <div className={`${bentoStyle.container} grid-cols-3 grid-rows-2`}>
            <div className={`${bentoStyle.card} col-span-2`}>
              <h3 className="font-semibold mb-3">数据趋势</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">销售额</span>
                  <span className="text-sm font-semibold text-green-600">+12%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">访问量</span>
                  <span className="text-sm font-semibold text-blue-600">+8%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            
            <div className={`${bentoStyle.card}`}>
              <h4 className="font-semibold mb-2">总收入</h4>
              <p className="text-2xl font-bold text-green-600">¥12,345</p>
              <p className="text-sm text-gray-600 mt-1">本月</p>
            </div>
            
            <div className={`${bentoStyle.card}`}>
              <h4 className="font-semibold mb-2">活跃用户</h4>
              <p className="text-2xl font-bold text-blue-600">2,456</p>
              <p className="text-sm text-gray-600 mt-1">在线</p>
            </div>
            
            <div className={`${bentoStyle.card} col-span-2`}>
              <h4 className="font-semibold mb-2">快速统计</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <p className="text-lg font-bold">156</p>
                  <p className="text-xs text-gray-600">订单</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">89</p>
                  <p className="text-xs text-gray-600">评论</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">234</p>
                  <p className="text-xs text-gray-600">点赞</p>
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