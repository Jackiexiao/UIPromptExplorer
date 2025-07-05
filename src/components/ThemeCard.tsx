import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UiTheme } from '../data/themes';
import { useTranslation } from 'react-i18next';
import { ZoomIn, X } from 'lucide-react';

interface ThemeCardProps {
  theme: UiTheme;
  onClick: () => void;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, onClick }) => {
  const { t } = useTranslation();
  const [isZoomed, setIsZoomed] = useState(false);
  
  const handleZoomClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  return (
    <>
      <motion.div 
        className="vercel-card group cursor-pointer relative overflow-hidden"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={onClick}
      >
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <img 
            src={theme.imageUrl} 
            alt={theme.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Zoom button */}
          <button
            onClick={handleZoomClick}
            className="absolute top-2 right-2 p-1.5 bg-white/90 hover:bg-white rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            title="放大预览"
          >
            <ZoomIn className="w-4 h-4 text-gray-600" />
          </button>
          
          {/* Preview label */}
          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-sm font-medium px-2 py-1 bg-black/50 backdrop-blur-sm rounded">
              {t('theme.preview')}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-lg">{theme.title}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{theme.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
              {t(`filter.${theme.category}`, {defaultValue: theme.category})}
            </span>
            <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">
              {t(`style.${theme.uiStyle}`, {defaultValue: theme.uiStyle})}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Zoomed Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={handleCloseZoom}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{theme.title}</h3>
                    <p className="text-sm text-gray-600">{theme.description}</p>
                  </div>
                  <button
                    onClick={handleCloseZoom}
                    className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <div className="aspect-video">
                  <img 
                    src={theme.imageUrl} 
                    alt={theme.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md font-medium">
                      {t(`filter.${theme.category}`, {defaultValue: theme.category})}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-md font-medium">
                      {t(`style.${theme.uiStyle}`, {defaultValue: theme.uiStyle})}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeCard;
