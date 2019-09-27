import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

i18n.fallbacks = true;
i18n.translations = {
  ko: require('./locale/kr'),
  en: require('./locale/en')
};

i18n.locale = Localization.locale;
// console.log('Language:', i18n.locale);

export default i18n;
