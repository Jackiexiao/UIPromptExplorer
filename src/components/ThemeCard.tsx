import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UiTheme } from '../data/themes';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Figma, Play, ZoomIn, X } from 'lucide-react';

interface ThemeCardProps {
  theme: UiTheme;
  onClick?: () => void;
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

  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getLinkButtons = () => {
    const buttons = [];
    
    if (theme.externalUrl) {
      buttons.push({
        url: theme.externalUrl,
        icon: ExternalLink,
        label: t('themes.external_website'),
        className: 'bg-blue-50 text-blue-600 hover:bg-blue-100'
      });
    }
    
    if (theme.githubUrl) {
      buttons.push({
        url: theme.githubUrl,
        icon: Github,
        label: t('themes.code_template'),
        className: 'bg-gray-50 text-gray-600 hover:bg-gray-100'
      });
    }
    
    if (theme.figmaUrl) {
      buttons.push({
        url: theme.figmaUrl,
        icon: Figma,
        label: t('themes.design_template'),
        className: 'bg-purple-50 text-purple-600 hover:bg-purple-100'
      });
    }
    
    if (theme.demoUrl) {
      buttons.push({
        url: theme.demoUrl,
        icon: Play,
        label: t('themes.online_demo'),
        className: 'bg-green-50 text-green-600 hover:bg-green-100'
      });
    }
    
    return buttons;
  };

  const linkButtons = getLinkButtons();

  return (
    <>
      <motion.div 
        className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden group"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={onClick}
      >
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={theme.imageUrl} 
            alt={theme.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Zoom button */}
          <button
            onClick={handleZoomClick}
            className="absolute top-3 right-3 p-2 bg-white/95 hover:bg-white rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            title={t('theme.preview')}
          >
            <ZoomIn className="w-4 h-4 text-gray-600" />
          </button>
          
          {/* Quick action buttons */}
          <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {linkButtons.slice(0, 2).map((button, index) => (
              <button
                key={index}
                onClick={(e) => handleLinkClick(button.url, e)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${button.className}`}
                title={button.label}
              >
                <button.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{button.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-gray-900 text-lg line-clamp-1">{theme.title}</h3>
            <div className="flex gap-1 ml-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                {t(`filter.${theme.category}`, {defaultValue: theme.category})}
              </span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{theme.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium">
                {t(`style.${theme.uiStyle}`, {defaultValue: theme.uiStyle})}
              </span>
              <span className="text-xs text-gray-500">{theme.model}</span>
            </div>
            
            {/* Link buttons */}
            <div className="flex gap-1">
              {linkButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={(e) => handleLinkClick(button.url, e)}
                  className={`p-1.5 rounded-md transition-colors ${button.className}`}
                  title={button.label}
                >
                  <button.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
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
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{theme.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{theme.description}</p>
                  </div>
                  <button
                    onClick={handleCloseZoom}
                    className="p-2 hover:bg-gray-100 rounded-md transition-colors ml-4"
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
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md font-medium">
                      {t(`filter.${theme.category}`, {defaultValue: theme.category})}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-md font-medium">
                      {t(`style.${theme.uiStyle}`, {defaultValue: theme.uiStyle})}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-md font-medium">
                      {theme.model}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {linkButtons.map((button, index) => (
                      <button
                        key={index}
                        onClick={(e) => handleLinkClick(button.url, e)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${button.className}`}
                      >
                        <button.icon className="w-4 h-4" />
                        {button.label}
                      </button>
                    ))}
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
