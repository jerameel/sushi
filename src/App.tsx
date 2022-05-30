import 'react-native-get-random-values';
import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from 'screens/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, runSaga } from 'infrastracture';
import sagas from './store/sagas';

runSaga(sagas);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
