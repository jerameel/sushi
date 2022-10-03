import { DEFAULT_THEME } from 'theme';
import { StyleSheet } from 'react-native';
import { Theme } from 'store/theme';
import { COLORS } from 'theme';

const useStyles = (theme: Theme = DEFAULT_THEME) => {
  const colors = COLORS[theme.base];
  // const STYLES = getGlobalStyles(theme.base);
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
      maxHeight: '75%',
    },
    modalTitleContainer: {
      padding: 16,
      flexDirection: 'row',
    },
    modalTitleTextContainer: {
      flex: 1,
    },
    modalTitleAction: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    timePickerContainer: {
      flexDirection: 'row',
      paddingVertical: 16,
      justifyContent: 'center',
    },
    timePickerList: {
      maxHeight: 120,
    },
    touchableHour: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    touchableMinute: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    timePickerLabel: {
      fontSize: 32,
      color: colors.PRIMARY_TEXT,
      height: 42,
    },
    timePickerLabelActive: {
      fontSize: 32,
      color: colors.PRIMARY,
      height: 42,
    },
    timePickerSeparator: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 4,
    },
    spacer: {
      height: 42,
    },
  });

  return { styles, colors, theme };
};

export default useStyles;
