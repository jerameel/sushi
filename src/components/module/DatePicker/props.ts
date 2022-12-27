import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';
import { TranslationKey } from 'types/Translation';

export interface DatePickerPrivateProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  label: string;
  defaultLabel?: string;
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate?: Date | null;
  setEndDate?: (date: Date | null) => void;
  hideActionButton?: boolean;
}

export type DatePickerProps = {
  labelTranslationKey: TranslationKey;
  defaultLabelTranslationKey: TranslationKey;
};
