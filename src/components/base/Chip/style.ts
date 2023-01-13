import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { getGlobalStyles, COLORS } from 'theme';
import { ChipProps } from './props';

const useStyles = (theme: Theme = DEFAULT_THEME, props: ChipProps) => {
  const colors = COLORS[theme.base];
  const STYLES = getGlobalStyles(theme.base);
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: 4,
      minWidth: 64,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: props.selected ? colors.PRIMARY : colors.AREA_HIGHLIGHT,
      backgroundColor: colors.AREA_HIGHLIGHT,
      borderRadius: 16,
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    text: {
      marginLeft: props.icon ? 8 : 0,
      color: props.selected ? colors.PRIMARY_TEXT : colors.SECONDARY_TEXT,
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
