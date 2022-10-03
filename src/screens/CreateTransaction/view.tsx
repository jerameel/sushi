import React, { useEffect, useState } from 'react';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { CreateTransactionProps } from './props';
import { Back } from 'components/base/SVG';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';
import Picker from 'components/base/Picker';
import {
  formatCategory,
  getCategorySuggestions,
  getWalletSuggestions,
  toWalletOptions,
} from './transforms';
import SmartText from 'components/smart/SmartText';
import SmartTextInput from 'components/smart/SmartTextInput';
import SmartPicker from 'components/smart/SmartPicker';
import SmartButton from 'components/smart/SmartButton';
import DatePicker from 'components/module/DatePicker';
import SmartDatePicker from 'components/smart/SmartDatePicker';
import TimePicker from 'components/module/TimePicker';
import SmartTimePicker from 'components/smart/SmartTimePicker';

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

const CreateTransactionView = (props: CreateTransactionProps) => {
  const { navigation, createTransaction, wallets, transactions } = props;
  const { styles, theme, colors } = useStyles();

  const walletOptions = toWalletOptions(wallets);

  const [category, setCategory] = useState('');
  const [sourceWalletId, setSourceWalletId] = useState<string | null>(null);
  const [destinationWalletId, setDestinationWalletId] = useState<string | null>(
    null,
  );
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState<'IN' | 'OUT'>('OUT');
  const [paidAt, setPaidAt] = useState<Date | null>(new Date());

  const categorySuggestions = getCategorySuggestions(transactions).filter(
    (suggestion) => suggestion.toUpperCase().includes(category.toUpperCase()),
  );

  const walletIdSuggestions = getWalletSuggestions(transactions);

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
        <SmartText
          variant="title"
          style={styles.headerTitleContainer}
          theme={theme}
          translationKey="NEW_TRANSACTION"
        />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.contentScroll}>
          <SmartDatePicker
            containerStyle={styles.inputContainer}
            labelTranslationKey="TRANSACTION_DATE"
            startDate={paidAt}
            setStartDate={setPaidAt}
            defaultLabelTranslationKey="TRANSACTION_DATE"
            hideActionButton
            theme={theme}
          />
          <SmartTimePicker
            containerStyle={styles.inputContainer}
            labelTranslationKey="TRANSACTION_TIME"
            selectedTime={paidAt}
            setSelectedTime={setPaidAt}
          />

          <SmartTextInput
            containerStyle={styles.inputContainer}
            translationKey="CATEGORY"
            value={category}
            onChangeText={(text) => setCategory(text)}
            theme={theme}
          />

          <View style={styles.suggestionsContainer}>
            {categorySuggestions.map((categorySuggestion) => (
              <TouchableOpacity
                key={categorySuggestion}
                style={styles.suggestionsBadge}
                onPress={() => {
                  setCategory(categorySuggestion);
                }}>
                {categorySuggestion.toUpperCase() === 'TRANSFER' ? (
                  <SmartText
                    variant="label"
                    style={styles.suggestionText}
                    theme={theme}
                    translationKey="TRANSFER"
                  />
                ) : (
                  <Text
                    style={styles.suggestionText}
                    variant="label"
                    theme={theme}>
                    {categorySuggestion}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>

          <SmartPicker
            containerStyle={styles.inputContainer}
            translationKey="SOURCE_ACCOUNT"
            selectedValue={sourceWalletId || undefined}
            onSelect={(value) => setSourceWalletId(value)}
            options={walletOptions}
            theme={theme}
          />

          <View style={styles.suggestionsContainer}>
            {walletIdSuggestions.map((id, index) => (
              <TouchableOpacity
                key={id}
                style={styles.suggestionsBadge}
                onPress={() => {
                  setSourceWalletId(id);
                }}>
                <Text
                  style={styles.suggestionText}
                  variant="label"
                  theme={theme}>
                  {wallets[id].label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {category.toUpperCase() === 'TRANSFER' && (
            <SmartPicker
              containerStyle={styles.inputContainer}
              translationKey="DESTINATION_ACCOUNT"
              selectedValue={destinationWalletId || undefined}
              onSelect={(value) => setDestinationWalletId(value)}
              options={walletOptions}
              theme={theme}
            />
          )}

          <SmartTextInput
            containerStyle={styles.inputContainer}
            translationKey="SHORT_DESCRIPTION"
            value={description}
            onChangeText={(text) => setDescription(text)}
            theme={theme}
          />

          <SmartTextInput
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

          <View style={styles.spacer} />
        </ScrollView>
        <View style={styles.actionsContainer}>
          <SmartButton
            onPress={() =>
              createTransaction({
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
            translationKey="CREATE_TRANSACTION"
            theme={theme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTransactionView;
