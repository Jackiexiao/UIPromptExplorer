import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Boxes, ExternalLink } from 'lucide-react';
import { getThemeById, getRelatedThemes } from '../data/themes';
import Header from '../components/Header';
import NotebookPrompt from '../components/NotebookPrompt';
import RelatedThemes from '../components/RelatedThemes';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Footer from "@/components/Footer";

const ThemeDetail = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = themeId ? getThemeById(themeId) : undefined;
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [themeId]);
  
  if (!theme) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-sketch mb-4">{t('themeDetail.themeNotFound')}</h2>
          <Link to="/" className="text-doodle-blue hover:underline">
            {t('themeDetail.returnToGallery')}
          </Link>
        </div>
      </div>
    );
  }
  
  const relatedThemes = getRelatedThemes(theme);
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center font-sketch text-doodle-pencil hover:text-doodle-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('themeDetail.backToGallery')}
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl md:text-4xl font-handwritten">{theme.title}</h1>
            <a
              href={theme.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-doodle-accent text-white rounded-md hover:bg-doodle-accent/90 transition-colors font-handwritten"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {t('themeDetail.onlinePreview', 'Online Preview')}
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <motion.div 
                className="doodle-frame"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img 
                  src={theme.imageUrl} 
                  alt={theme.title}
                  className="w-full rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <div className="px-3 py-1 bg-doodle-highlight rounded-full font-handwritten text-sm">
                      {t(`filter.${theme.category}`, {defaultValue: theme.category})}
                    </div>
                    <div className="px-3 py-1 bg-doodle-paper rounded-full font-handwritten text-sm border border-doodle-pencil border-opacity-30">
                      {t(`style.${theme.uiStyle}`, {defaultValue: theme.uiStyle})}
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-doodle-notebook rounded-full font-handwritten text-sm">
                    {t('themeDetail.uiTheme')}
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="mb-4">{theme.description}</p>
                  
                  <div className="flex flex-col space-y-4 mt-6">
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        <Sparkles className="h-5 w-5 mr-2 text-doodle-accent" />
                        <span className="font-sketch text-base">{t('themeDetail.generatedWith')}</span>
                      </div>
                      <div className="px-3 py-1 bg-doodle-accent/10 rounded-md font-handwritten ml-2 border border-doodle-accent/30">
                        {theme.model}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <Boxes className="h-5 w-5 mr-2 text-doodle-accent" />
                        <span className="font-sketch text-base">{t('themeDetail.techStack')}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {theme.techStack.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-doodle-paper border border-doodle-pencil/30 rounded-md font-handwritten text-sm inline-block"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <NotebookPrompt prompt={theme.prompt} />
            </div>
          </div>
          
          {relatedThemes.length > 0 && (
            <RelatedThemes themes={relatedThemes} />
          )}
        </motion.div>
      </main>
      
      <Footer />
      
    </div>
  );
};

export default ThemeDetail;
