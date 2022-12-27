import React from 'react';
import { TimePickerPrivateProps, TimePickerProps } from './props';

import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRANSLATIONS } from 'constants/translations';
import TimePickerView from './view';

const TimePicker = (
  props: Omit<TimePickerPrivateProps, 'label'> & TimePickerProps,
) => {
  const { labelTranslationKey, ...timePickerProps } = props;
  const theme = useSelector((state: RootState) => state.theme);
  const language = useSelector((state: RootState) => state.language.selected);
  return (
    <TimePickerView
      theme={theme}
      label={TRANSLATIONS[language][labelTranslationKey]}
      {...timePickerProps}
    />
  );
};

export default TimePicker;
