import { TRANSLATIONS } from 'constants/translations';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TranslationKey } from 'types/Translation';

const useTranslationKey = (translationKey: TranslationKey) => {
  const language = useSelector((state: RootState) => state.language.selected);

  return TRANSLATIONS[language][translationKey];
};

export default useTranslationKey;
