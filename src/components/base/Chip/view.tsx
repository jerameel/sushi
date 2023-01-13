import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import useStyles from './style';
import { ChipProps } from './props';
import Text from '../Text/view';

const Chip = (props: ChipProps) => {
  const { containerStyle = {}, theme } = props;

  const { styles, colors } = useStyles(theme, props);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={[styles.container, containerStyle]}>
      {props.icon !== undefined && props.icon}
      <Text theme={theme} style={styles.text}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;
