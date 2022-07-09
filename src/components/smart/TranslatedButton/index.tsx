import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import useStyles from '../../base/Button/style';
import { ButtonProps } from '../../base/Button/props';
import { Translation } from 'types/Translation';
import TranslatedText from '../TranslatedText';

type TranslatedButtonProps = {
  translationKey: keyof Translation;
};

const TranslatedButton = (
  props: Omit<ButtonProps, 'label'> & TranslatedButtonProps,
) => {
  const {
    containerStyle = {},
    theme,
    onPress,
    outline,
    disabled,
    translationKey,
  } = props;

  const { styles } = useStyles(theme);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        outline ? styles.outlineContainer : styles.container,
        containerStyle,
        disabled
          ? outline
            ? styles.outlineContainerDisabled
            : styles.containerDisabled
          : {},
      ]}
      onPress={onPress}>
      <TranslatedText
        variant="label"
        style={outline ? styles.outlineText : styles.text}
        theme={theme}
        translationKey={translationKey}
      />
    </TouchableOpacity>
  );
};

export default TranslatedButton;
