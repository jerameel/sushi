import React from 'react';
import { TextPrivateProps, TextProps } from './props';
import TextView from './view';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRANSLATIONS } from 'constants/translations';

const Text = (props: Omit<TextPrivateProps, 'children'> & TextProps) => {
  const { translationKey, ...textProps } = props;
  const theme = useSelector((state: RootState) => state.theme);
  const language = useSelector((state: RootState) => state.language.selected);

  return (
    <TextView theme={theme} {...textProps}>
      {TRANSLATIONS[language][translationKey]}
    </TextView>
  );
};

export default Text;
