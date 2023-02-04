import React from 'react';
import { View } from 'react-native';
import useStyles from './style';
import { InfoProps } from './props';
import Text from 'components/base/Text/view';
import { COLORS } from 'theme';

const Info = (props: InfoProps) => {
  const { containerStyle = {}, theme, label } = props;

  const { styles, colors } = useStyles(theme);
  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        theme={theme}
        variant="body"
        style={{ color: COLORS.LIGHT.AREA_HIGHLIGHT }}>
        {label || ''}
      </Text>
    </View>
  );
};

export default Info;
