import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionCard from '../../../src/components/module/TransactionCard/view';
import { COLORS } from '../../../src/theme';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.LIGHT.BACKGROUND },
  card: {
    marginTop: 8,
  },
});

storiesOf('module/TransactionCard', module).add('Summary', () => (
  <View style={styles.container}>
    <TransactionCard
      containerStyle={styles.card}
      category="Subscription"
      amount={123456}
      paidAt={new Date().toISOString()}
      sourceWallet="Credit Card"
    />
    <TransactionCard
      containerStyle={styles.card}
      category="Food"
      amount={100}
      paidAt={new Date().toISOString()}
      sourceWallet="Savings Bank"
    />
    <TransactionCard
      containerStyle={styles.card}
      category="Shopping"
      amount={12345}
      paidAt={new Date().toISOString()}
      sourceWallet="Cash"
    />
  </View>
));
