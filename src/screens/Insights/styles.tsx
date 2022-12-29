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
      flex: 1,
      marginRight: 8,
    },
    headerLeftAction: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    content: {
      flex: 1,
    },
    contentScroll: {
      paddingBottom: 8,
      paddingHorizontal: 16,
    },
  });
  return { styles, colors, theme };
};

export default useStyles;
