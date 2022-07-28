import React from 'react';
import { KeyboardTypeOptions, ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface TextInputProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  style?: ViewStyle;
  label?: string;
  renderLabel?: () => React.ReactFragment;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
}
