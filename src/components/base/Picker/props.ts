import React from 'react';
import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface PickerProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  options: {
    label: string;
    value: string;
  }[];
  onSelect?: (value: string) => void;
  selectedValue?: string;
  label?: string;
  renderLabel?: () => React.ReactFragment;
  placeholder?: string;
}
