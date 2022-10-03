import React from 'react';
import { TimePickerProps } from '../../module/TimePicker/props';

import { Translation } from 'types/Translation';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRANSLATIONS } from 'constants/translations';
import TimePicker from 'components/module/TimePicker';

type SmartTimePickerProps = {
  labelTranslationKey: keyof Translation;
};

const SmartTimePicker = (
  props: Omit<TimePickerProps, 'label'> & SmartTimePickerProps,
) => {
  const { labelTranslationKey, ...timePickerProps } = props;
  const theme = useSelector((state: RootState) => state.theme);
  const language = useSelector((state: RootState) => state.language.selected);
  return (
    <TimePicker
      theme={theme}
      label={TRANSLATIONS[language][labelTranslationKey]}
      {...timePickerProps}
    />
  );
};

export default SmartTimePicker;
