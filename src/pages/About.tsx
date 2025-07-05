import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import WavyDivider from '../components/WavyDivider';
import { useI18n } from '../hooks/useI18n';
import Footer from "@/components/Footer";

const About = () => {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-handwritten mb-6">{t('about.title')}</h1>
          
          <div className="doodle-frame bg-white p-6 mb-8">
            <p className="mb-4">
              {t('about.welcome')}
            </p>
            <p className="mb-4">
              {t('about.purpose')}
            </p>
            <p>
              {t('about.project')}
            </p>
          </div>
          
          <WavyDivider className="my-8" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="doodle-container">
              <div className="doodle-frame bg-white p-6">
                <h2 className="text-2xl font-sketch mb-4">{t('about.howToUse')}</h2>
                <ul className="space-y-2">
                  <li>• {t('about.browseThemes')}</li>
                  <li>• {t('about.clickTheme')}</li>
                  <li>• {t('about.viewDetails')}</li>
                  <li>• {t('about.usePrompts')}</li>
                </ul>
              </div>
            </div>
            
            <div className="doodle-container">
              <div className="doodle-frame bg-white p-6">
                <h2 className="text-2xl font-sketch mb-4">{t('about.contact')}</h2>
                <p className="mb-2">{t('about.questions')}</p>
                <p className="font-handwritten text-doodle-blue">
                  {t('about.email')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
      
    </div>
  );
};

export default About;
