import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/Home';
import CreateWalletScreen from 'screens/CreateWallet';
import CreateTransactionScreen from 'screens/CreateTransaction';
import WalletDetailsScreen from 'screens/WalletDetails';
import { MainStackParamList } from 'types/Route';
import TransactionDetailsScreen from './TransactionDetails';

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
    </MainStack.Navigator>
  );
};

export default Routes;
