import React from 'react';
import sortBy from 'ramda/es/sortBy';
import reverse from 'ramda/es/reverse';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { HomeProps } from './props';
import WalletCard from 'components/module/WalletCard';
import { Add, Settings } from 'components/base/SVG';
import TransactionCard from 'components/module/TransactionCard';
import BalanceBreakdown from 'components/module/BalanceBreakdown';
import { Transaction } from 'store/transactions';
import Button from 'components/base/Button';
import { formatCurrency } from 'utils/formatCurrency';

const SubHeader = (props: {
  label: string;
  action?: () => void;
  actionText?: string;
}) => {
  const { styles, theme, colors } = useStyles();
  return (
    <View style={styles.contentHeader}>
      <Text variant="subtitle" theme={theme}>
        {props.label}
      </Text>

      {!!props.actionText && (
        <TouchableOpacity onPress={props.action}>
          <Text
            style={styles.contentHeaderAction}
            variant="label"
            theme={theme}>
            {props.actionText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const HomeView = (props: HomeProps) => {
  const { navigation, wallets, transactions, language } = props;
  const { styles, theme, colors } = useStyles();

  const sortTransactionByDate = sortBy(
    (transaction: Transaction) => transaction.createdAt,
  );
  const sortedTransactionsArray = reverse(
    sortTransactionByDate(
      Object.keys(transactions).map((key) => transactions[key]),
    ),
  );

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
          <SubHeader label="My Wallets" />
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
            label="Recent Transactions"
            actionText="See All"
            action={() => {
              navigation.navigate('TRANSACTIONS');
            }}
          />
          <ScrollView contentContainerStyle={styles.contentScroll}>
            {sortedTransactionsArray.slice(0, 5).map((transaction) => {
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
                  createdAt={transaction.createdAt}
                  onPress={() =>
                    navigation.navigate('TRANSACTION_DETAILS', {
                      transactionId: transaction.id,
                    })
                  }
                  theme={theme}
                  language={language}
                />
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.actionsContainer}>
          <Button
            outline
            onPress={() => navigation.navigate('CREATE_TRANSACTION')}
            label="New Transaction"
            theme={theme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
