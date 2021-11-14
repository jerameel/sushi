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
    header: {
      padding: 8,
    },
    balanceContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.DIVIDER,
    },
    breakdownContainer: {
      marginTop: 16,
    },
    content: {
      flex: 1,
    },
    contentScroll: {
      paddingHorizontal: 16,
      paddingBottom: 8,
    },
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    contentHeaderAction: {
      backgroundColor: colors.AREA_HIGHLIGHT,
      height: 32,
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 12,
      borderColor: colors.BORDER,
      paddingHorizontal: 8,
      flexDirection: 'row',
    },
    walletsScrollContainer: {
      height: 125,
    },
    walletCard: {
      marginRight: 8,
    },
    transactionsContainer: {
      flex: 1,
    },
    transactionCard: {
      marginTop: 8,
    },
  });
  return { styles, colors, theme };
};

export default useStyles;
