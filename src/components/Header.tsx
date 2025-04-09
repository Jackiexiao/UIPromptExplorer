import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  return (
    <header className="border-b border-doodle-pencil border-opacity-30 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Pencil className="h-8 w-8 text-doodle-blue rotate-45" strokeWidth={2.5} />
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-doodle-highlight" />
          </div>
          <h1 className="text-2xl font-handwritten text-doodle-pencil">UI Prompt Explorer</h1>
        </Link>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-8 font-sketch">
              <li><Link to="/" className="hover:text-doodle-accent transition-colors">{t('header.home')}</Link></li>
              <li>
                {location.pathname === '/' ? (
                  <a 
                    href="#theme-gallery" 
                    className="hover:text-doodle-accent transition-colors"
                  >
                    {t('header.themes')}
                  </a>
                ) : (
                  <Link 
                    to="/#theme-gallery" 
                    className="hover:text-doodle-accent transition-colors"
                  >
                    {t('header.themes')}
                  </Link>
                )}
              </li>
              <li><Link to="/about" className="hover:text-doodle-accent transition-colors">{t('header.about')}</Link></li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
