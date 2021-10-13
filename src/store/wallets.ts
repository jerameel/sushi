import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';
import { v1 as uuidv1 } from 'uuid';

export type Wallet = {
  id: string;
  label: string;
  initialAmount: number;
};

export type Wallets = Record<string, Wallet>;

const initialState: Wallets = {};

const walletsSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {
    createWallet(state, action: PayloadAction<Omit<Wallet, 'id'>>) {
      return produce(state, (draft) => {
        const id = uuidv1();
        draft[id] = {
          id,
          ...action.payload,
        };
      });
    },
  },
});

export const { createWallet: createWalletAction } = walletsSlice.actions;

export default walletsSlice.reducer;
