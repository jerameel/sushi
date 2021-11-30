import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface AlertModalProps {
  containerStyle?: ViewStyle;
  visible?: boolean;
  title?: string;
  description?: string;
  actions?: {
    onPress: () => void;
    label: string;
  }[];
  theme?: Theme;
}
