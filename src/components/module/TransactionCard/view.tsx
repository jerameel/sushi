import React from 'react';
import { View } from 'react-native';
import numbro from 'numbro';
import moment from 'moment';
import Text from 'components/base/Text';
import useStyles from './style';
import { TransactionCardProps } from './props';

const TransactionCard = (props: TransactionCardProps) => {
  const {
    containerStyle = {},
    theme,
    category,
    amount,
    sourceWallet,
    destinationWallet,
    createdAt,
  } = props;

  const { styles, colors } = useStyles(theme);
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        <Text containerStyle={styles.rowColumnLeft} variant="subtitle">
          {category}
        </Text>
        <Text containerStyle={styles.rowColumnRight} variant="subtitle">
          {`${amount > 0 ? '+' : ''}${numbro(amount).formatCurrency({
            mantissa: 2,
            average: true,
          })}`}
        </Text>
      </View>
      <Text variant="body">{`${sourceWallet}${
        destinationWallet ? ` to ${destinationWallet}` : ''
      }`}</Text>
      <Text variant="label" style={styles.dateText}>
        {moment(createdAt).format('MMM DD, YYYY hh:mm a')}
      </Text>
    </View>
  );
};

export default TransactionCard;
