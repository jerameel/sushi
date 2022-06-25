import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { THEME_OPTION } from 'store/theme';
import { MainStackParamList } from 'types/Route';

export interface SettingsPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'CREATE_WALLET'> {}

export interface SettingsPrivateProps {
  baseTheme: string;
  setBaseTheme: (payload: THEME_OPTION) => void;
  currencyLanguage: string;
  setCurrencyLanguage: (payload: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (payload: string) => void;
}

export interface SettingsProps
  extends SettingsPublicProps,
    SettingsPrivateProps {}
