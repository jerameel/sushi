import React, { useEffect, useState } from 'react';
import { groupBy } from 'ramda';
import Text from 'components/base/Text';
import {
  View,
  StatusBar,
  TouchableOpacity,
  SectionList,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { InsightsProps } from './props';
import { Back } from 'components/base/SVG';
import { Transaction } from 'store/transactions';
import TextView from 'components/base/Text/view';
import { formatCurrency } from 'utils/formatCurrency';
import { formatDate } from 'utils/formatDate';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const InsightsView = (props: InsightsProps) => {
  const { navigation, wallets, transactions, language } = props;
  const { styles, theme, colors } = useStyles();

  const transactionsArray = Object.values(transactions);

  const groupByTransactionDay = groupBy((transaction: Transaction) =>
    formatDate(transaction.paidAt, 'dd MMM yyyy'),
  );

  const groupedByDayTransactions = groupByTransactionDay(transactionsArray);

  const dailyTransactionAmountArray = Object.keys(groupedByDayTransactions).map(
    (day) => {
      const incoming = groupedByDayTransactions[day].reduce(
        (accum, current) => {
          // Skip transfers on calculation and negative amount
          if (current.destinationWalletId || current.amount < 0) {
            return accum;
          }
          return accum + current.amount;
        },
        0,
      );
      const outgoing = groupedByDayTransactions[day].reduce(
        (accum, current) => {
          // Skip transfers on calculation and positive amount
          if (current.destinationWalletId || current.amount > 0) {
            return accum;
          }
          return accum + current.amount;
        },
        0,
      );

      return {
        day,
        incoming,
        outgoing,
      };
    },
  );

  const groupByCategoryName = groupBy(
    (transaction: Transaction) => transaction.category,
  );

  const groupedByCategoryTransactions = groupByCategoryName(transactionsArray);

  const summedCategoryArray = Object.keys(groupedByCategoryTransactions).map(
    (category) => {
      const transactionTotal = groupedByCategoryTransactions[category].reduce(
        (accum, current) => {
          return accum + current.amount;
        },
        0,
      );
      return {
        category,
        total: transactionTotal,
      };
    },
  );

  const totalTransfer =
    summedCategoryArray.find((c) => c.category === 'Transfer')?.total || null;

  const categories = summedCategoryArray.filter(
    (c) => c.category !== 'Transfer',
  );

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
          theme={theme}
          translationKey="INSIGHTS"
        />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.contentScroll}>
          {dailyTransactionAmountArray.length > 0 && (
            <View
              style={{
                backgroundColor: colors.AREA_HIGHLIGHT,
                padding: 16,
                borderRadius: 10,
                marginTop: 8,
                flexDirection: 'column',
              }}>
              <Text
                containerStyle={{ marginBottom: 8 }}
                variant="subtitle"
                translationKey="DEBIT"
              />

              <LineChart
                data={{
                  labels: dailyTransactionAmountArray.map((d) => d.day),
                  datasets: [
                    {
                      data: dailyTransactionAmountArray.map((d) => d.incoming),
                      color: () => colors.POSITIVE, // optional
                      strokeWidth: 2, // optional
                    },
                    // {
                    //   data: dailyTransactionAmountArray.map((d) => d.outgoing),
                    //   color: () => colors.NEGATIVE, // optional
                    //   strokeWidth: 2, // optional
                    // },
                  ],
                }}
                width={screenWidth - 64}
                height={220}
                withVerticalLines={false}
                withHorizontalLines={false}
                withOuterLines={true}
                chartConfig={{
                  backgroundGradientFrom: colors.AREA_HIGHLIGHT,
                  backgroundGradientTo: colors.AREA_HIGHLIGHT,
                  color: (opacity = 1) => colors.SECONDARY_TEXT,
                }}
              />
            </View>
          )}
          {dailyTransactionAmountArray.length > 0 && (
            <View
              style={{
                backgroundColor: colors.AREA_HIGHLIGHT,
                padding: 16,
                borderRadius: 10,
                marginTop: 8,
                flexDirection: 'column',
              }}>
              <Text
                containerStyle={{ marginBottom: 8 }}
                variant="subtitle"
                translationKey="CREDIT"
              />

              <LineChart
                data={{
                  labels: dailyTransactionAmountArray.map((d) => d.day),
                  datasets: [
                    {
                      data: dailyTransactionAmountArray.map((d) => d.outgoing),
                      color: () => colors.NEGATIVE, // optional
                      strokeWidth: 2, // optional
                    },
                    // {
                    //   data: dailyTransactionAmountArray.map((d) => d.outgoing),
                    //   color: () => colors.NEGATIVE, // optional
                    //   strokeWidth: 2, // optional
                    // },
                  ],
                }}
                width={screenWidth - 64}
                height={220}
                withVerticalLines={false}
                withHorizontalLines={false}
                withOuterLines={true}
                chartConfig={{
                  backgroundGradientFrom: colors.AREA_HIGHLIGHT,
                  backgroundGradientTo: colors.AREA_HIGHLIGHT,
                  color: (opacity = 1) => colors.SECONDARY_TEXT,
                }}
              />
            </View>
          )}
          {totalTransfer !== null && (
            <View
              style={{
                backgroundColor: colors.AREA_HIGHLIGHT,
                padding: 16,
                borderRadius: 10,
                marginTop: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextView variant="subtitle" theme={theme}>
                Total Transfers
              </TextView>
              <TextView variant="body" theme={theme}>
                {formatCurrency(totalTransfer)}
              </TextView>
            </View>
          )}
          {categories.length > 0 && (
            <View
              style={{
                backgroundColor: colors.AREA_HIGHLIGHT,
                padding: 16,
                borderRadius: 10,
                marginTop: 8,
              }}>
              <>
                <TextView variant="subtitle" theme={theme}>
                  Categories
                </TextView>
                {categories.map((c) => (
                  <View
                    key={c.category}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TextView variant="body" theme={theme}>
                      {c.category}
                    </TextView>
                    <TextView variant="body" theme={theme}>
                      {formatCurrency(c.total)}
                    </TextView>
                  </View>
                ))}
              </>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default InsightsView;
