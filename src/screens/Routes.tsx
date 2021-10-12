// import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/Home';
import EditWalletScreen from 'screens/EditWallet';
import { MainStackParamList } from 'types/Route';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Routes = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <MainStack.Navigator initialRouteName="HOME">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="HOME"
        component={HomeScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="EDIT_WALLET"
        component={EditWalletScreen}
      />
    </MainStack.Navigator>
  );
};

export default Routes;
