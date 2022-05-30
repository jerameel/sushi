import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { HomePrivateProps, HomePublicProps } from './props';
import HomeView from './view';

const HomeContainer = (props: HomePublicProps) => {
  const language = useSelector((state: RootState) => state.currency.language);
  const wallets = useSelector((state: RootState) => state.wallets);
  const transactions = useSelector((state: RootState) => state.transactions);

  const generatedProps: HomePrivateProps = {
    wallets,
    transactions,
    language,
  };

  return <HomeView {...props} {...generatedProps} />;
};

export default HomeContainer;
