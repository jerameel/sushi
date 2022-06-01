import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from 'components/base/Text';
import useStyles from './style';
import { TransactionCardProps } from './props';
import { UpRight, DownLeft, UpDown } from 'components/base/SVG';
import { formatCurrency } from 'utils/formatCurrency';
import { formatDate } from 'utils/formatDate';

const TransactionCard = (props: TransactionCardProps) => {
  const {
    containerStyle = {},
    theme,
    category,
    amount,
    sourceWallet,
    destinationWallet,
    createdAt,
    onPress,
    language,
  } = props;

  const { styles, colors } = useStyles(theme);

  const Icon = (() => {
    if (destinationWallet) {
      return <UpDown width={24} height={24} fill={colors.NEUTRAL} />;
    }

    if (amount > 0) {
      return <DownLeft width={24} height={24} fill={colors.POSITIVE} />;
    }

    if (amount < 0) {
      return <UpRight width={24} height={24} fill={colors.NEGATIVE} />;
    }

    return <UpDown width={24} height={24} fill={colors.NEUTRAL} />;
  })();
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.6}>
      <View style={styles.imageContainer}>{Icon}</View>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text
            containerStyle={styles.rowColumnLeft}
            variant="subtitle"
            theme={theme}>
            {category}
          </Text>
          <Text
            containerStyle={styles.rowColumnRight}
            variant="subtitle"
            theme={theme}>
            {`${amount > 0 ? '+' : ''}${formatCurrency(
              destinationWallet ? Math.abs(amount) : amount,
              { language },
            )}`}
          </Text>
        </View>
        <Text variant="body" theme={theme}>{`${sourceWallet}${
          destinationWallet ? ` to ${destinationWallet}` : ''
        }`}</Text>
        <Text variant="label" style={styles.dateText} theme={theme}>
          {formatDate(createdAt)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
