import React from 'react';
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
import { Settings } from 'components/base/SVG';
import TransactionCard from 'components/module/TransactionCard';
import BalanceBreakdown from 'components/module/BalanceBreakdown';
import { Transaction } from 'store/transactions';
import { formatCurrency } from 'utils/formatCurrency';
import SmartText from 'components/smart/SmartText';
import { Translation } from 'types/Translation';
import Button from 'components/base/Button';
import { groupBy } from 'ramda';
import { formatDate } from 'utils/formatDate';

const SubHeader = (props: {
  label: keyof Translation;
  action?: () => void;
  actionText?: keyof Translation;
}) => {
  const { styles, theme } = useStyles();
  return (
    <View style={styles.contentHeader}>
      <SmartText
        variant="subtitle"
        theme={theme}
        translationKey={props.label}
      />

      {!!props.actionText && (
        <TouchableOpacity onPress={props.action}>
          <SmartText
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

  const sortTransactionByDate = sortBy(
    (transaction: Transaction) => transaction.paidAt,
  );
  const sortedTransactionsArray = reverse(
    sortTransactionByDate(
      Object.keys(transactions).map((key) => transactions[key]),
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
          <Text variant="title" theme={theme}>
            {formatCurrency(currentBalance, { language })}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.headerActionContainer}
          onPress={() => {
            navigation.navigate('SETTINGS');
          }}>
          <Settings width={24} height={24} fill={colors.PRIMARY_TEXT} />
        </TouchableOpacity>
      </View>
      <BalanceBreakdown
        containerStyle={styles.breakdownContainer}
        income={balanceBreakdown.income}
        expenses={balanceBreakdown.expenses}
        theme={theme}
        language={language}
      />
      <View style={styles.content}>
        <View>
          <SubHeader label="MY_ACCOUNTS" />
          <View style={styles.walletsScrollContainer}>
            <ScrollView
              contentContainerStyle={styles.contentScroll}
              horizontal
              showsHorizontalScrollIndicator={false}>
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
              {walletsArray.map((wallet) => {
                const walletTransactions = Object.keys(transactions)
                  .map((key) => transactions[key])
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
              <Text variant="subtitle" theme={theme} style={styles.dateText}>
                {title}
              </Text>
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
