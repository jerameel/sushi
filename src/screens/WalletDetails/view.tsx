import React, { useState } from 'react';
import Text from 'components/base/Text';
import { View, StatusBar, TouchableOpacity, SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { WalletDetailsProps } from './props';
import { Back, Delete, Edit } from 'components/base/SVG';
import { Transaction } from 'store/transactions';
import TransactionCard from 'components/module/TransactionCard';
import AlertModal from 'components/module/AlertModal';
import { formatCurrency } from 'utils/formatCurrency';
import TextView from 'components/base/Text/view';
import useFilteredTransactions from 'utils/hooks/useFilteredTransactions';
import FilterButton from 'components/module/FilterButton';

const WalletDetailsView = (props: WalletDetailsProps) => {
  const { navigation, wallet, wallets, deleteWallet, language } = props;
  const { styles, theme, colors } = useStyles();

  const { filteredTransactions, dailyFilteredTransactions } =
    useFilteredTransactions({
      accountId: wallet.id,
    });

  const walletTransactions = filteredTransactions.filter(
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

  const [showDelete, setShowDelete] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle={colors.STATUS_BAR}
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
          theme={theme}
          translationKey="ACCOUNT_DETAILS"
        />
        <FilterButton
          onPress={() => {
            navigation.navigate('FILTERS');
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.detailsCard}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
              borderBottomWidth: 1,
              borderBottomColor: colors.DIVIDER,
            }}>
            <TextView theme={theme} variant="subtitle">
              {wallet.label}
            </TextView>
            <View style={{ flexDirection: 'row' }}>
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
          </View>
          <View style={styles.detailsCardRow}>
            <Text
              variant="label"
              theme={theme}
              translationKey="CURRENT_BALANCE"
            />
            <TextView variant="subtitle" theme={theme}>
              {formatCurrency(currentBalance, { language })}
            </TextView>
          </View>
          <View style={styles.detailsCardRow}>
            <Text
              variant="label"
              style={{ color: colors.SECONDARY_TEXT }}
              theme={theme}
              translationKey="INITIAL_BALANCE"
            />
            <TextView variant="body" theme={theme}>
              {formatCurrency(wallet.initialAmount, { language })}
            </TextView>
          </View>
          <View style={styles.detailsCardRow}>
            <Text
              variant="label"
              theme={theme}
              style={{ color: colors.SECONDARY_TEXT }}
              translationKey={'DEBIT'}
            />
            <TextView variant="body" theme={theme}>
              {formatCurrency(balanceBreakdown.income, { language })}
            </TextView>
          </View>
          <View style={styles.detailsCardRow}>
            <Text
              variant="label"
              theme={theme}
              style={{ color: colors.SECONDARY_TEXT }}
              translationKey={'CREDIT'}
            />
            <TextView variant="body" theme={theme}>
              {formatCurrency(balanceBreakdown.expenses, { language })}
            </TextView>
          </View>
        </View>
        <View style={styles.transactionsContainer}>
          <SectionList
            contentContainerStyle={styles.contentScroll}
            sections={dailyFilteredTransactions}
            keyExtractor={(item) => item.id}
            renderSectionHeader={({ section: { day } }) => (
              <TextView
                variant="subtitle"
                theme={theme}
                style={styles.dateText}>
                {day}
              </TextView>
            )}
            renderItem={({ item }) => renderTransaction({ item: item })}
          />
        </View>
      </View>
      <AlertModal
        titleTranslationKey="DELETE_ACCOUNT"
        descriptionTranslationKey="DELETE_ACCOUNT_INFO"
        descriptionReplacementRecord={{
          accountName: wallet.label,
          transactionCount: walletTransactions.length.toString(),
        }}
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
