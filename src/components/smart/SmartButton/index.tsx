import React from 'react';
import { TouchableOpacity } from 'react-native';
import useStyles from '../../base/Button/style';
import { ButtonProps } from '../../base/Button/props';
import { Translation } from 'types/Translation';
import SmartText from '../SmartText';

type SmartButtonProps = {
  translationKey: keyof Translation;
};

const SmartButton = (props: Omit<ButtonProps, 'label'> & SmartButtonProps) => {
  const {
    containerStyle = {},
    theme,
    onPress,
    outline,
    disabled,
    translationKey,
  } = props;

  const { styles } = useStyles(theme);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        outline ? styles.outlineContainer : styles.container,
        containerStyle,
        disabled
          ? outline
            ? styles.outlineContainerDisabled
            : styles.containerDisabled
          : {},
      ]}
      onPress={onPress}>
      <SmartText
        variant="label"
        style={outline ? styles.outlineText : styles.text}
        theme={theme}
        translationKey={translationKey}
      />
    </TouchableOpacity>
  );
};

export default SmartButton;
