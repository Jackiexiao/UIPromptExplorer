import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Boxes } from 'lucide-react';
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
                  <div className="flex gap-2 items-center">
                    <div className="px-3 py-1 bg-doodle-highlight rounded-full font-handwritten text-sm">
                      {theme.category}
                    </div>
                    <div className="px-3 py-1 bg-doodle-paper rounded-full font-handwritten text-sm border border-doodle-pencil border-opacity-30">
                      {theme.uiStyle}
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-doodle-notebook rounded-full font-handwritten text-sm">
                    UI Theme
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="mb-4">{theme.description}</p>
                  
                  <div className="flex flex-col space-y-4 mt-6">
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        <Sparkles className="h-5 w-5 mr-2 text-doodle-accent" />
                        <span className="font-sketch text-base">Generated with:</span>
                      </div>
                      <div className="px-3 py-1 bg-doodle-accent/10 rounded-md font-handwritten ml-2 border border-doodle-accent/30">
                        {theme.model}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <Boxes className="h-5 w-5 mr-2 text-doodle-accent" />
                        <span className="font-sketch text-base">Tech Stack:</span>
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
      
      <footer className="border-t border-doodle-pencil border-opacity-30 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sketch text-muted-foreground">
            UI Prompt Explorer - A playful collection of UI themes prompts
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThemeDetail;
