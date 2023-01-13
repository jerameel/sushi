import en_US from 'constants/translations/en-US';

// use US as standard language
export type Translation = typeof en_US;

export type TranslationKey = keyof Translation;
