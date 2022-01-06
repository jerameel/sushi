import 'react-native-get-random-values';
import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from 'screens/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, runSaga } from 'infrastracture';
import sagas from './store/sagas';
import { RootState } from 'store';
import numbro from 'numbro';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

runSaga(sagas);

const CurrencyHandler = () => {
  const currency = useSelector((state: RootState) => state.currency);
  const [currentCurrencyLanguage, setCurrentCurrencyLanguage] = useState('');

  useEffect(() => {
    if (currentCurrencyLanguage !== currency.language) {
      if (currentCurrencyLanguage !== '') {
        SplashScreen.show();
      }
      numbro.setLanguage(currency.language);
      setCurrentCurrencyLanguage(currency.language);
    }
  }, [currency, currentCurrencyLanguage]);

  if (currentCurrencyLanguage === currency.language) {
    return <Routes />;
  }
  return <View />;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <CurrencyHandler />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
