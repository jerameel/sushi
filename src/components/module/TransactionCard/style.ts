import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { COLORS } from 'theme';

const useStyles = (theme: Theme = DEFAULT_THEME) => {
  const colors = COLORS[theme.base];
  // const STYLES = getGlobalStyles(theme.base);
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 10,
      backgroundColor: colors.AREA_HIGHLIGHT,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    detailsContainer: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    rowColumnLeft: {
      flex: 1,
    },
    rowColumnRight: {
      flex: 1,
      alignItems: 'flex-end',
    },
    dateText: {
      color: colors.PLACE_HOLDER,
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
