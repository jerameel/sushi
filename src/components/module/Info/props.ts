import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface InfoProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  label?: string;
}
