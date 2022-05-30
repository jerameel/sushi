import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { createWalletAction, deleteWalletAction, Wallet } from 'store/wallets';

import { WalletDetailsPrivateProps, WalletDetailsPublicProps } from './props';
import WalletDetailsView from './view';

const WalletDetailsContainer = (props: WalletDetailsPublicProps) => {
  const dispatch = useDispatch();
  const walletId = props.route.params?.walletId || '';
  const language = useSelector((state: RootState) => state.currency.language);
  const wallets = useSelector((state: RootState) => state.wallets);
  const transactions = useSelector((state: RootState) => state.transactions);
  const wallet = wallets[walletId];

  if (!wallet) {
    props.navigation.goBack();
  }

  const deleteWallet = () => {
    dispatch(deleteWalletAction(wallet.id));
    props.navigation.goBack();
  };

  const generatedProps: WalletDetailsPrivateProps = {
    wallet,
    wallets,
    transactions,
    deleteWallet,
    language,
  };

  return <WalletDetailsView {...props} {...generatedProps} />;
};

export default WalletDetailsContainer;
