import { TRANSLATIONS } from 'constants/translations';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TranslationKey } from 'types/Translation';

const useTranslationKey = (translationKeys: TranslationKey[]) => {
  const language = useSelector((state: RootState) => state.language.selected);
  const translations = TRANSLATIONS[language];

  return translationKeys.map((k) => translations[k]);
};

export default useTranslationKey;
