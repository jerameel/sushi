import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { getGlobalStyles, COLORS } from 'theme';

const useStyles = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const colors = COLORS[theme.base];
  const STYLES = getGlobalStyles(theme.base);
  const styles = StyleSheet.create({
    container: STYLES.CONTAINER,
    header: STYLES.HEADER,
    headerTitleContainer: {
      marginLeft: 8,
    },
    headerBackAction: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    content: {
      flex: 1,
    },
    contentScroll: {
      padding: 16,
    },
    inputContainer: {
      marginTop: 16,
    },
    suggestionsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 4,
    },
    suggestionsBadge: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      backgroundColor: colors.AREA_HIGHLIGHT,
      borderRadius: 9,
      borderWidth: 1,
      borderColor: colors.BORDER,
      marginRight: 4,
      marginTop: 4,
    },
    suggestionText: {
      color: colors.PRIMARY,
    },
    transactionTypeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 4,
    },
    transactionTypeBadge: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.AREA_HIGHLIGHT,
      borderRadius: 9,
      borderWidth: 1,
      borderColor: colors.BORDER,
      marginRight: 4,
      marginTop: 4,
    },
    transactionTypeBadgeSelected: {
      borderColor: colors.PRIMARY,
    },
    transactionTypeText: {
      color: colors.PRIMARY,
      fontSize: 18,
    },
    actionsContainer: {
      padding: 16,
    },
    spacer: {
      height: 32,
    },
  });
  return { styles, colors, theme };
};

export default useStyles;
