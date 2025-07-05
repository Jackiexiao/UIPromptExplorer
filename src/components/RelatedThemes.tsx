import React from 'react';
import { UiTheme } from '../data/themes';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';

interface RelatedThemesProps {
  themes: UiTheme[];
}

const RelatedThemes: React.FC<RelatedThemesProps> = ({ themes }) => {
  const { t } = useI18n();
  
  if (themes.length === 0) return null;
  
  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('themeDetail.relatedThemes')}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {themes.map((theme, index) => (
          <motion.div 
            key={theme.id}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <Link to={`/theme/${theme.id}`} className="block">
              <div className="relative bg-white p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="aspect-video overflow-hidden mb-3 rounded-lg">
                  <img 
                    src={theme.imageUrl} 
                    alt={theme.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <h4 className="font-medium text-gray-900">{theme.title}</h4>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedThemes;
