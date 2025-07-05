import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '../hooks/useI18n';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <nav className="vercel-nav sticky top-0 z-50 backdrop-blur-md">
      <div className="vercel-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              UIPromptExplorer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              {t('nav.about')}
            </Link>
            <a 
              href="https://github.com/jackiexiao/UIPromptExplorer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              GitHub
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <a 
                href="https://github.com/jackiexiao/UIPromptExplorer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </a>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
