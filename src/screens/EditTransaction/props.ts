import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Transaction, Transactions } from 'store/transactions';
import { Wallets } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface EditTransactionPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'EDIT_TRANSACTION'> {}

export interface EditTransactionPrivateProps {
  transaction: Transaction;
  wallets: Wallets;
  transactions: Transactions;
  editTransaction: (payload: Transaction) => void;
}

export interface EditTransactionProps
  extends EditTransactionPublicProps,
    EditTransactionPrivateProps {}
