import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { COLORS } from 'theme';

const useStyles = (theme: Theme = DEFAULT_THEME) => {
  const colors = COLORS[theme.base];
  const styles = StyleSheet.create({
    container: {},
    inputContainer: {
      marginTop: 2,
      borderWidth: 2,
      borderColor: colors.BORDER,
      backgroundColor: colors.AREA_HIGHLIGHT,
      borderRadius: 5,
      padding: 2,
    },
    inputContainerActive: {
      borderColor: colors.PRIMARY,
    },
    label: {
      color: colors.PRIMARY_TEXT,
    },
    input: {
      height: 40,
      fontFamily: 'Heebo-Regular',
      fontSize: 16,
      letterSpacing: 0.5,
      color: colors.PRIMARY_TEXT,
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
