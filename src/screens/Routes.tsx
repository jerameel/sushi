// import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditorScreen from 'screens/Editor';
import { MainStackParamList } from 'types/Route';
// import { MainTabParamList, MainStackParamList } from 'types/Route';
// import { Control, Device, Settings } from 'components/base/SVG';
// import { SVGProps } from 'components/base/SVG/SVG.props';
// import { COLORS } from 'theme';
// import { View } from 'react-native';
// import { useSelector } from 'react-redux';
// import { RootState } from 'store';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Routes = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <MainStack.Navigator initialRouteName="EDITOR">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="EDITOR"
        component={EditorScreen}
      />
    </MainStack.Navigator>
  );
};

export default Routes;
