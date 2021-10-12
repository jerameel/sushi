import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { HomePrivateProps, HomePublicProps } from './props';
import HomeView from './view';

const HomeContainer = (props: HomePublicProps) => {
  const wallets = useSelector((state: RootState) => state.wallets);

  const generatedProps: HomePrivateProps = {
    wallets,
  };

  return <HomeView {...props} {...generatedProps} />;
};

export default HomeContainer;
