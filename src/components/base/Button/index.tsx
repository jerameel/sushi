import React from 'react';
import { ButtonPrivateProps, ButtonProps } from './props';
import { TRANSLATIONS } from 'constants/translations';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import ButtonView from 'components/base/Button/view';

const Button = (props: Omit<ButtonPrivateProps, 'label'> & ButtonProps) => {
  const { translationKey, ...buttonProps } = props;

  const theme = useSelector((state: RootState) => state.theme);
  const language = useSelector((state: RootState) => state.language.selected);

  return (
    <ButtonView
      theme={theme}
      {...buttonProps}
      label={TRANSLATIONS[language][translationKey]}
    />
  );
};

export default Button;
