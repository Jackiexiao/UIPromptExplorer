import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export interface UseI18nReturn {
  t: (key: string, options?: any) => string;
  changeLanguage: (lang: string) => Promise<any>;
  currentLanguage: string;
  availableLanguages: string[];
}

export function useI18n(): UseI18nReturn {
  const { t } = useTranslation();
  
  const changeLanguage = (lang: string) => {
    return i18n.changeLanguage(lang);
  };
  
  const currentLanguage = i18n.language;
  
  const availableLanguages = Object.keys(i18n.options.resources || {});
  
  return {
    t,
    changeLanguage,
    currentLanguage,
    availableLanguages,
  };
}

export default useI18n; 