import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { editWalletAction, Wallet } from 'store/wallets';

import { EditWalletPrivateProps, EditWalletPublicProps } from './props';
import EditWalletView from './view';

const EditWalletContainer = (props: EditWalletPublicProps) => {
  const dispatch = useDispatch();
  const walletId = props.route.params?.walletId || '';

  const wallets = useSelector((state: RootState) => state.wallets);
  const transactions = useSelector((state: RootState) => state.transactions);
  const wallet = wallets[walletId];

  const editWallet = (payload: Wallet) => {
    dispatch(editWalletAction(payload));
    props.navigation.goBack();
  };

  const generatedProps: EditWalletPrivateProps = {
    editWallet,
    wallet,
  };

  return <EditWalletView {...props} {...generatedProps} />;
};

export default EditWalletContainer;
