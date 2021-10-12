import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { createWalletAction } from 'store/wallets';

import { EditWalletPrivateProps, EditWalletPublicProps } from './props';
import EditWalletView from './view';

const EditWalletContainer = (props: EditWalletPublicProps) => {
  const dispatch = useDispatch();
  const createWallet = (payload: { label: string; initialAmount: number }) => {
    dispatch(createWalletAction(payload));
    props.navigation.goBack();
  };

  const generatedProps: EditWalletPrivateProps = {
    createWallet,
  };

  return <EditWalletView {...props} {...generatedProps} />;
};

export default EditWalletContainer;
