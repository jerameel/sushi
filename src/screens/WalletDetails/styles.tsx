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
    detailsCard: {
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 10,
      backgroundColor: colors.AREA_HIGHLIGHT,
    },
    detailsCardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    transactionsContainer: {
      flex: 1,
      marginTop: 16,
    },
    transactionCard: {
      marginTop: 8,
    },
  });
  return { styles, colors, theme };
};

export default useStyles;
