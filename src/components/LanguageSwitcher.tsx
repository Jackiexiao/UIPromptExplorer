import React from 'react';
import useI18n from '@/hooks/useI18n';

const LanguageSwitcher: React.FC = () => {
  const { changeLanguage, currentLanguage } = useI18n();
  
  return (
    <div className="flex items-center space-x-2 font-handwritten">
      <button 
        className={`px-2 py-1 rounded-full transition-all ${
          currentLanguage === 'en' 
            ? 'bg-doodle-paper shadow-inner text-doodle-pencil' 
            : 'text-doodle-pencil/60 hover:bg-white/50'
        }`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <span className="text-doodle-pencil/40">|</span>
      <button 
        className={`px-2 py-1 rounded-full transition-all ${
          currentLanguage === 'zh' 
            ? 'bg-doodle-paper shadow-inner text-doodle-pencil' 
            : 'text-doodle-pencil/60 hover:bg-white/50'
        }`}
        onClick={() => changeLanguage('zh')}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher; 