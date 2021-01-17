import i18n from 'i18n-js';

import en from './en.json';
import ar from './ar.json';
// import de from './locales/de.json';

i18n.defaultLocale = 'ar';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = { en,ar };

export default i18n;