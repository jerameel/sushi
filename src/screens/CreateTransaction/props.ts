import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Transaction } from 'store/transactions';
import { Wallets } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface CreateTransactionPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'CREATE_TRANSACTION'> {}

export interface CreateTransactionPrivateProps {
  wallets: Wallets;
  createTransaction: (payload: Omit<Transaction, 'id'>) => void;
}

export interface CreateTransactionProps
  extends CreateTransactionPublicProps,
    CreateTransactionPrivateProps {}
