import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { COLORS } from 'theme';

const useStyles = (theme: Theme = DEFAULT_THEME) => {
  const colors = COLORS[theme.base];
  const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: colors.BORDER,
      backgroundColor: colors.PRIMARY + '07',
      borderRadius: 5,
      padding: 5,
    },
    containerActive: {
      borderColor: colors.PRIMARY,
      // backgroundColor: colors.AREA_HIGHLIGHT,
    },
    label: {
      color: colors.PRIMARY,
    },
    input: {
      height: 40,
      fontFamily: 'Heebo-Regular',
      fontSize: 16,
      letterSpacing: 0.5,
      color: colors.SECONDARY_TEXT,
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
