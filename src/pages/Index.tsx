
import React, { useState } from 'react';
import Header from '../components/Header';
import { uiThemes, categories } from '../data/themes';
import ThemeCard from '../components/ThemeCard';
import ThemeHero from '../components/ThemeHero';
import ThemePreviewModal from '../components/ThemePreviewModal';
import FilterTabs from '../components/FilterTabs';
import WavyDivider from '../components/WavyDivider';
import { motion } from 'framer-motion';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<typeof uiThemes[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredThemes = selectedCategory 
    ? uiThemes.filter(theme => theme.category === selectedCategory)
    : uiThemes;

  const openThemePreview = (theme: typeof uiThemes[0]) => {
    setSelectedTheme(theme);
    setIsModalOpen(true);
  };

  const closeThemePreview = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <ThemeHero />
        
        <WavyDivider />
        
        <section className="py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-handwritten">Theme Gallery</h2>
            <div className="flex gap-2">
              {/* Additional controls could go here */}
            </div>
          </div>
          
          <FilterTabs 
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={setSelectedCategory}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredThemes.map((theme, index) => (
              <motion.div 
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ThemeCard 
                  theme={theme} 
                  onClick={() => openThemePreview(theme)} 
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="border-t border-doodle-pencil border-opacity-30 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sketch text-muted-foreground">
            UI Theme Explorer - A playful collection of hand-drawn UI themes
          </p>
        </div>
      </footer>
      
      <ThemePreviewModal 
        theme={selectedTheme} 
        isOpen={isModalOpen} 
        onClose={closeThemePreview} 
      />
    </div>
  );
};

export default Index;
