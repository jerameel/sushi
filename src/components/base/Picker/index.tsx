import React from 'react';
import useStyles from '../../base/Picker/style';
import { PickerPrivateProps, PickerProps } from '../../base/Picker/props';

import PickerView from '../../base/Picker/view';
import SmartText from '../../smart/SmartText';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { TRANSLATIONS } from 'constants/translations';

const Picker = (
  props: Omit<PickerPrivateProps, 'label' | 'renderLabel'> & PickerProps,
) => {
  const { translationKey, ...pickerProps } = props;
  const theme = useSelector((state: RootState) => state.theme);
  const language = useSelector((state: RootState) => state.language.selected);
  const { styles } = useStyles(theme);
  return (
    <PickerView
      theme={theme}
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

export default Picker;
