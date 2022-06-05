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
    },
    imageContainer: {
      width: 48,
      height: 48,
      borderWidth: 1,
      borderRadius: 16,
      borderColor: colors.BORDER,
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailsContainer: {
      marginLeft: 16,
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    rowColumnLeft: {
      flex: 1,
    },
    rowColumnRight: {
      flex: 1,
      alignItems: 'flex-end',
    },
    dateText: {
      color: colors.DISABLE,
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
