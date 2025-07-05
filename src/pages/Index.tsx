import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ThemeCard from '../components/ThemeCard';
import Footer from '../components/Footer';
import { StyleViewer } from '../components/StyleViewer';
import { UiTheme, uiThemes } from '../data/themes';
import { DesignStyle, getDefaultDesignStyle, getDesignStyleById } from '../data/themes';
import { StyleConfig, loadStylesConfig } from '../data/stylesLoader';
import { useI18n } from '../hooks/useI18n';
import { Filter } from 'lucide-react';

export default function Index() {
  const [filteredThemes, setFilteredThemes] = useState<UiTheme[]>(uiThemes);
  const [selectedTheme, setSelectedTheme] = useState<UiTheme | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>(getDefaultDesignStyle());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [styles, setStyles] = useState<StyleConfig[]>([]);
  const [selectedStyleConfig, setSelectedStyleConfig] = useState<StyleConfig | null>(null);
  const { t } = useI18n();

  useEffect(() => {
    loadStylesConfig().then((result) => {
      setStyles(result.styles);
    });
  }, []);

  const categories = [
    { id: 'all', label: t('filter.all') },
    { id: 'landing', label: t('filter.landing') },
    { id: 'dashboard', label: t('filter.dashboard') },
    { id: 'portfolio', label: t('filter.portfolio') },
    { id: 'chat', label: t('filter.chat') },
    { id: 'commerce', label: t('filter.commerce') },
    { id: 'blog', label: t('filter.blog') },
    { id: 'webapp', label: t('filter.webapp') },
    { id: 'gallery', label: t('filter.gallery') },
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredThemes(uiThemes);
    } else {
      setFilteredThemes(uiThemes.filter(theme => theme.category === category));
    }
  };

  const handleThemeSelect = (theme: UiTheme) => {
    setSelectedTheme(theme);
  };

  const handleStyleSelect = (styleId: string) => {
    const style = getDesignStyleById(styleId);
    if (style) {
      setSelectedStyle(style);
    }
  };

  const handleStyleConfigSelect = (style: StyleConfig) => {
    setSelectedStyleConfig(style);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-white">
          <div className="vercel-container py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">UI Design</span> Prompts Explorer
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="vercel-button">
                  {t('hero.get_started')}
                </button>
                <button className="vercel-button-outline">
                  {t('hero.learn_more')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Style Showcase Section */}
        {styles.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="vercel-container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('styles.title')}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t('styles.subtitle')}
                </p>
              </div>

              {/* Style Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {styles.map((style) => (
                  <div
                    key={style.id}
                    className={`vercel-card p-6 cursor-pointer transition-all ${
                      selectedStyleConfig?.id === style.id 
                        ? 'border-gray-900 shadow-md' 
                        : ''
                    }`}
                    onClick={() => handleStyleConfigSelect(style)}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{style.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{style.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {style.characteristics.slice(0, 3).map((char, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Style Viewer */}
              {selectedStyleConfig && (
                <div className="mb-16">
                  <StyleViewer style={selectedStyleConfig} />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Theme Gallery Section */}
        <section className="py-16">
          <div className="vercel-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('themes.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('themes.subtitle')}
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  {t('filter.category')}:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredThemes.map((theme) => (
                <ThemeCard
                  key={theme.id}
                  theme={theme}
                  onClick={() => handleThemeSelect(theme)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white py-16">
          <div className="vercel-container text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-6">
                {t('cta.primary')}
              </button>
              <button className="border border-gray-600 text-white hover:bg-gray-800 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-6">
                {t('cta.secondary')}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
