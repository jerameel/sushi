import React from 'react';
import useStyles from '../../base/TextInput/style';
import {
  TextInputPrivateProps,
  TextInputProps,
} from '../../base/TextInput/props';

import TextInputView from './view';
import Text from 'components/base/Text';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const TextInput = (
  props: Omit<TextInputPrivateProps, 'label' | 'renderLabel'> & TextInputProps,
) => {
  const { translationKey, ...textInputProps } = props;
  const theme = useSelector((state: RootState) => state.theme);
  const { styles } = useStyles(theme);
  return (
    <TextInputView
      {...textInputProps}
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

export default TextInput;
