import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Transactions } from 'store/transactions';
import { Wallets } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export type TransactionFilter = {
  startDate: Date | null;
  endDate: Date | null;
  searchTerm: string;
};

export interface InsightsPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'TRANSACTIONS'> {}

export interface InsightsPrivateProps {
  wallets: Wallets;
  transactions: Transactions;
  language: string;
}

export interface InsightsProps
  extends InsightsPublicProps,
    InsightsPrivateProps {}
