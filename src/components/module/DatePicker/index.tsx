import React from 'react';
import {
  DatePickerPrivateProps,
  DatePickerProps,
} from '../../module/DatePicker/props';

import DatePickerView from './view';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRANSLATIONS } from 'constants/translations';

const DatePicker = (
  props: Omit<DatePickerPrivateProps, 'label' | 'placeholder'> &
    DatePickerProps,
) => {
  const { labelTranslationKey, defaultLabelTranslationKey, ...textInputProps } =
    props;
  const theme = useSelector((state: RootState) => state.theme);
  const language = useSelector((state: RootState) => state.language.selected);
  return (
    <DatePickerView
      theme={theme}
      {...textInputProps}
      label={TRANSLATIONS[language][labelTranslationKey]}
      defaultLabel={TRANSLATIONS[language][defaultLabelTranslationKey]}
    />
  );
};

export default DatePicker;
