import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';
import { v1 as uuidv1 } from 'uuid';
import { deleteWalletAction } from './wallets';

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
    deleteTransaction(state, action: PayloadAction<string>) {
      return produce(state, (draft) => {
        const id = action.payload;
        delete draft[id];
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteWalletAction, (state, action) => {
      return produce(state, (draft) => {
        const walletId = action.payload;
        const transactionIds = Object.keys(draft).filter(
          (key) =>
            draft[key].sourceWalletId === walletId ||
            draft[key].destinationWalletId === walletId,
        );
        transactionIds.forEach((transactionId) => {
          delete draft[transactionId];
        });
      });
    });
  },
});

export const {
  createTransaction: createTransactionAction,
  deleteTransaction: deleteTransactionAction,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
