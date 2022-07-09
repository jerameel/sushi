import React from 'react';
import { TextProps } from 'components/base/Text/props';
import Text from 'components/base/Text';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Translation } from 'types/Translation';
import { TRANSLATIONS } from 'constants/translations';

type TranslatedTextProps = {
  translationKey: keyof Translation;
};

const TranslatedText = (
  props: Omit<TextProps, 'children'> & TranslatedTextProps,
) => {
  const { translationKey, ...textProps } = props;
  const language = useSelector((state: RootState) => state.language.selected);

  return <Text {...textProps}>{TRANSLATIONS[language][translationKey]}</Text>;
};

export default TranslatedText;
