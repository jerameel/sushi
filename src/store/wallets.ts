import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';
import { v1 as uuidv1 } from 'uuid';

export type Wallet = {
  id: string;
  label: string;
  initialAmount: number;
  createdAt: string;
  updatedAt: string;
};

export type Wallets = Record<string, Wallet>;

export type CreateWalletInput = Omit<Wallet, 'id' | 'createdAt' | 'updatedAt'>;

const initialState: Wallets = {};

const walletsSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {
    createWallet(state, action: PayloadAction<CreateWalletInput>) {
      return produce(state, (draft) => {
        const id = uuidv1();
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;
        draft[id] = {
          id,
          createdAt,
          updatedAt,
          ...action.payload,
        };
      });
    },
    editWallet(state, action: PayloadAction<Wallet>) {
      return produce(state, (draft) => {
        const updatedAt = new Date().toISOString();
        draft[action.payload.id] = {
          ...action.payload,
          updatedAt,
        };
      });
    },
    deleteWallet(state, action: PayloadAction<string>) {
      return produce(state, (draft) => {
        const id = action.payload;
        delete draft[id];
      });
    },
  },
});

export const {
  createWallet: createWalletAction,
  editWallet: editWalletAction,
  deleteWallet: deleteWalletAction,
} = walletsSlice.actions;

export default walletsSlice.reducer;
