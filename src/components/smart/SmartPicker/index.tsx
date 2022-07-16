import React from 'react';
import useStyles from '../../base/Picker/style';
import { PickerProps } from '../../base/Picker/props';

import Picker from '../../base/Picker/view';
import { Translation } from 'types/Translation';
import SmartText from '../SmartText';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRANSLATIONS } from 'constants/translations';

type SmartPickerProps = {
  translationKey: keyof Translation;
};

const SmartPicker = (
  props: Omit<PickerProps, 'label' | 'renderLabel'> & SmartPickerProps,
) => {
  const { translationKey, ...pickerProps } = props;
  const theme = useSelector((state: RootState) => state.theme);
  const language = useSelector((state: RootState) => state.language.selected);
  const { styles } = useStyles(theme);
  return (
    <Picker
      {...pickerProps}
      label={TRANSLATIONS[language][translationKey]}
      renderLabel={() => (
        <SmartText
          variant="label"
          style={styles.label}
          translationKey={translationKey}
        />
      )}
    />
  );
};

export default SmartPicker;
