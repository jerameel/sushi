import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface WalletCardProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  label: string;
  balance: number;
  onPress?: () => void;
  template?: boolean;
}
