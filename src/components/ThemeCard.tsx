import React from 'react';
import { motion } from 'framer-motion';
import { UiTheme } from '../data/themes';
import { useTranslation } from 'react-i18next';

interface ThemeCardProps {
  theme: UiTheme;
  onClick: () => void;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, onClick }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      className="doodle-container group cursor-pointer"
      whileHover={{ rotate: -1, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      <div className="doodle-frame bg-white">
        <div className="relative overflow-hidden rounded mb-3 aspect-video">
          <img 
            src={theme.imageUrl} 
            alt={theme.title} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="font-handwritten text-white px-3 py-1 bg-doodle-accent/80 rounded-full">
              {t('theme.preview')}
            </span>
          </div>
        </div>
        <h3 className="font-sketch text-lg">{theme.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{theme.description}</p>
        <div className="flex gap-2 mt-2">
          <span className="px-2 py-1 bg-doodle-highlight font-handwritten text-xs rounded text-foreground rotate-1">
            {t(`filter.${theme.category}`, {defaultValue: theme.category})}
          </span>
          <span className="px-2 py-1 bg-doodle-paper font-handwritten text-xs rounded text-foreground rotate-[-1] border border-doodle-pencil border-opacity-30">
            {t(`style.${theme.uiStyle}`, {defaultValue: theme.uiStyle})}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeCard;
