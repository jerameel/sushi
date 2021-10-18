import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { createWalletAction, Wallet } from 'store/wallets';

import { WalletDetailsPrivateProps, WalletDetailsPublicProps } from './props';
import WalletDetailsView from './view';

const WalletDetailsContainer = (props: WalletDetailsPublicProps) => {
  const walletId = props.route.params?.walletId || '';

  const wallets = useSelector((state: RootState) => state.wallets);
  const transactions = useSelector((state: RootState) => state.transactions);
  const wallet = wallets[walletId];

  if (!wallet) {
    props.navigation.goBack();
  }

  const generatedProps: WalletDetailsPrivateProps = {
    wallet,
    wallets,
    transactions,
  };

  return <WalletDetailsView {...props} {...generatedProps} />;
};

export default WalletDetailsContainer;
