import React, { useEffect, useState } from 'react';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { EditTransactionProps } from './props';
import { Back } from 'components/base/SVG';
import {
  formatCategory,
  getCategorySuggestions,
  toWalletOptions,
} from './transforms';
import TextView from 'components/base/Text/view';
import TextInput from 'components/base/TextInput';
import Picker from 'components/base/Picker';
import Button from 'components/base/Button';
import DatePicker from 'components/module/DatePicker';
import TimePicker from 'components/module/TimePicker';

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

  const [paidAt, setPaidAt] = useState<Date | null>(
    new Date(transaction.paidAt),
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
          variant="title"
          style={styles.headerTitleContainer}
          theme={theme}
          translationKey="EDIT_TRANSACTION"
        />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.contentScroll}>
          <DatePicker
            containerStyle={styles.inputContainer}
            labelTranslationKey="TRANSACTION_DATE"
            startDate={paidAt}
            setStartDate={setPaidAt}
            defaultLabelTranslationKey="TRANSACTION_DATE"
            hideActionButton
            theme={theme}
          />
          <TimePicker
            containerStyle={styles.inputContainer}
            labelTranslationKey="TRANSACTION_TIME"
            selectedTime={paidAt}
            setSelectedTime={setPaidAt}
          />
          <TextInput
            containerStyle={styles.inputContainer}
            translationKey="CATEGORY"
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
                {categorySuggestion.toUpperCase() === 'TRANSFER' ? (
                  <Text
                    variant="label"
                    style={styles.categorySuggestionText}
                    theme={theme}
                    translationKey="TRANSFER"
                  />
                ) : (
                  <TextView
                    style={styles.categorySuggestionText}
                    variant="label"
                    theme={theme}>
                    {categorySuggestion}
                  </TextView>
                )}
              </TouchableOpacity>
            ))}
          </View>

          <Picker
            containerStyle={styles.inputContainer}
            translationKey="SOURCE_ACCOUNT"
            selectedValue={sourceWalletId || undefined}
            onSelect={(value) => setSourceWalletId(value)}
            options={walletOptions}
            theme={theme}
          />

          {category.toUpperCase() === 'TRANSFER' && (
            <Picker
              containerStyle={styles.inputContainer}
              translationKey="DESTINATION_ACCOUNT"
              selectedValue={destinationWalletId || undefined}
              onSelect={(value) => setDestinationWalletId(value)}
              options={walletOptions}
              theme={theme}
            />
          )}

          <TextInput
            containerStyle={styles.inputContainer}
            translationKey="SHORT_DESCRIPTION"
            value={description}
            onChangeText={(text) => setDescription(text)}
            theme={theme}
          />

          <TextInput
            containerStyle={styles.inputContainer}
            translationKey="AMOUNT"
            value={amount}
            maxLength={14}
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
                  <TextView
                    style={styles.transactionTypeText}
                    variant="label"
                    theme={theme}>
                    {label}
                  </TextView>
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
                paidAt: (paidAt || new Date()).toISOString(),
              })
            }
            translationKey="UPDATE_TRANSACTION"
            theme={theme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditTransactionView;
