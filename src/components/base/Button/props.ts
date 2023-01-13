import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';
import { TranslationKey } from 'types/Translation';

export interface ButtonPrivateProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  label: string;
  onPress?: () => void;
  outline?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export type ButtonProps = {
  translationKey: TranslationKey;
};
