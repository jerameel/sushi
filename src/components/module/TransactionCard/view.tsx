import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from 'components/base/Text/view';
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
    paidAt,
    onPress,
    language,
  } = props;

  const { styles, colors } = useStyles(theme);

  const config = (() => {
    const defaultConfig = {
      color: colors.PRIMARY_TEXT,
      prefix: '',
    };
    if (destinationWallet) {
      return defaultConfig;
    }

    if (amount > 0) {
      return {
        color: colors.POSITIVE,
        prefix: '+ ',
      };
    }

    if (amount < 0) {
      return {
        color: colors.NEGATIVE,
        prefix: '- ',
      };
    }

    return defaultConfig;
  })();
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.6}>
      {/* <View style={styles.imageContainer}>{Icon}</View> */}
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
            variant="label"
            style={styles.dateText}
            theme={theme}>
            {formatDate(paidAt, 'hh:mm a')}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            containerStyle={styles.rowColumnLeft}
            variant="body"
            theme={theme}>{`${sourceWallet}${
            destinationWallet ? ` to ${destinationWallet}` : ''
          }`}</Text>
          <Text
            containerStyle={styles.rowColumnRight}
            style={{ color: config.color }}
            variant="subtitle"
            theme={theme}>
            {`${config.prefix}${formatCurrency(Math.abs(amount), {
              language,
            })}`}
          </Text>
        </View>
        {/* {showDate && (
          <Text variant="label" style={styles.dateText} theme={theme}>
            {formatDate(createdAt)}
          </Text>
        )} */}
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
