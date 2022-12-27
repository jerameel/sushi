import React from 'react';
import { View } from 'react-native';
import useStyles from './style';
import { BalanceBreakdownProps } from './props';
import Text from 'components/base/Text';
import TextView from 'components/base/Text/view';
import { formatCurrency } from 'utils/formatCurrency';
import { DownLeft, UpDown, UpRight } from 'components/base/SVG';

const BalanceBreakdown = (props: BalanceBreakdownProps) => {
  const { containerStyle = {}, theme, income, expenses, language } = props;

  const { styles, colors } = useStyles(theme);
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.card}>
        <TextView variant="subtitle" theme={theme}>
          {formatCurrency(income, { language })}
        </TextView>
        <View style={styles.cardLabelContainer}>
          <View style={styles.cardLabelIcon}>
            <DownLeft fill={colors.POSITIVE} width={16} height={16} />
          </View>
          <Text
            variant="label"
            style={styles.cardLabelText}
            theme={theme}
            translationKey="DEBIT"
          />
        </View>
      </View>
      <View style={styles.card}>
        <TextView variant="subtitle" theme={theme}>
          {formatCurrency(expenses, { language })}
        </TextView>
        <View style={styles.cardLabelContainer}>
          <View style={styles.cardLabelIcon}>
            <UpRight fill={colors.NEGATIVE} width={16} height={16} />
          </View>
          <Text
            variant="label"
            style={styles.cardLabelText}
            theme={theme}
            translationKey="CREDIT"
          />
        </View>
      </View>
    </View>
  );
};

export default BalanceBreakdown;
