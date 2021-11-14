import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from '../../../src/components/base/TextInput';
import { COLORS } from '../../../src/theme';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.LIGHT.BACKGROUND },
  darkBackground: {
    backgroundColor: COLORS.DARK.BACKGROUND,
  },
});

const TextInputWrapper = (props) => {
  const [text, setText] = useState('');
  return <TextInput {...props} value={text} onChangeText={(v) => setText(v)} />;
};

storiesOf('base/TextInput', module).add('Summary', () => {
  return (
    <View style={styles.container}>
      <TextInputWrapper label="Plain Text Input" />
    </View>
  );
});

const DARK_THEME = {
  base: 'Dark',
};

storiesOf('base/TextInput', module).add('Summary (Dark)', () => {
  return (
    <View style={[styles.container, styles.darkBackground]}>
      <TextInputWrapper theme={DARK_THEME} label="Plain Text Input" />
    </View>
  );
});
