import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface BalanceBreakdownProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  income: number;
  expenses: number;
  language: string;
}
