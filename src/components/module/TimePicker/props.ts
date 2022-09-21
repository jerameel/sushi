import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface TimePickerProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  label: string;
  selectedTime: Date | null;
  setSelectedTime: (date: Date | null) => void;
}
