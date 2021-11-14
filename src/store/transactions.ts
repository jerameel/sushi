import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';
import { v1 as uuidv1 } from 'uuid';

export type Transaction = {
  id: string;
  sourceWalletId: string;
  destinationWalletId: string | null;
  category: string;
  description: string;
  amount: number;
  createdAt: string;
};

export type Transactions = Record<string, Transaction>;

const initialState: Transactions = {};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    createTransaction(
      state,
      action: PayloadAction<Omit<Transaction, 'id' | 'createdAt'>>,
    ) {
      return produce(state, (draft) => {
        const id = uuidv1();
        const createdAt = new Date().toISOString();
        draft[id] = {
          id,
          createdAt,
          ...action.payload,
        };
      });
    },
  },
});

export const { createTransaction: createTransactionAction } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
