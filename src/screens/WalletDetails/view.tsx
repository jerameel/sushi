import React, { useReducer, useState } from 'react';
import numbro from 'numbro';
import sortBy from 'ramda/es/sortBy';
import reverse from 'ramda/es/reverse';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { WalletDetailsProps } from './props';
import { Back } from 'components/base/SVG';
import { Transaction } from 'store/transactions';
import TransactionCard from 'components/module/TransactionCard';

const WalletDetailsView = (props: WalletDetailsProps) => {
  const { navigation, wallet, transactions, wallets } = props;
  const { styles, theme, colors } = useStyles();

  const walletTransactions = Object.keys(transactions)
    .map((key) => transactions[key])
    .filter(
      (transaction) =>
        transaction.sourceWalletId === wallet.id ||
        transaction.destinationWalletId === wallet.id,
    );

  const balanceBreakdown = walletTransactions.reduce(
    (accum, transaction) => {
      if (transaction.destinationWalletId === wallet.id) {
        // reverse calculation because it is a transfer
        if (transaction.amount < 0) {
          return {
            income: accum.income + Math.abs(transaction.amount),
            expenses: accum.expenses,
          };
        } else if (transaction.amount > 0) {
          return {
            income: accum.income,
            expenses: accum.expenses + Math.abs(transaction.amount),
          };
        }
      } else {
        // normal calculation
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

  const currentBalance =
    wallet.initialAmount + balanceBreakdown.income - balanceBreakdown.expenses;

  const sortTransactionByDate = sortBy(
    (transaction: Transaction) => transaction.createdAt,
  );
  const sortedTransactionsArray = reverse(
    sortTransactionByDate(walletTransactions),
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
        <Text containerStyle={styles.headerTitleContainer} variant="title">
          Wallet Details
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.detailsCard}>
          <View style={styles.detailsCardRow}>
            <Text>{wallet.label}</Text>
            <Text variant="subtitle">
              {numbro(currentBalance).formatCurrency({
                mantissa: 2,
                spaceSeparated: true,
                thousandSeparated: true,
              })}
            </Text>
          </View>
          <View style={styles.detailsCardRow}>
            <Text variant="label">Initial Balance</Text>
            <Text variant="body">
              {numbro(wallet.initialAmount).formatCurrency({
                mantissa: 2,
                spaceSeparated: true,
                thousandSeparated: true,
              })}
            </Text>
          </View>
          <View style={styles.detailsCardRow}>
            <Text variant="label">Income</Text>
            <Text variant="body">
              {numbro(balanceBreakdown.income).formatCurrency({
                mantissa: 2,
                spaceSeparated: true,
                thousandSeparated: true,
              })}
            </Text>
          </View>
          <View style={styles.detailsCardRow}>
            <Text variant="label">Expenses</Text>
            <Text variant="body">
              {numbro(balanceBreakdown.expenses).formatCurrency({
                mantissa: 2,
                spaceSeparated: true,
                thousandSeparated: true,
              })}
            </Text>
          </View>
        </View>
        <View style={styles.transactionsContainer}>
          <ScrollView contentContainerStyle={styles.contentScroll}>
            {sortedTransactionsArray.map((transaction) => {
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
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletDetailsView;
