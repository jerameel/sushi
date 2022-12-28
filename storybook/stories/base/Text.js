import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../../src/components/base/Text/view';
import { COLORS } from '../../../src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT.BACKGROUND,
  },
  darkBackground: {
    backgroundColor: COLORS.DARK.BACKGROUND,
  },
});

storiesOf('base/Text', module).add('Summary', () => (
  <View style={styles.container}>
    <Text variant="title">Title</Text>
    <Text variant="subtitle">Subtitle</Text>
    <Text>Body</Text>
    <Text variant="label">Label</Text>
  </View>
));

const DARK_THEME = {
  base: 'Dark',
};

storiesOf('base/Text', module).add('Summary (Dark)', () => (
  <View style={[styles.container, styles.darkBackground]}>
    <Text theme={DARK_THEME} variant="title">
      Title
    </Text>
    <Text theme={DARK_THEME} variant="subtitle">
      Subtitle
    </Text>
    <Text theme={DARK_THEME}>Body</Text>
    <Text theme={DARK_THEME} variant="label">
      Label
    </Text>
  </View>
));
