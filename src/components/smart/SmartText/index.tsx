import React from 'react';
import { TextProps } from 'components/base/Text/props';
import Text from 'components/base/Text';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Translation } from 'types/Translation';
import { TRANSLATIONS } from 'constants/translations';

type SmartTextProps = {
  translationKey: keyof Translation;
};

const SmartText = (props: Omit<TextProps, 'children'> & SmartTextProps) => {
  const { translationKey, ...textProps } = props;
  const language = useSelector((state: RootState) => state.language.selected);

  return <Text {...textProps}>{TRANSLATIONS[language][translationKey]}</Text>;
};

export default SmartText;
