import React from 'react';
import { View } from 'react-native';
import numbro from 'numbro';
import Text from 'components/base/Text';
import useStyles from './style';
import { WalletCardProps } from './props';

const WalletCard = (props: WalletCardProps) => {
  const { containerStyle = {}, theme, label, balance } = props;

  const { styles, colors } = useStyles(theme);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text>{label}</Text>
      <Text variant="subtitle">
        {numbro(balance).formatCurrency({ mantissa: 2, average: true })}
      </Text>
    </View>
  );
};

export default WalletCard;
