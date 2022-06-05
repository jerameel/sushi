import React, { useEffect, useState } from 'react';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { EditTransactionProps } from './props';
import { Back } from 'components/base/SVG';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';
import Picker from 'components/base/Picker';
import {
  formatCategory,
  getCategorySuggestions,
  toWalletOptions,
} from './transforms';

const TRANSACTION_TYPES: {
  label: string;
  value: 'IN' | 'OUT';
}[] = [
  {
    label: '-',
    value: 'OUT',
  },
  {
    label: '+',
    value: 'IN',
  },
];

const EditTransactionView = (props: EditTransactionProps) => {
  const { navigation, editTransaction, wallets, transactions, transaction } =
    props;
  const { styles, theme, colors } = useStyles();

  const walletOptions = toWalletOptions(wallets);

  const [category, setCategory] = useState(transaction.category);
  const [sourceWalletId, setSourceWalletId] = useState<string | null>(
    transaction.sourceWalletId,
  );
  const [destinationWalletId, setDestinationWalletId] = useState<string | null>(
    transaction.destinationWalletId,
  );
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(Math.abs(transaction.amount).toFixed(2));
  const [transactionType, setTransactionType] = useState<'IN' | 'OUT'>(
    transaction.amount > 0 ? 'IN' : 'OUT',
  );

  const categorySuggestions = getCategorySuggestions(transactions).filter(
    (suggestion) => suggestion.toUpperCase().includes(category.toUpperCase()),
  );

  useEffect(() => {
    if (category.toUpperCase() === 'TRANSFER') {
      setTransactionType('OUT');
    }
  }, [category]);

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
          Edit Transaction
        </Text>
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.contentScroll}>
          <TextInput
            containerStyle={styles.inputContainer}
            label="Category"
            value={category}
            onChangeText={(text) => setCategory(text)}
            theme={theme}
          />

          <View style={styles.categorySuggestionsContainer}>
            {categorySuggestions.map((categorySuggestion) => (
              <TouchableOpacity
                key={categorySuggestion}
                style={styles.categorySuggestionBadge}
                onPress={() => {
                  setCategory(categorySuggestion);
                }}>
                <Text
                  style={styles.categorySuggestionText}
                  variant="label"
                  theme={theme}>
                  {categorySuggestion}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Picker
            containerStyle={styles.inputContainer}
            label="Source Wallet"
            selectedValue={sourceWalletId || undefined}
            onSelect={(value) => setSourceWalletId(value)}
            options={walletOptions}
            theme={theme}
          />

          {category.toUpperCase() === 'TRANSFER' && (
            <Picker
              containerStyle={styles.inputContainer}
              label="Destination Wallet"
              selectedValue={destinationWalletId || undefined}
              onSelect={(value) => setDestinationWalletId(value)}
              options={walletOptions}
              theme={theme}
            />
          )}

          <TextInput
            containerStyle={styles.inputContainer}
            label="Short Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            theme={theme}
          />

          <TextInput
            containerStyle={styles.inputContainer}
            label="Amount"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="0"
            keyboardType="decimal-pad"
            onBlur={() => {
              setAmount((previousValue) =>
                (parseFloat(previousValue) || 0).toString(),
              );
            }}
            theme={theme}
          />

          {category.toUpperCase() !== 'TRANSFER' && (
            <View style={styles.transactionTypeContainer}>
              {TRANSACTION_TYPES.map(({ label, value }) => (
                <TouchableOpacity
                  key={value}
                  style={[
                    styles.transactionTypeBadge,
                    transactionType === value
                      ? styles.transactionTypeBadgeSelected
                      : {},
                  ]}
                  onPress={() => {
                    setTransactionType(value);
                  }}>
                  <Text
                    style={styles.transactionTypeText}
                    variant="label"
                    theme={theme}>
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
        <View style={styles.actionsContainer}>
          <Button
            onPress={() =>
              editTransaction({
                ...transaction,
                category: formatCategory(category || 'Others'),
                description: description || '',
                amount:
                  parseFloat(
                    `${transactionType === 'IN' ? '+' : '-'}${amount}`,
                  ) || 0,
                sourceWalletId: sourceWalletId || '',
                destinationWalletId,
              })
            }
            label="Update Transaction"
            theme={theme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditTransactionView;
