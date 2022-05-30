import React from 'react';
import numbro from 'numbro';
import sortBy from 'ramda/es/sortBy';
import reverse from 'ramda/es/reverse';
import Text from 'components/base/Text';
import {
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { TransactionsProps } from './props';
import { Add, Back, Settings } from 'components/base/SVG';
import TransactionCard from 'components/module/TransactionCard';
import { Transaction } from 'store/transactions';
import Button from 'components/base/Button';

const TransactionsView = (props: TransactionsProps) => {
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
        <Text
          containerStyle={styles.headerTitleContainer}
          variant="title"
          theme={theme}>
          Transactions
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.transactionsContainer}>
          <FlatList
            contentContainerStyle={styles.contentScroll}
            data={sortedTransactionsArray}
            renderItem={renderTransaction}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionsView;
