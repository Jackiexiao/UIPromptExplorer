import { Link } from "react-router-dom";
import { useI18n } from "../hooks/useI18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 mb-4">
          {t('footer.description')}
        </p>
        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <Link to="/about" className="hover:text-gray-700 transition-colors">
            {t('footer.about')}
          </Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-gray-700 transition-colors">
            {t('footer.terms')}
          </Link>
          <span>•</span>
          <Link to="/privacy" className="hover:text-gray-700 transition-colors">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 