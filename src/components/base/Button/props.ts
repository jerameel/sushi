import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface ButtonProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  label: string;
  onPress?: () => void;
  outline?: boolean;
  disabled?: boolean;
}
