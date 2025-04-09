import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-6xl font-sketch font-bold mb-4">{t('notFound.title')}</h1>
          <p className="text-xl text-muted-foreground mb-6">{t('notFound.message')}</p>
          <Link to="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
            {t('notFound.returnHome')}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
