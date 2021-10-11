import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import useStyles from './style';
import { ButtonProps } from './props';

const Button = (props: ButtonProps) => {
  const {
    containerStyle = {},
    theme,
    onPress,
    label,
    outline,
    disabled,
  } = props;

  const { styles, colors } = useStyles(theme);
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
      <Text style={[outline ? styles.outlineText : styles.text]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
