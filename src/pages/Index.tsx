import React, { useState } from 'react';
import Header from '../components/Header';
import { uiThemes, categories, uiStyles } from '../data/themes';
import ThemeCard from '../components/ThemeCard';
import ThemeHero from '../components/ThemeHero';
import ThemePreviewModal from '../components/ThemePreviewModal';
import FilterTabs from '../components/FilterTabs';
import StyleFilterTabs from '../components/StyleFilterTabs';
import WavyDivider from '../components/WavyDivider';
import { motion } from 'framer-motion';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<typeof uiThemes[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterMode, setFilterMode] = useState<'category' | 'style'>('category');

  const filteredThemes = uiThemes.filter(theme => {
    const matchesCategory = selectedCategory ? theme.category === selectedCategory : true;
    const matchesStyle = selectedStyle ? theme.uiStyle === selectedStyle : true;
    return matchesCategory && matchesStyle;
  });

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
        
        <section id="theme-gallery" className="py-8">
          <h2 className="text-3xl font-handwritten mb-6 text-center">Theme Gallery</h2>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex border-2 border-doodle-pencil border-opacity-50 rounded-full overflow-hidden shadow-md bg-doodle-notebook p-1">
              <button
                onClick={() => setFilterMode('category')}
                className={`px-6 py-3 font-handwritten text-base transition-all duration-300 rounded-full ${
                  filterMode === 'category' 
                    ? 'bg-doodle-paper shadow-inner text-doodle-pencil' 
                    : 'hover:bg-white/50 text-doodle-pencil/60'
                }`}
              >
                By Purpose
              </button>
              <button
                onClick={() => setFilterMode('style')}
                className={`px-6 py-3 font-handwritten text-base transition-all duration-300 rounded-full ${
                  filterMode === 'style' 
                    ? 'bg-doodle-paper shadow-inner text-doodle-pencil' 
                    : 'hover:bg-white/50 text-doodle-pencil/60'
                }`}
              >
                By UI Style
              </button>
            </div>
          </div>
          
          {filterMode === 'category' ? (
            <FilterTabs 
              categories={categories}
              selectedCategory={selectedCategory}
              onChange={setSelectedCategory}
            />
          ) : (
            <StyleFilterTabs 
              styles={uiStyles}
              selectedStyle={selectedStyle}
              onChange={setSelectedStyle}
            />
          )}
          
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
            UI Prompt Explorer - A playful collection of UI themes prompts
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
