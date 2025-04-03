
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getThemeById, getRelatedThemes } from '../data/themes';
import Header from '../components/Header';
import NotebookPrompt from '../components/NotebookPrompt';
import RelatedThemes from '../components/RelatedThemes';
import { motion } from 'framer-motion';

const ThemeDetail = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = themeId ? getThemeById(themeId) : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [themeId]);
  
  if (!theme) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-sketch mb-4">Theme not found</h2>
          <Link to="/" className="text-doodle-blue hover:underline">
            Return to gallery
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
            Back to gallery
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-handwritten mb-4">{theme.title}</h1>
          
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
                  <div className="text-sm text-muted-foreground">{theme.category}</div>
                  <div className="px-3 py-1 bg-doodle-notebook rounded-full font-handwritten text-sm">
                    UI Theme
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <NotebookPrompt prompt={theme.prompt} />
              </motion.div>
            </div>
          </div>
          
          <RelatedThemes themes={relatedThemes} />
        </motion.div>
      </main>
      
      <footer className="border-t border-doodle-pencil border-opacity-30 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sketch text-muted-foreground">
            UI Theme Explorer - A playful collection of hand-drawn UI themes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThemeDetail;
