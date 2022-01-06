import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

export type Currency = {
  language: string;
};

const initialState: Currency = {
  language: 'en-US',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      return produce(state, (draft) => {
        draft.language = action.payload;
      });
    },
  },
});

export const { setLanguage: setLanguageAction } = currencySlice.actions;

export default currencySlice.reducer;
