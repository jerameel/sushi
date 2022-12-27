import { ViewStyle, TextStyle, TextProps as RNTextProps } from 'react-native';
import { Theme } from 'store/theme';
import { TranslationKey } from 'types/Translation';

export interface TextPrivateProps extends RNTextProps {
  containerStyle?: ViewStyle;
  style?: TextStyle;
  variant?: 'title' | 'subtitle' | 'body' | 'label';
  children: string;
  theme?: Theme;
}

export type TextProps = {
  translationKey: TranslationKey;
};
