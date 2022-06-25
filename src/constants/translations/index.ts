import { Translation } from 'types/Translation';
import en_US from './en-US';

export const TRANSLATIONS = {
  'en-US': en_US,
};

export const getTranslationString = (
  language: keyof typeof TRANSLATIONS,
  key: keyof Translation,
) => {
  return TRANSLATIONS[language][key];
};
