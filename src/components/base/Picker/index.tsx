import React from 'react';
import useStyles from './style';
import { PickerPrivateProps, PickerProps } from './props';

import PickerView from './view';
import Text from '../Text';
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
        <Text
          variant="label"
          style={styles.label}
          translationKey={translationKey}
        />
      )}
    />
  );
};

export default Picker;
