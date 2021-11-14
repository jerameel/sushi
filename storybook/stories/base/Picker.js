import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Picker from '../../../src/components/base/Picker';
import { COLORS } from '../../../src/theme';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.LIGHT.BACKGROUND },
});

const options = [
  {
    label: 'Option A',
    value: 'a',
  },
  {
    label: 'Option B',
    value: 'b',
  },
  {
    label: 'Option C',
    value: 'c',
  },
];

const PickerWrapper = (props) => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <Picker
      {...props}
      selectedValue={selectedValue}
      onSelect={(v) => setSelectedValue(v)}
    />
  );
};

storiesOf('base/Picker', module).add('Summary', () => (
  <View style={styles.container}>
    <PickerWrapper
      label="Picker"
      options={options}
      placeholder="Please select"
    />
  </View>
));
