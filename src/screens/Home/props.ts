import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Transactions } from 'store/transactions';
import { Wallets } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface HomePublicProps
  extends NativeStackScreenProps<MainStackParamList, 'HOME'> {}

export interface HomePrivateProps {
  wallets: Wallets;
  transactions: Transactions;
}

export interface HomeProps extends HomePublicProps, HomePrivateProps {}
