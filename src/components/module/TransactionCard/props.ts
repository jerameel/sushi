import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface TransactionCardProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  category: string;
  amount: number;
}
