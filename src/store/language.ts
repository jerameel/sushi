import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRANSLATIONS } from 'constants/translations';
import produce from 'immer';

export type Language = {
  selected: keyof typeof TRANSLATIONS;
};

const initialState: Language = {
  selected: 'en-US',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setSelectedLanguage(
      state,
      action: PayloadAction<keyof typeof TRANSLATIONS>,
    ) {
      return produce(state, (draft) => {
        draft.selected = action.payload;
      });
    },
  },
});

export const { setSelectedLanguage: setSelectedLanguageAction } =
  languageSlice.actions;

export default languageSlice.reducer;
