import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Transactions } from 'store/transactions';
import { Wallets } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface TransactionsPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'TRANSACTIONS'> {}

export interface TransactionsPrivateProps {
  wallets: Wallets;
  transactions: Transactions;
  language: string;
}

export interface TransactionsProps
  extends TransactionsPublicProps,
    TransactionsPrivateProps {}
