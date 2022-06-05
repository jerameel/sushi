import React from 'react';
import { useDispatch } from 'react-redux';
import { createWalletAction, CreateWalletInput } from 'store/wallets';

import { CreateWalletPrivateProps, CreateWalletPublicProps } from './props';
import CreateWalletView from './view';

const CreateWalletContainer = (props: CreateWalletPublicProps) => {
  const dispatch = useDispatch();
  const createWallet = (payload: CreateWalletInput) => {
    dispatch(createWalletAction(payload));
    props.navigation.goBack();
  };

  const generatedProps: CreateWalletPrivateProps = {
    createWallet,
  };

  return <CreateWalletView {...props} {...generatedProps} />;
};

export default CreateWalletContainer;
