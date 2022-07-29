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
    imageContainer: {
      width: 24,
      height: 24,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: colors.BORDER,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 4,
    },
    detailsContainer: {
      marginLeft: 8,
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
