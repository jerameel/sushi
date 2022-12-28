import { ReactElement, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface ChipProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  label: string;
  selected?: boolean;
  onPress?: () => void;
  icon?: ReactElement;
}
