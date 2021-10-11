import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { COLORS } from 'theme';

const BUTTON_HEIGHT = 40;

const useStyles = (theme: Theme = DEFAULT_THEME) => {
  const colors = COLORS[theme.base];
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.PRIMARY,
      height: BUTTON_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      flexDirection: 'row',
    },
    containerDisabled: {
      backgroundColor: colors.DISABLE,
    },
    text: {
      fontFamily: 'Heebo-Bold',
      fontSize: 12,
      color: COLORS.DARK.PRIMARY_TEXT,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    outlineContainer: {
      backgroundColor: 'transparent',
      height: BUTTON_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderColor: colors.PRIMARY,
      borderWidth: 2,
      flexDirection: 'row',
    },
    outlineContainerDisabled: {
      borderColor: colors.DISABLE,
    },
    outlineText: {
      fontFamily: 'Heebo-Bold',
      fontSize: 12,
      color: colors.PRIMARY_TEXT,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
