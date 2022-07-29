import React from 'react';
import { ButtonProps } from '../../base/Button/props';
import { Translation } from 'types/Translation';
import { TRANSLATIONS } from 'constants/translations';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Button from 'components/base/Button';

type SmartButtonProps = {
  translationKey: keyof Translation;
};

const SmartButton = (props: Omit<ButtonProps, 'label'> & SmartButtonProps) => {
  const { translationKey, ...buttonProps } = props;

  const language = useSelector((state: RootState) => state.language.selected);

  return (
    <Button {...buttonProps} label={TRANSLATIONS[language][translationKey]} />
  );
};

export default SmartButton;
