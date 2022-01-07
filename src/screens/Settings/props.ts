import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { THEME_OPTION } from 'store/theme';
import { Wallet } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface SettingsPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'CREATE_WALLET'> {}

export interface SettingsPrivateProps {
  setCurrencyLanguage: (payload: string) => void;
  currencyLanguage: string;
  baseTheme: string;
  setBaseTheme: (payload: THEME_OPTION) => void;
}

export interface SettingsProps
  extends SettingsPublicProps,
    SettingsPrivateProps {}
