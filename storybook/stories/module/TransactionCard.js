import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionCard from '../../../src/components/module/TransactionCard';
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
      category="Cash"
      amount={123456}
    />
    <TransactionCard
      containerStyle={styles.card}
      category="Bank A"
      amount={100}
    />
    <TransactionCard
      containerStyle={styles.card}
      category="Cryptowallet A"
      amount={12345}
    />
  </View>
));
