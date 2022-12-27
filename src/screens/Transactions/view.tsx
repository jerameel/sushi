import React, { useEffect, useState } from 'react';
import { allPass, partial, sortBy, reverse, groupBy } from 'ramda';
import Text from 'components/base/Text';
import { View, StatusBar, TouchableOpacity, SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { TransactionFilter, TransactionsProps } from './props';
import { Back } from 'components/base/SVG';
import TransactionCard from 'components/module/TransactionCard';
import { Transaction } from 'store/transactions';
import DatePicker from 'components/module/DatePicker';
import isWithinInterval from 'date-fns/isWithinInterval';
import { endOfDay, startOfDay } from 'date-fns';
import TextInput from 'components/base/TextInput';
import SmartText from 'components/smart/SmartText';
import SmartTextInput from 'components/smart/SmartTextInput';
import SmartDatePicker from 'components/smart/SmartDatePicker';
import Button from 'components/base/Button';
import { createCSV, recordToCSVString } from 'services/CSV';
import Info from 'components/module/Info';
import { formatDate } from 'utils/formatDate';

const isSearchTermMatch = (filter: TransactionFilter, t: Transaction) => {
  const filterSearchTerm = filter.searchTerm.toLowerCase();
  const description = t.description.toLowerCase();
  const category = t.category.toLowerCase();
  return `${category} ${description}`.includes(filterSearchTerm);
};

const isDateRangeMatch = (filter: TransactionFilter, t: Transaction) => {
  if (filter.startDate) {
    const startDate = startOfDay(filter.startDate);
    const endDate = endOfDay(
      filter.endDate ? filter.endDate : filter.startDate,
    );
    return isWithinInterval(new Date(t.paidAt), {
      start: startDate,
      end: endDate,
    });
  }

  // no filter
  return true;
};

const TransactionsView = (props: TransactionsProps) => {
  const { navigation, wallets, transactions, language } = props;
  const { styles, theme, colors } = useStyles();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [exportStatus, setExportStatus] = useState<
    'IDLE' | 'LOADING' | 'SUCCESS' | 'FAILED'
  >('IDLE');

  useEffect(() => {
    if (exportStatus === 'SUCCESS' || exportStatus === 'FAILED') {
      setTimeout(() => {
        setExportStatus('IDLE');
      }, 2000);
    }
  }, [exportStatus]);

  const filter: TransactionFilter = {
    startDate,
    endDate,
    searchTerm,
  };
  const sortTransactionByDate = sortBy(
    (transaction: Transaction) => transaction.paidAt,
  );
  const sortedTransactionsArray = reverse(
    sortTransactionByDate(
      Object.keys(transactions).map((key) => transactions[key]),
    ),
  );

  const filteredTransactionsArray = sortedTransactionsArray.filter(
    allPass([
      partial(isSearchTermMatch, [filter]),
      partial(isDateRangeMatch, [filter]),
    ]),
  );

  const groupByDate = groupBy((transaction: Transaction) =>
    formatDate(transaction.paidAt, 'MMMM d yyyy'),
  );

  const groupedTransactionsArray = Object.entries(
    groupByDate(filteredTransactionsArray),
  ).map(([title, data]) => ({ title, data }));

  const renderTransaction = ({ item: transaction }: { item: Transaction }) => {
    const sourceWallet = wallets[transaction.sourceWalletId];
    const destinationWallet = transaction.destinationWalletId
      ? wallets[transaction.destinationWalletId]
      : null;
    return (
      <TransactionCard
        containerStyle={styles.transactionCard}
        key={transaction.id}
        category={transaction.category}
        amount={transaction.amount}
        sourceWallet={sourceWallet.label}
        destinationWallet={destinationWallet?.label}
        paidAt={transaction.paidAt}
        onPress={() =>
          navigation.navigate('TRANSACTION_DETAILS', {
            transactionId: transaction.id,
          })
        }
        theme={theme}
        language={language}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle={theme.base === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerLeftAction}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back fill={colors.PRIMARY_TEXT} width={24} height={24} />
        </TouchableOpacity>
        <SmartText
          containerStyle={styles.headerTitleContainer}
          variant="title"
          theme={theme}
          translationKey="TRANSACTIONS"
        />
      </View>

      <View style={styles.content}>
        <View style={styles.transactionsContainer}>
          <SmartTextInput
            containerStyle={styles.textFieldContainer}
            translationKey="SEARCH"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            theme={theme}
          />
          <SmartDatePicker
            containerStyle={styles.textFieldContainer}
            labelTranslationKey="DATE_RANGE"
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            defaultLabelTranslationKey="SHOW_ALL"
            theme={theme}
          />

          <SectionList
            contentContainerStyle={styles.contentScroll}
            sections={groupedTransactionsArray}
            keyExtractor={(item) => item.id}
            renderSectionHeader={({ section: { title } }) => (
              <Text variant="subtitle" theme={theme} style={styles.dateText}>
                {title}
              </Text>
            )}
            renderItem={({ item }) => renderTransaction({ item: item })}
          />
        </View>
        {exportStatus === 'SUCCESS' ? (
          <Info label="Transactions has been successfully exported to sushi_transactions.csv" />
        ) : (
          <View style={styles.actionsContainer}>
            <Button
              outline
              onPress={() => {
                if (exportStatus !== 'LOADING') {
                  setExportStatus('LOADING');
                  createCSV(
                    'transactions',
                    recordToCSVString(filteredTransactionsArray),
                  )
                    .then(() => {
                      setExportStatus('SUCCESS');
                    })
                    .catch(() => setExportStatus('FAILED'));
                }
              }}
              translationKey="EXPORT"
              theme={theme}
              loading={exportStatus === 'LOADING'}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TransactionsView;
