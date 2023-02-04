import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Filters = {
  startDate: Date | null;
  endDate: Date | null;
  searchTerm: string;
  accountId: string | null;
  transactionType: 'DEBIT' | 'CREDIT' | null;
};

const initialState: Filters = {
  startDate: null,
  endDate: null,
  searchTerm: '',
  accountId: null,
  transactionType: null,
};

const filtersSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    applyFilters(state, action: PayloadAction<Filters>) {
      return action.payload;
    },
  },
});

export const { applyFilters: applyFiltersAction } = filtersSlice.actions;

export default filtersSlice.reducer;
