import React from 'react';
import { View, Text as RNText } from 'react-native';
import styles, { fontStyles } from './style';
import { TextProps } from './props';

const Text = (props: TextProps) => {
  const {
    containerStyle = {},
    style = {},
    children,
    variant = 'body',
    ...textProps
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <RNText {...textProps} style={[fontStyles[variant], style]}>
        {children}
      </RNText>
    </View>
  );
};

export default Text;
