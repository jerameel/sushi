import React from 'react';
import { View } from 'react-native';
import useStyles from './style';
import { BalanceBreakdownProps } from './props';
import Text from 'components/base/Text';
import { formatCurrency } from 'utils/formatCurrency';
import TranslatedText from 'components/smart/TranslatedText';

const BalanceBreakdown = (props: BalanceBreakdownProps) => {
  const { containerStyle = {}, theme, income, expenses, language } = props;

  const { styles } = useStyles(theme);
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.card}>
        <TranslatedText
          variant="label"
          style={styles.cardLabelText}
          theme={theme}
          translationKey="DEBIT"
        />
        <Text variant="subtitle" theme={theme}>
          {formatCurrency(income, { language })}
        </Text>
      </View>
      <View style={styles.card}>
        <TranslatedText
          variant="label"
          style={styles.cardLabelText}
          theme={theme}
          translationKey="CREDIT"
        />
        <Text variant="subtitle" theme={theme}>
          {formatCurrency(expenses, { language })}
        </Text>
      </View>
    </View>
  );
};

export default BalanceBreakdown;
