import React from 'react';
import useStyles from '../../base/TextInput/style';
import { TextInputProps } from '../../base/TextInput/props';

import TextInput from '../../base/TextInput/view';
import { Translation } from 'types/Translation';
import SmartText from '../SmartText';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

type SmartTextInputProps = {
  translationKey: keyof Translation;
};

const SmartTextInput = (
  props: Omit<TextInputProps, 'label' | 'renderLabel'> & SmartTextInputProps,
) => {
  const { translationKey, ...textInputProps } = props;
  const theme = useSelector((state: RootState) => state.theme);
  const { styles } = useStyles(theme);
  return (
    <TextInput
      {...textInputProps}
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

export default SmartTextInput;
