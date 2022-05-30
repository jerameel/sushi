import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { getGlobalStyles, COLORS } from 'theme';
import { WalletCardProps } from './props';

const useStyles = (theme: Theme = DEFAULT_THEME, props: WalletCardProps) => {
  const colors = COLORS[theme.base];
  const STYLES = getGlobalStyles(theme.base);
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 10,
      width: 150,
      backgroundColor: colors.AREA_HIGHLIGHT,
      justifyContent: 'space-between',
    },
    templateContainer: {
      padding: 16,
      borderRadius: 10,
      width: 150,
      backgroundColor: colors.AREA_HIGHLIGHT,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
