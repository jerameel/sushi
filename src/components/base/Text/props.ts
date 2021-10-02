import { ViewStyle, TextStyle, TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {
  containerStyle?: ViewStyle;
  style?: TextStyle;
  variant?: 'title' | 'subtitle' | 'body' | 'label';
  children: string;
}
