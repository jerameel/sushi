import React from 'react';
import { View } from 'react-native';
import numbro from 'numbro';
import Text from 'components/base/Text';
import useStyles from './style';
import { TransactionCardProps } from './props';

const TransactionCard = (props: TransactionCardProps) => {
  const { containerStyle = {}, theme, category, amount } = props;

  const { styles, colors } = useStyles(theme);
  return (
    <View style={[styles.container, containerStyle]}>
      <Text>{category}</Text>
      <Text variant="subtitle">
        {numbro(amount).formatCurrency({ mantissa: 2, average: true })}
      </Text>
    </View>
  );
};

export default TransactionCard;
