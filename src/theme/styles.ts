import { StyleSheet } from 'react-native';
import { THEME_OPTION } from 'store/theme';
import COLORS from './colors';

export const getGlobalStyles = (theme: THEME_OPTION) => {
  return StyleSheet.create({
    CONTAINER: {
      flex: 1,
      backgroundColor: COLORS[theme].BACKGROUND,
    },
    HEADER: {
      display: 'flex',
      padding: 16,
      backgroundColor: COLORS[theme].BACKGROUND,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
