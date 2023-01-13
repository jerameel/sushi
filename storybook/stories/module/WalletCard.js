import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import WalletCard from '../../../src/components/module/WalletCard/view';
import { COLORS } from '../../../src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.LIGHT.BACKGROUND,
  },
  scroll: {
    height: 125,
  },
  card: {
    marginLeft: 8,
  },
});

storiesOf('module/WalletCard', module).add('Summary', () => (
  <View style={styles.container}>
    <View style={styles.scroll}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <WalletCard
          containerStyle={styles.card}
          label="Cash"
          balance={123456}
        />
        <WalletCard
          containerStyle={styles.card}
          label="Bank ABC"
          balance={100}
        />
        <WalletCard
          containerStyle={styles.card}
          label="Cryptowallet ABC DEF"
          balance={12345}
        />
      </ScrollView>
    </View>
  </View>
));
