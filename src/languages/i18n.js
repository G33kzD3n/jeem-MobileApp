import i18n from 'i18n-js';

import en from './en.json';
import ar from './ar.json';
import persistStore from '../utils/persistStore';
// import de from './locales/de.json';

export const getDefaultLanguage = async () => { //if default language is undefined then its arabic
  try {
    const defaultLanguage = await persistStore.getDetails('language');
    i18n.defaultLocale = 'ar';
    i18n.locale = defaultLanguage;
    i18n.fallbacks = true;
    i18n.translations = { ar, en};
  } catch (error) {
    i18n.defaultLocale = 'ar';
    i18n.locale = 'ar';
    i18n.fallbacks = true;
    i18n.translations = { ar, en };
  }
}
getDefaultLanguage()

export default i18n;