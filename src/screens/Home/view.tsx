import React from 'react';
import Text from 'components/base/Text';
import { ScrollView, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStyles from './styles';
import { HomeProps } from './props';
import WalletCard from 'components/module/WalletCard';
import { Add } from 'components/base/SVG';

const HomeView = (props: HomeProps) => {
  const { navigation, wallets } = props;
  const { styles, theme, colors } = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle={theme.base === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.content}>
        <View style={styles.walletsHeader}>
          <Text variant="subtitle">My Wallets</Text>
          <TouchableOpacity
            style={styles.addWalletAction}
            onPress={() => {
              navigation.navigate('EDIT_WALLET');
            }}>
            <Add fill={colors.PRIMARY_TEXT} width={24} height={24} />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.contentScroll}>
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
    </SafeAreaView>
  );
};

export default HomeView;
