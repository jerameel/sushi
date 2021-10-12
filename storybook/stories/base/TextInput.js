import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from '../../../src/components/base/TextInput';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  darkBackground: {
    backgroundColor: '#000',
  },
});

const TextWrapper = (props) => {
  const [text, setText] = useState('');
  return <TextInput {...props} value={text} onChangeText={(v) => setText(v)} />;
};

storiesOf('base/TextInput', module).add('Summary', () => {
  return (
    <View style={styles.container}>
      <TextWrapper label="Plain Text Input" />
    </View>
  );
});

const DARK_THEME = {
  base: 'Dark',
};

storiesOf('base/TextInput', module).add('Summary (Dark)', () => {
  return (
    <View style={[styles.container, styles.darkBackground]}>
      <TextWrapper theme={DARK_THEME} label="Plain Text Input" />
    </View>
  );
});
