import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Transaction } from 'store/transactions';
import { Wallet } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface TransactionDetailsPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'TRANSACTION_DETAILS'> {}

export interface TransactionDetailsPrivateProps {
  sourceWallet: Wallet;
  destinationWallet: Wallet | null;
  transaction: Transaction;
}

export interface TransactionDetailsProps
  extends TransactionDetailsPublicProps,
    TransactionDetailsPrivateProps {}
