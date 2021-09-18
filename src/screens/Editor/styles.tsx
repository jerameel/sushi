import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { getGlobalStyles, COLORS } from 'theme';

const useStyles = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const colors = COLORS[theme.base];
  const STYLES = getGlobalStyles(theme.base);
  const styles = StyleSheet.create({
    container: { ...STYLES.CONTAINER, padding: 16 },
    header: STYLES.HEADER,
    headerTitle: STYLES.HEADER_TITLE,
    content: {
      flex: 1,
    },
    contentScroll: {
      paddingHorizontal: 16,
    },
    settingItem: {
      marginTop: 16,
    },
  });
  return { styles, colors, theme };
};

export default useStyles;
