import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { Wallet } from 'store/wallets';
import { setLanguageAction } from 'store/currency';

import { SettingsPrivateProps, SettingsPublicProps } from './props';
import SettingsView from './view';
import { setThemeAction, THEME_OPTION } from 'store/theme';

const SettingsContainer = (props: SettingsPublicProps) => {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme);
  const baseTheme = theme.base;
  const currency = useSelector((state: RootState) => state.currency);
  const currencyLanguage = currency.language;

  const setCurrencyLanguage = (payload: string) => {
    dispatch(setLanguageAction(payload));
  };

  const setBaseTheme = (payload: THEME_OPTION) => {
    dispatch(setThemeAction(payload));
  };

  const generatedProps: SettingsPrivateProps = {
    baseTheme,
    setBaseTheme,
    setCurrencyLanguage,
    currencyLanguage,
  };

  return <SettingsView {...props} {...generatedProps} />;
};

export default SettingsContainer;
