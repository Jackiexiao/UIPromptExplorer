import React from 'react';
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  User, 
  Menu, 
  Settings,
  BarChart3,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const ModernMinimalButton = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">按钮组件</h3>
    <div className="flex flex-wrap gap-3">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
        Primary
      </button>
      <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-medium">
        Secondary
      </button>
      <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
        Outline
      </button>
      <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium">
        Ghost
      </button>
    </div>
    
    <div className="flex gap-3 items-center">
      <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
        <Search className="w-4 h-4" />
      </button>
      <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
        <Heart className="w-4 h-4" />
      </button>
      <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
        <ShoppingCart className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export const ModernMinimalCard = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">卡片组件</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">用户资料</h4>
            <p className="text-sm text-gray-500">个人信息管理</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">查看和编辑个人资料，管理账户设置和偏好配置。</p>
        <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
          了解更多 →
        </button>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">数据分析</h4>
            <p className="text-sm text-gray-500">统计报告</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">查看详细的数据分析报告，了解业务趋势和用户行为。</p>
        <button className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors">
          查看报告 →
        </button>
      </div>
    </div>
  </div>
);

export const ModernMinimalForm = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">表单组件</h3>
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            用户名
          </label>
          <input
            type="text"
            placeholder="请输入用户名"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            邮箱地址
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            密码
          </label>
          <input
            type="password"
            placeholder="请输入密码"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="remember" className="text-sm text-gray-700">
            记住我
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          登录
        </button>
      </form>
    </div>
  </div>
);

export const ModernMinimalNavigation = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">导航组件</h3>
    
    {/* 主导航栏 */}
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <div className="font-semibold text-gray-900">Logo</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">首页</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">产品</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">解决方案</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">关于我们</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-gray-900 transition-colors">登录</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            注册
          </button>
        </div>
      </div>
    </div>

    {/* 面包屑导航 */}
    <div className="flex items-center gap-2 text-sm">
      <a href="#" className="text-blue-600 hover:text-blue-700">首页</a>
      <span className="text-gray-400">/</span>
      <a href="#" className="text-blue-600 hover:text-blue-700">产品</a>
      <span className="text-gray-400">/</span>
      <span className="text-gray-700">当前页面</span>
    </div>

    {/* 标签导航 */}
    <div className="flex gap-2 border-b border-gray-200">
      <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">
        概览
      </button>
      <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
        详细信息
      </button>
      <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
        设置
      </button>
    </div>
  </div>
);

export const ModernMinimalLayout = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">布局组件</h3>
    
    {/* 网格布局 */}
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <h4 className="font-medium text-gray-900 mb-3">响应式网格</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="w-full h-20 bg-gray-200 rounded mb-3"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="w-full h-20 bg-gray-200 rounded mb-3"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="w-full h-20 bg-gray-200 rounded mb-3"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>

    {/* 侧边栏布局 */}
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <h4 className="font-medium text-gray-900 p-4 border-b border-gray-200">侧边栏布局</h4>
      <div className="flex">
        <div className="w-64 bg-gray-50 p-4 border-r border-gray-200">
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
              <Settings className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">设置</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-white rounded-lg transition-colors">
              <User className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">用户</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-white rounded-lg transition-colors">
              <BarChart3 className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">分析</span>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ModernMinimalDataDisplay = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">数据展示</h3>
    
    {/* 统计卡片 */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">总用户数</p>
            <p className="text-2xl font-bold text-gray-900">12,345</p>
            <p className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +12.5%
            </p>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">月收入</p>
            <p className="text-2xl font-bold text-gray-900">￥98,765</p>
            <p className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +8.2%
            </p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">订单数</p>
            <p className="text-2xl font-bold text-gray-900">456</p>
            <p className="text-sm text-red-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 rotate-180" />
              -2.1%
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-orange-600" />
          </div>
        </div>
      </div>
    </div>

    {/* 数据表格 */}
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900">最近订单</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                订单号
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                客户
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                金额
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                状态
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#12345</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">张三</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">￥299.00</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  已完成
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#12346</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">李四</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">￥599.00</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  处理中
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
); 