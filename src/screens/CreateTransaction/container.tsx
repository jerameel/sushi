import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { createTransactionAction, Transaction } from 'store/transactions';
import { createWalletAction } from 'store/wallets';

import {
  CreateTransactionPrivateProps,
  CreateTransactionPublicProps,
} from './props';
import CreateTransactionView from './view';

const CreateTransactionContainer = (props: CreateTransactionPublicProps) => {
  const dispatch = useDispatch();
  const wallets = useSelector((state: RootState) => state.wallets);
  const createTransaction = (payload: Omit<Transaction, 'id'>) => {
    dispatch(createTransactionAction(payload));
    props.navigation.goBack();
  };

  const generatedProps: CreateTransactionPrivateProps = {
    wallets,
    createTransaction,
  };

  return <CreateTransactionView {...props} {...generatedProps} />;
};

export default CreateTransactionContainer;
