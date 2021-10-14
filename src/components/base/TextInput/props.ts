import { KeyboardTypeOptions, ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface TextInputProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  style?: ViewStyle;
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;
}
