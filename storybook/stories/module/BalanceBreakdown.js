import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BalanceBreakdown from '../../../src/components/module/BalanceBreakdown';
import { COLORS } from '../../../src/theme';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.LIGHT.BACKGROUND },
});

storiesOf('module/BalanceBreakdown', module).add('Summary', () => (
  <View style={styles.container}>
    <BalanceBreakdown income={10000} expenses={7500} />
  </View>
));
