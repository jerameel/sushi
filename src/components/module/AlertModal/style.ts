import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { COLORS } from 'theme';

const useStyles = (theme: Theme = DEFAULT_THEME) => {
  const colors = COLORS[theme.base];
  // const STYLES = getGlobalStyles(theme.base);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: '#00000022',
    },
    contentArea: {
      backgroundColor: colors.AREA_HIGHLIGHT,
      padding: 16,
      borderRadius: 10,
    },
    title: {
      color: colors.TITLE,
    },

    descriptionContainer: {
      marginTop: 8,
    },

    description: {
      color: colors.PRIMARY_TEXT,
    },

    actionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 16,
    },

    actionButton: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginLeft: 8,
    },

    actionLabel: {
      color: colors.TITLE,
      textTransform: 'uppercase',
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
