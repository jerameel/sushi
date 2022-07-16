import React from 'react';
import { DatePickerProps } from '../../module/DatePicker/props';

import DatePicker from '../../module/DatePicker/view';
import { Translation } from 'types/Translation';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRANSLATIONS } from 'constants/translations';

type SmartDatePickerProps = {
  labelTranslationKey: keyof Translation;
  defaultLabelTranslationKey: keyof Translation;
};

const SmartDatePicker = (
  props: Omit<DatePickerProps, 'label' | 'placeholder'> & SmartDatePickerProps,
) => {
  const { labelTranslationKey, defaultLabelTranslationKey, ...textInputProps } =
    props;
  // const theme = useSelector((state: RootState) => state.theme);
  const language = useSelector((state: RootState) => state.language.selected);
  return (
    <DatePicker
      {...textInputProps}
      label={TRANSLATIONS[language][labelTranslationKey]}
      defaultLabel={TRANSLATIONS[language][defaultLabelTranslationKey]}
    />
  );
};

export default SmartDatePicker;
