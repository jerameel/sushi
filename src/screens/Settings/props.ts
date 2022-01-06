import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Wallet } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface SettingsPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'CREATE_WALLET'> {}

export interface SettingsPrivateProps {
  setCurrencyLanguage: (payload: string) => void;
  currencyLanguage: string;
}

export interface SettingsProps
  extends SettingsPublicProps,
    SettingsPrivateProps {}
