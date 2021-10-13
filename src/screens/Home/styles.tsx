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
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    walletsScrollContainer: {
      height: 125,
    },
    walletCard: {
      marginLeft: 8,
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
