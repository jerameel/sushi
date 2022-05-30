import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Transactions } from 'store/transactions';
import { Wallet, Wallets } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface WalletDetailsPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'WALLET_DETAILS'> {}

export interface WalletDetailsPrivateProps {
  wallet: Wallet;
  wallets: Wallets;
  transactions: Transactions;
  deleteWallet: () => void;
  language: string;
}

export interface WalletDetailsProps
  extends WalletDetailsPublicProps,
    WalletDetailsPrivateProps {}
