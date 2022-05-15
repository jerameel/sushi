import SplashScreen from 'react-native-splash-screen';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from 'types/Route';
import HomeScreen from './Home';
import CreateWalletScreen from './CreateWallet';
import EditWalletScreen from './EditWallet';
import CreateTransactionScreen from './CreateTransaction';
import EditTransactionScreen from './EditTransaction';
import WalletDetailsScreen from './WalletDetails';
import TransactionDetailsScreen from './TransactionDetails';
import SettingsScreen from './Settings';
import TransactionsScreen from './Transactions';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);
  return (
    <MainStack.Navigator initialRouteName="HOME">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="HOME"
        component={HomeScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="TRANSACTIONS"
        component={TransactionsScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="CREATE_WALLET"
        component={CreateWalletScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="EDIT_WALLET"
        component={EditWalletScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="CREATE_TRANSACTION"
        component={CreateTransactionScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="EDIT_TRANSACTION"
        component={EditTransactionScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="WALLET_DETAILS"
        component={WalletDetailsScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="TRANSACTION_DETAILS"
        component={TransactionDetailsScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="SETTINGS"
        component={SettingsScreen}
      />
    </MainStack.Navigator>
  );
};

export default Routes;
