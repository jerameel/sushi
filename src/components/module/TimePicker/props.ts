import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';
import { TranslationKey } from 'types/Translation';

export interface TimePickerPrivateProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  label: string;
  selectedTime: Date | null;
  setSelectedTime: (date: Date | null) => void;
}

export type TimePickerProps = {
  labelTranslationKey: TranslationKey;
};
