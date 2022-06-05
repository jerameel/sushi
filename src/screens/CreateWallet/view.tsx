import React, { useState } from 'react';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { CreateWalletProps } from './props';
import { Back } from 'components/base/SVG';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';

const CreateWalletView = (props: CreateWalletProps) => {
  const { navigation, createWallet } = props;
  const { styles, theme, colors } = useStyles();

  const [label, setLabel] = useState('');
  const [initialAmount, setInitialAmount] = useState('');

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
        <Text
          containerStyle={styles.headerTitleContainer}
          variant="title"
          theme={theme}>
          New Wallet
        </Text>
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.contentScroll}>
          <TextInput
            containerStyle={styles.textFieldContainer}
            label="Label"
            value={label}
            onChangeText={(text) => setLabel(text)}
            theme={theme}
          />

          <TextInput
            containerStyle={styles.textFieldContainer}
            label="Initial Amount"
            value={initialAmount}
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
          <Button
            onPress={() =>
              createWallet({
                label: label || 'New Wallet',
                initialAmount: parseFloat(initialAmount) || 0,
              })
            }
            label="Create Wallet"
            theme={theme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateWalletView;
