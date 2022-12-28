import React, { useState } from 'react';
import sortBy from 'ramda/es/sortBy';
import reverse from 'ramda/es/reverse';
import Text from 'components/base/Text';
import {
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { HomeProps } from './props';
import WalletCard from 'components/module/WalletCard';
import { DownLeft, Settings, UpRight } from 'components/base/SVG';
import TransactionCard from 'components/module/TransactionCard';
import { Transaction, Transactions } from 'store/transactions';
import { formatCurrency } from 'utils/formatCurrency';
import TextView from 'components/base/Text/view';
import { Translation } from 'types/Translation';
import Button from 'components/base/Button';
import { groupBy, pickBy } from 'ramda';
import { formatDate } from 'utils/formatDate';
import Chip from 'components/base/Chip';
import useTranslationKey from 'utils/hooks/useTranslationKey';

const SubHeader = (props: {
  label: keyof Translation;
  action?: () => void;
  actionText?: keyof Translation;
}) => {
  const { styles, theme } = useStyles();
  return (
    <View style={styles.contentHeader}>
      <Text variant="subtitle" theme={theme} translationKey={props.label} />

      {!!props.actionText && (
        <TouchableOpacity onPress={props.action}>
          <Text
            variant="label"
            style={styles.contentHeaderAction}
            theme={theme}
            translationKey={props.actionText}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const HomeView = (props: HomeProps) => {
  const { navigation, wallets, transactions, language } = props;
  const { styles, theme, colors } = useStyles();

  const TEXT_ALL = useTranslationKey('ALL');
  const TEXT_DEBIT = useTranslationKey('DEBIT');
  const TEXT_CREDIT = useTranslationKey('CREDIT');

  const [filter, setFilter] = useState({
    mode: 'ALL',
  });

  const filteredTransactionRecord: Transactions = pickBy((v: Transaction) => {
    // ignore transfers on calculation
    if (filter.mode === 'IN') {
      return v.amount > 0 && !v.destinationWalletId;
    }

    if (filter.mode === 'OUT') {
      return v.amount < 0 && !v.destinationWalletId;
    }

    return true;
  }, transactions);

  const sortTransactionByDate = sortBy(
    (transaction: Transaction) => transaction.paidAt,
  );
  const sortedTransactionsArray = reverse(
    sortTransactionByDate(
      Object.keys(filteredTransactionRecord).map(
        (key) => filteredTransactionRecord[key],
      ),
    ),
  );

  const groupByDate = groupBy((transaction: Transaction) =>
    formatDate(transaction.paidAt, 'MMMM d yyyy'),
  );

  const groupedTransactionsArray = Object.entries(
    groupByDate(sortedTransactionsArray),
  ).map(([title, data]) => ({ title, data }));

  const recentTransactions = groupedTransactionsArray.slice(0, 3);

  const balanceBreakdown = sortedTransactionsArray.reduce(
    (accum, transaction) => {
      // ignore transfers on calculation
      if (!transaction.destinationWalletId) {
        if (transaction.amount > 0) {
          return {
            income: accum.income + Math.abs(transaction.amount),
            expenses: accum.expenses,
          };
        } else if (transaction.amount < 0) {
          return {
            income: accum.income,
            expenses: accum.expenses + Math.abs(transaction.amount),
          };
        }
      }
      return {
        income: accum.income,
        expenses: accum.expenses,
      };
    },
    {
      income: 0,
      expenses: 0,
    },
  );

  const walletsArray = Object.keys(wallets).map((key) => wallets[key]);
  const totalInitialBalance = walletsArray.reduce((accum, wallet) => {
    return accum + wallet.initialAmount;
  }, 0);
  const currentBalance =
    totalInitialBalance + balanceBreakdown.income - balanceBreakdown.expenses;

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
        <View style={styles.headerActionContainer} />
        <View style={styles.balanceContainer}>
          <TextView variant="title" theme={theme}>
            {formatCurrency(currentBalance, { language })}
          </TextView>
        </View>
        <TouchableOpacity
          style={styles.headerActionContainer}
          onPress={() => {
            navigation.navigate('SETTINGS');
          }}>
          <Settings width={24} height={24} fill={colors.PRIMARY_TEXT} />
        </TouchableOpacity>
      </View>
      <View style={styles.chipFilterContainer}>
        <Chip
          label={TEXT_ALL}
          selected={filter.mode === 'ALL'}
          onPress={() => setFilter({ mode: 'ALL' })}
        />
        <Chip
          label={TEXT_DEBIT}
          selected={filter.mode === 'IN'}
          onPress={() => setFilter({ mode: 'IN' })}
          icon={<DownLeft fill={colors.POSITIVE} width={16} height={16} />}
        />
        <Chip
          label={TEXT_CREDIT}
          selected={filter.mode === 'OUT'}
          onPress={() => setFilter({ mode: 'OUT' })}
          icon={<UpRight fill={colors.NEGATIVE} width={16} height={16} />}
        />
      </View>
      {/* <BalanceBreakdown
        containerStyle={styles.breakdownContainer}
        income={balanceBreakdown.income}
        expenses={balanceBreakdown.expenses}
        theme={theme}
        language={language}
      /> */}
      <View style={styles.content}>
        <View>
          <SubHeader label="MY_ACCOUNTS" />
          <View style={styles.walletsScrollContainer}>
            <ScrollView
              contentContainerStyle={styles.contentScroll}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {walletsArray.map((wallet) => {
                const walletTransactions = Object.keys(
                  filteredTransactionRecord,
                )
                  .map((key) => filteredTransactionRecord[key])
                  .filter(
                    (transaction) =>
                      transaction.sourceWalletId === wallet.id ||
                      transaction.destinationWalletId === wallet.id,
                  );
                const totalTransactionAmount = walletTransactions.reduce(
                  (currentTotal: number, transaction) => {
                    if (transaction.destinationWalletId === wallet.id) {
                      return currentTotal + -transaction.amount;
                    }
                    return currentTotal + transaction.amount;
                  },
                  0,
                );

                const currentWalletBalance =
                  wallet.initialAmount + totalTransactionAmount;
                return (
                  <WalletCard
                    containerStyle={styles.walletCard}
                    key={wallet.id}
                    label={wallet.label}
                    balance={currentWalletBalance}
                    onPress={() =>
                      navigation.navigate('WALLET_DETAILS', {
                        walletId: wallet.id,
                      })
                    }
                    theme={theme}
                    language={language}
                  />
                );
              })}

              <WalletCard
                containerStyle={styles.walletCard}
                key={'create_wallet'}
                label={''}
                balance={0}
                onPress={() => navigation.navigate('CREATE_WALLET')}
                template
                theme={theme}
                language={language}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.transactionsContainer}>
          <SubHeader
            label="RECENT_TRANSACTIONS"
            actionText="SHOW_ALL"
            action={() => {
              navigation.navigate('TRANSACTIONS');
            }}
          />
          <SectionList
            contentContainerStyle={styles.contentScroll}
            sections={recentTransactions}
            keyExtractor={(item) => item.id}
            renderSectionHeader={({ section: { title } }) => (
              <TextView
                variant="subtitle"
                theme={theme}
                style={styles.dateText}>
                {title}
              </TextView>
            )}
            renderItem={({ item }) => renderTransaction({ item: item })}
          />
        </View>

        <View style={styles.actionsContainer}>
          <Button
            outline
            onPress={() => navigation.navigate('CREATE_TRANSACTION')}
            translationKey="NEW_TRANSACTION"
            theme={theme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
