import React from 'react';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { HomeProps } from './props';
import WalletCard from 'components/module/WalletCard';
import { Add } from 'components/base/SVG';
import TransactionCard from 'components/module/TransactionCard';

const SubHeader = (props: { onPressAdd: () => void; label: string }) => {
  const { styles, theme, colors } = useStyles();
  return (
    <View style={styles.contentHeader}>
      <Text variant="subtitle">{props.label}</Text>
      <TouchableOpacity
        style={styles.contentHeaderAction}
        onPress={props.onPressAdd}>
        <Add fill={colors.PRIMARY_TEXT} width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

const HomeView = (props: HomeProps) => {
  const { navigation, wallets, transactions } = props;
  const { styles, theme, colors } = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle={theme.base === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.content}>
        <View>
          <SubHeader
            label="My Wallets"
            onPressAdd={() => navigation.navigate('CREATE_WALLET')}
          />
          <View style={styles.walletsScrollContainer}>
            <ScrollView
              contentContainerStyle={styles.contentScroll}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {Object.keys(wallets).map((key) => {
                const wallet = wallets[key];
                return (
                  <WalletCard
                    containerStyle={styles.walletCard}
                    key={key}
                    label={wallet.label}
                    balance={wallet.initialAmount}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>

        <View style={styles.transactionsContainer}>
          <SubHeader
            label="Transactions"
            onPressAdd={() => navigation.navigate('CREATE_TRANSACTION')}
          />
          <ScrollView contentContainerStyle={styles.contentScroll}>
            {Object.keys(transactions).map((key) => {
              const transaction = transactions[key];
              return (
                <TransactionCard
                  containerStyle={styles.transactionCard}
                  key={key}
                  category={transaction.category}
                  amount={transaction.amount}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
