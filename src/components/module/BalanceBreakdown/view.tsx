import React from 'react';
import { View } from 'react-native';
import useStyles from './style';
import { BalanceBreakdownProps } from './props';
import Text from 'components/base/Text';
import numbro from 'numbro';

const BalanceBreakdown = (props: BalanceBreakdownProps) => {
  const { containerStyle = {}, theme, income, expenses } = props;

  const { styles, colors } = useStyles(theme);
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.card}>
        <Text variant="label" style={styles.cardLabelText}>
          Income
        </Text>
        <Text variant="subtitle">
          {numbro(income).formatCurrency({
            mantissa: 2,
          })}
        </Text>
      </View>
      <View style={styles.card}>
        <Text variant="label" style={styles.cardLabelText}>
          Expenses
        </Text>
        <Text variant="subtitle">
          {numbro(expenses).formatCurrency({
            mantissa: 2,
          })}
        </Text>
      </View>
    </View>
  );
};

export default BalanceBreakdown;
