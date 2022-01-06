import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { Wallet } from 'store/wallets';
import { setLanguageAction } from 'store/currency';

import { SettingsPrivateProps, SettingsPublicProps } from './props';
import SettingsView from './view';

const SettingsContainer = (props: SettingsPublicProps) => {
  const dispatch = useDispatch();

  const currency = useSelector((state: RootState) => state.currency);
  const currencyLanguage = currency.language;

  const setCurrencyLanguage = (payload: string) => {
    dispatch(setLanguageAction(payload));
  };

  const generatedProps: SettingsPrivateProps = {
    setCurrencyLanguage,
    currencyLanguage,
  };

  return <SettingsView {...props} {...generatedProps} />;
};

export default SettingsContainer;
