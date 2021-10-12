import React, { useState } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import Text from 'components/base/Text';
import useStyles from './style';
import { TextInputProps } from './props';

const TextInput = (props: TextInputProps) => {
  const {
    containerStyle = {},
    style = {},
    theme,
    label = '',
    value = '',
    onChangeText,
  } = props;
  const { styles, colors } = useStyles(theme);
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View
      style={[
        styles.container,
        isSelected ? styles.containerActive : {},
        containerStyle,
      ]}>
      <Text variant="label" style={styles.label}>
        {isSelected || value.length > 0 ? label : ''}
      </Text>

      <RNTextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => {
          setIsSelected(true);
        }}
        onBlur={() => {
          setIsSelected(false);
        }}
        placeholder={isSelected ? '' : label.toUpperCase()}
        placeholderTextColor={colors.PLACE_HOLDER}
      />
    </View>
  );
};

export default TextInput;
