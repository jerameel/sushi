import React, { useReducer, useState } from 'react';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { CreateTransactionProps } from './props';
import { Back } from 'components/base/SVG';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';
import Picker from 'components/base/Picker';

const CreateTransactionView = (props: CreateTransactionProps) => {
  const { navigation, createTransaction, wallets } = props;
  const { styles, theme, colors } = useStyles();

  const walletOptions = Object.keys(wallets).map((key) => {
    const wallet = wallets[key];
    return {
      label: wallet.label,
      value: wallet.id,
    };
  });

  const [category, setCategory] = useState('');
  const [sourceWalletId, setSourceWalletId] = useState<string | null>(null);
  const [destinationWalletId, setDestinationWalletId] = useState<string | null>(
    null,
  );
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

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
        <Text containerStyle={styles.headerTitleContainer} variant="title">
          New Transaction
        </Text>
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.contentScroll}>
          <TextInput
            containerStyle={styles.inputContainer}
            label="Category"
            value={category}
            onChangeText={(text) => setCategory(text)}
          />

          <View style={styles.categorySuggestionsContainer}>
            <TouchableOpacity
              style={styles.categorySuggestionBadge}
              onPress={() => {
                setCategory('Transfer');
              }}>
              <Text style={styles.categorySuggestionText} variant="label">
                Transfer
              </Text>
            </TouchableOpacity>
          </View>

          <Picker
            containerStyle={styles.inputContainer}
            label="Source Wallet"
            selectedValue={sourceWalletId || undefined}
            onSelect={(value) => setSourceWalletId(value)}
            options={walletOptions}
          />

          {category === 'Transfer' && (
            <Picker
              containerStyle={styles.inputContainer}
              label="Destination Wallet"
              selectedValue={destinationWalletId || undefined}
              onSelect={(value) => setDestinationWalletId(value)}
              options={walletOptions}
            />
          )}

          <TextInput
            containerStyle={styles.inputContainer}
            label="Short Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <TextInput
            containerStyle={styles.inputContainer}
            label="Amount"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="0"
          />
        </ScrollView>
        <View style={styles.actionsContainer}>
          <Button
            onPress={() =>
              createTransaction({
                category: category || 'others',
                description: description || '',
                amount: Number(amount) || 0,
                sourceWalletId,
                destinationWalletId,
              })
            }
            label="Create Transaction"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTransactionView;
