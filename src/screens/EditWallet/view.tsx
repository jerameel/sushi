import React, { useState } from 'react';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { EditWalletProps } from './props';
import { Back } from 'components/base/SVG';
import SmartText from 'components/smart/SmartText';
import SmartTextInput from 'components/smart/SmartTextInput';
import SmartButton from 'components/smart/SmartButton';

const EditWalletView = (props: EditWalletProps) => {
  const { navigation, wallet, editWallet } = props;
  const { styles, theme, colors } = useStyles();

  const [label, setLabel] = useState(wallet.label);
  const [initialAmount, setInitialAmount] = useState(
    wallet.initialAmount.toFixed(2),
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle={theme.base === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBackAction}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back fill={colors.PRIMARY_TEXT} width={24} height={24} />
        </TouchableOpacity>
        <SmartText
          containerStyle={styles.headerTitleContainer}
          variant="title"
          theme={theme}
          translationKey="EDIT_ACCOUNT"
        />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.contentScroll}>
          <SmartTextInput
            containerStyle={styles.textFieldContainer}
            translationKey="ACCOUNT_NAME"
            value={label}
            onChangeText={(text) => setLabel(text)}
            theme={theme}
          />

          <SmartTextInput
            containerStyle={styles.textFieldContainer}
            translationKey="INITIAL_AMOUNT"
            value={initialAmount}
            maxLength={14}
            onChangeText={(text) => setInitialAmount(text)}
            placeholder="0"
            keyboardType="decimal-pad"
            onBlur={() => {
              setInitialAmount((previousValue) =>
                (parseFloat(previousValue) || 0).toString(),
              );
            }}
            theme={theme}
          />
        </ScrollView>
        <View style={styles.actionsContainer}>
          <SmartButton
            onPress={() =>
              editWallet({
                ...wallet,
                label: label || 'New Wallet',
                initialAmount: parseFloat(initialAmount) || 0,
              })
            }
            translationKey="UPDATE_ACCOUNT"
            theme={theme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditWalletView;
