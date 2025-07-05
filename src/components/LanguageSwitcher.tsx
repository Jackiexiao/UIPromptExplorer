import React from 'react';
import { useI18n } from '../hooks/useI18n';

const LanguageSwitcher: React.FC = () => {
  const { changeLanguage, currentLanguage } = useI18n();
  
  return (
    <div className="flex items-center space-x-2">
      <button 
        className={`px-2 py-1 rounded-full transition-all text-sm ${
          currentLanguage === 'en' 
            ? 'bg-blue-100 text-blue-700 font-medium' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button 
        className={`px-2 py-1 rounded-full transition-all text-sm ${
          currentLanguage === 'zh' 
            ? 'bg-blue-100 text-blue-700 font-medium' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        onClick={() => changeLanguage('zh')}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher; 