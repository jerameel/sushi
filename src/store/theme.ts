import { Appearance } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

export type THEME_OPTION = 'Light' | 'Dark';

export type Theme = {
  base: THEME_OPTION;
};

const initialState: Theme = {
  base: Appearance.getColorScheme() === 'dark' ? 'Dark' : 'Light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<THEME_OPTION>) {
      return produce(state, (draft) => {
        draft.base = action.payload;
      });
    },
  },
});

export const { setTheme: setThemeAction } = themeSlice.actions;

export default themeSlice.reducer;
