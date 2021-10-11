import React from 'react';
import { View, Text as RNText } from 'react-native';
import useStyles from './style';
import { TextProps } from './props';

const Text = (props: TextProps) => {
  const {
    containerStyle = {},
    style = {},
    children,
    variant = 'body',
    theme,
    ...textProps
  } = props;

  const { styles, colors, fonts } = useStyles(theme);
  return (
    <View style={[styles.container, containerStyle]}>
      <RNText {...textProps} style={[fonts[variant], style]}>
        {children}
      </RNText>
    </View>
  );
};

export default Text;
