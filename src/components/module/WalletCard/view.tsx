import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import numbro from 'numbro';
import Text from 'components/base/Text';
import useStyles from './style';
import { WalletCardProps } from './props';

const WalletCard = (props: WalletCardProps) => {
  const { containerStyle = {}, theme, label, balance, onPress } = props;

  const { styles, colors } = useStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}
      activeOpacity={0.6}>
      <Text variant="subtitle" theme={theme}>
        {numbro(balance).formatCurrency({
          mantissa: 2,
        })}
      </Text>
      <Text theme={theme}>{label}</Text>
    </TouchableOpacity>
  );
};

export default WalletCard;
