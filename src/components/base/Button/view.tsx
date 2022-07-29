import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
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
    loading,
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
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={colors.PRIMARY} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
