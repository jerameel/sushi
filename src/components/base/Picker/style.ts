import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { getGlobalStyles, COLORS } from 'theme';

const useStyles = (theme: Theme = DEFAULT_THEME) => {
  const colors = COLORS[theme.base];
  const STYLES = getGlobalStyles(theme.base);
  const styles = StyleSheet.create({
    container: {},
    inputContainer: {
      marginTop: 2,
      borderWidth: 2,
      borderColor: colors.BORDER,
      backgroundColor: colors.AREA_HIGHLIGHT,
      borderRadius: 5,
      padding: 2,
      paddingHorizontal: 8,
      height: 50,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      color: colors.PRIMARY_TEXT,
    },
    value: {
      fontFamily: 'Heebo-Regular',
      fontSize: 16,
      letterSpacing: 0.5,
      color: colors.PRIMARY_TEXT,
    },
    modalContainer: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      backgroundColor: '#00000022',
    },
    modalTitle: {
      color: colors.TITLE,
    },
    modalContentArea: {
      backgroundColor: colors.AREA_HIGHLIGHT,
      padding: 16,
      borderRadius: 10,
      maxHeight: '50%',
    },
    modalTitleContainer: {
      padding: 16,
    },
    modalItemContainer: {
      padding: 16,
    },
    modalItemLabel: {
      color: colors.PRIMARY_TEXT,
    },
    modalItemLabelActive: {
      color: colors.PRIMARY,
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
