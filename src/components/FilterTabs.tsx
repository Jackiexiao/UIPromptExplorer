
import React from 'react';
import { cn } from '@/lib/utils';

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
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "relative font-handwritten px-4 py-2 bg-doodle-notebook rounded-t-lg border-t border-x border-doodle-pencil border-opacity-40 transition-all",
          selectedCategory === null ? 
            "bg-doodle-paper -mb-[1px] border-b-doodle-paper z-10" : 
            "hover:bg-white/80"
        )}
      >
        All Themes
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "relative font-handwritten px-4 py-2 bg-doodle-notebook rounded-t-lg border-t border-x border-doodle-pencil border-opacity-40 transition-all capitalize",
            selectedCategory === category ? 
              "bg-doodle-paper -mb-[1px] border-b-doodle-paper z-10" : 
              "hover:bg-white/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
