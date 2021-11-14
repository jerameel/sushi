import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../../src/components/base/Button';
import { COLORS } from '../../../src/theme';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.LIGHT.BACKGROUND },
  button: { marginTop: 8 },
  darkBackground: {
    backgroundColor: COLORS.DARK.BACKGROUND,
  },
});

storiesOf('base/Button', module).add('Summary', () => (
  <View style={styles.container}>
    <Button label="Primary Button" />
    <Button containerStyle={styles.button} label="Secondary Button" outline />
    <Button
      containerStyle={styles.button}
      label="Disabled Primary Button"
      disabled
    />
    <Button
      containerStyle={styles.button}
      label="Disabled Secondary Button"
      outline
      disabled
    />
  </View>
));

const DARK_THEME = {
  base: 'Dark',
};

storiesOf('base/Button', module).add('Summary (Dark)', () => (
  <View style={[styles.container, styles.darkBackground]}>
    <Button theme={DARK_THEME} label="Primary Button" />
    <Button
      theme={DARK_THEME}
      containerStyle={styles.button}
      label="Secondary Button"
      outline
    />
    <Button
      theme={DARK_THEME}
      containerStyle={styles.button}
      label="Disabled Primary Button"
      disabled
    />
    <Button
      theme={DARK_THEME}
      containerStyle={styles.button}
      label="Disabled Secondary Button"
      outline
      disabled
    />
  </View>
));
