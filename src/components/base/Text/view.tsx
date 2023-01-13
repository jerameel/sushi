import React from 'react';
import { View, Text as RNText } from 'react-native';
import useStyles from './style';
import { TextPrivateProps } from './props';

const Text = (props: TextPrivateProps) => {
  const {
    containerStyle = {},
    style = {},
    children,
    variant = 'body',
    theme,
    ...textProps
  } = props;

  const { styles, fonts } = useStyles(theme);
  return (
    <View style={[styles.container, containerStyle]}>
      <RNText {...textProps} style={[fonts[variant], style]}>
        {children}
      </RNText>
    </View>
  );
};

export default Text;
