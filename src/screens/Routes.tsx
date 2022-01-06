import SplashScreen from 'react-native-splash-screen';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from 'types/Route';
import HomeScreen from './Home';
import CreateWalletScreen from './CreateWallet';
import CreateTransactionScreen from './CreateTransaction';
import WalletDetailsScreen from './WalletDetails';
import TransactionDetailsScreen from './TransactionDetails';
import SettingsScreen from './Settings';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Routes = () => {
  useEffect(() => {
    SplashScreen.hide();
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
        name="CREATE_WALLET"
        component={CreateWalletScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="CREATE_TRANSACTION"
        component={CreateTransactionScreen}
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
