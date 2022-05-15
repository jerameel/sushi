import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import numbro from 'numbro';
import Text from 'components/base/Text';
import useStyles from './style';
import { WalletCardProps } from './props';
import { Add } from 'components/base/SVG';

const WalletCard = (props: WalletCardProps) => {
  const {
    containerStyle = {},
    theme,
    label,
    balance,
    template,
    onPress,
  } = props;

  const { styles, colors } = useStyles(theme, props);

  if (template) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.templateContainer, containerStyle]}
        activeOpacity={0.6}>
        <Add width={32} height={32} fill={colors.PRIMARY} />
      </TouchableOpacity>
    );
  }

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
