import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from 'components/base/Text/view';
import useStyles from './style';
import { WalletCardProps } from './props';
import { Add } from 'components/base/SVG';
import { formatCurrency } from 'utils/formatCurrency';

const WalletCard = (props: WalletCardProps) => {
  const {
    containerStyle = {},
    theme,
    label,
    balance,
    template,
    onPress,
    language,
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
        {formatCurrency(balance, { language })}
      </Text>
      <Text theme={theme}>{label}</Text>
    </TouchableOpacity>
  );
};

export default WalletCard;
