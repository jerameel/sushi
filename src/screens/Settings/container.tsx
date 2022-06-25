import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { SettingsPrivateProps, SettingsPublicProps } from './props';
import SettingsView from './view';
import { setThemeAction, THEME_OPTION } from 'store/theme';
import { setLanguageAction } from 'store/currency';
import { setSelectedLanguageAction } from 'store/language';

const SettingsContainer = (props: SettingsPublicProps) => {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme);
  const baseTheme = theme.base;

  const setBaseTheme = (payload: THEME_OPTION) => {
    dispatch(setThemeAction(payload));
  };

  const currency = useSelector((state: RootState) => state.currency);
  const currencyLanguage = currency.language;

  const setCurrencyLanguage = (payload: string) => {
    dispatch(setLanguageAction(payload));
  };

  const language = useSelector((state: RootState) => state.language);
  const selectedLanguage = language.selected;

  const setSelectedLanguage = (payload: string) => {
    dispatch(setSelectedLanguageAction(payload));
  };

  const generatedProps: SettingsPrivateProps = {
    baseTheme,
    setBaseTheme,
    currencyLanguage,
    setCurrencyLanguage,
    selectedLanguage,
    setSelectedLanguage,
  };

  return <SettingsView {...props} {...generatedProps} />;
};

export default SettingsContainer;
