import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface StyleFilterTabsProps {
  styles: string[];
  selectedStyle: string | null;
  onChange: (style: string | null) => void;
}

const StyleFilterTabs: React.FC<StyleFilterTabsProps> = ({ 
  styles, 
  selectedStyle, 
  onChange 
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "px-5 py-2 font-handwritten text-base rounded-full transition-all duration-300 border-2 border-doodle-pencil border-opacity-30",
          selectedStyle === null ? 
            "bg-doodle-paper text-doodle-pencil shadow-inner" : 
            "bg-doodle-notebook hover:bg-doodle-notebook/80 text-doodle-pencil/70"
        )}
      >
        {t('style.all')}
      </button>
      {styles.map((style) => (
        <button
          key={style}
          onClick={() => onChange(style)}
          className={cn(
            "px-5 py-2 font-handwritten text-base rounded-full transition-all duration-300 border-2 border-doodle-pencil border-opacity-30 capitalize",
            selectedStyle === style ? 
              "bg-doodle-paper text-doodle-pencil shadow-inner" : 
              "bg-doodle-notebook hover:bg-doodle-notebook/80 text-doodle-pencil/70"
          )}
        >
          {t(`style.${style}`, {defaultValue: style})}
        </button>
      ))}
    </div>
  );
};

export default StyleFilterTabs; 