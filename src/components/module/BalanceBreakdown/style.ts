import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { COLORS } from 'theme';

const useStyles = (theme: Theme = DEFAULT_THEME) => {
  const colors = COLORS[theme.base];
  // const STYLES = getGlobalStyles(theme.base);
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    card: {
      marginHorizontal: 8,
      flex: 1,
      height: 100,
      backgroundColor: colors.AREA_HIGHLIGHT,
      borderRadius: 10,
      padding: 16,
    },
    cardLabelText: {
      color: colors.DISABLE,
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
