import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { createWalletAction, Wallet } from 'store/wallets';

import { CreateWalletPrivateProps, CreateWalletPublicProps } from './props';
import CreateWalletView from './view';

const CreateWalletContainer = (props: CreateWalletPublicProps) => {
  const dispatch = useDispatch();
  const createWallet = (payload: Omit<Wallet, 'id'>) => {
    dispatch(createWalletAction(payload));
    props.navigation.goBack();
  };

  const generatedProps: CreateWalletPrivateProps = {
    createWallet,
  };

  return <CreateWalletView {...props} {...generatedProps} />;
};

export default CreateWalletContainer;
