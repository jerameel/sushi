import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Chip from '../../../src/components/base/Chip';
import { COLORS } from '../../../src/theme';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.LIGHT.BACKGROUND },
});

storiesOf('base/Chip', module).add('Summary', () => (
  <View style={styles.container}>
    <Chip />
  </View>
));
