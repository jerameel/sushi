import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import WalletCard from '../../../src/components/module/WalletCard';
import { COLORS } from '../../../src/theme';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.LIGHT.BACKGROUND },
  card: {
    marginTop: 8,
  },
});

storiesOf('module/WalletCard', module).add('Summary', () => (
  <View style={styles.container}>
    <WalletCard containerStyle={styles.card} label="Cash" balance={123456} />
    <WalletCard containerStyle={styles.card} label="Bank A" balance={100} />
    <WalletCard
      containerStyle={styles.card}
      label="Cryptowallet A"
      balance={12345}
    />
  </View>
));
