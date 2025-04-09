import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface FilterTabsProps {
  categories: string[];
  selectedCategory: string | null;
  onChange: (category: string | null) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ 
  categories, 
  selectedCategory, 
  onChange 
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "px-5 py-2 font-handwritten text-base rounded-full transition-all duration-300 border-2 border-doodle-pencil border-opacity-30",
          selectedCategory === null ? 
            "bg-doodle-paper text-doodle-pencil shadow-inner" : 
            "bg-doodle-notebook hover:bg-doodle-notebook/80 text-doodle-pencil/70"
        )}
      >
        {t('filter.all')}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "px-5 py-2 font-handwritten text-base rounded-full transition-all duration-300 border-2 border-doodle-pencil border-opacity-30 capitalize",
            selectedCategory === category ? 
              "bg-doodle-paper text-doodle-pencil shadow-inner" : 
              "bg-doodle-notebook hover:bg-doodle-notebook/80 text-doodle-pencil/70"
          )}
        >
          {t(`filter.${category}`, {defaultValue: category})}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
