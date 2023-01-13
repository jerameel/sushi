import { ViewStyle } from 'react-native';
import { Translation, TranslationKey } from 'types/Translation';
import { Theme } from 'store/theme';

export interface AlertModalPrivateProps {
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

export type AlertModalProps = {
  titleTranslationKey: keyof Translation;
  descriptionTranslationKey: keyof Translation;
  descriptionReplacementRecord?: Record<string, string>;
  actionTranslationKeys?: TranslationKey[];
};
