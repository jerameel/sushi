import React, { useState } from 'react';
import sortBy from 'ramda/es/sortBy';
import reverse from 'ramda/es/reverse';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { WalletDetailsProps } from './props';
import { Back, Delete, Edit } from 'components/base/SVG';
import { Transaction } from 'store/transactions';
import TransactionCard from 'components/module/TransactionCard';
import AlertModal from 'components/module/AlertModal';
import { formatCurrency } from 'utils/formatCurrency';

const WalletDetailsView = (props: WalletDetailsProps) => {
  const { navigation, wallet, transactions, wallets, deleteWallet, language } =
    props;
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

  const [showDelete, setShowDelete] = useState(false);

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
        <Text
          containerStyle={styles.headerTitleContainer}
          variant="title"
          theme={theme}>
          Wallet Details
        </Text>
        <TouchableOpacity
          style={styles.headerRightAction}
          onPress={() => {
            navigation.navigate('EDIT_WALLET', {
              walletId: wallet.id,
            });
          }}>
          <Edit fill={colors.PRIMARY_TEXT} width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerRightAction}
          onPress={() => {
            setShowDelete(true);
          }}>
          <Delete fill={colors.PRIMARY_TEXT} width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.detailsCard}>
          <View style={styles.detailsCardRow}>
            <Text theme={theme}>{wallet.label}</Text>
            <Text variant="subtitle" theme={theme}>
              {formatCurrency(currentBalance, { language })}
            </Text>
          </View>
          <View style={styles.detailsCardRow}>
            <Text variant="label" theme={theme}>
              Initial Balance
            </Text>
            <Text variant="body" theme={theme}>
              {formatCurrency(wallet.initialAmount, { language })}
            </Text>
          </View>
          <View style={styles.detailsCardRow}>
            <Text variant="label" theme={theme}>
              Income
            </Text>
            <Text variant="body" theme={theme}>
              {formatCurrency(balanceBreakdown.income, { language })}
            </Text>
          </View>
          <View style={styles.detailsCardRow}>
            <Text variant="label" theme={theme}>
              Expenses
            </Text>
            <Text variant="body" theme={theme}>
              {formatCurrency(balanceBreakdown.expenses, { language })}
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
      </View>
      <AlertModal
        theme={theme}
        title="Delete Wallet?"
        description={`This will permanently delete the ${wallet.label} wallet including ${walletTransactions.length} linked transactions.`}
        visible={showDelete}
        actions={[
          {
            label: 'Keep',
            onPress: () => {
              setShowDelete(false);
            },
          },
          {
            label: 'Delete',
            onPress: () => {
              setShowDelete(false);
              deleteWallet();
            },
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default WalletDetailsView;
