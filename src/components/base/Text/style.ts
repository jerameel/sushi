import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // Container style
  },
});

export const fontStyles = StyleSheet.create({
  title: {
    fontFamily: 'Heebo-Bold',
    fontSize: 24,
  },
  subtitle: {
    fontFamily: 'Heebo-Medium',
    fontSize: 18,
    letterSpacing: 0.15,
  },
  body: {
    fontFamily: 'Heebo-Regular',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  label: {
    fontFamily: 'Heebo-SemiBold',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});

export default styles;
