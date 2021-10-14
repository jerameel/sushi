import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { createTransactionAction, Transaction } from 'store/transactions';

import {
  CreateTransactionPrivateProps,
  CreateTransactionPublicProps,
} from './props';
import CreateTransactionView from './view';

const CreateTransactionContainer = (props: CreateTransactionPublicProps) => {
  const dispatch = useDispatch();
  const wallets = useSelector((state: RootState) => state.wallets);
  const transactions = useSelector((state: RootState) => state.transactions);
  const createTransaction = (
    payload: Omit<Transaction, 'id' | 'createdAt'>,
  ) => {
    // TODO: Improve validation structure
    if (
      payload.category &&
      payload.sourceWalletId &&
      ((payload.category.toUpperCase() === 'TRANSFER' &&
        payload.destinationWalletId) ||
        payload.category !== 'TRANSFER')
    ) {
      dispatch(createTransactionAction(payload));
      props.navigation.goBack();
    }
  };

  const generatedProps: CreateTransactionPrivateProps = {
    wallets,
    transactions,
    createTransaction,
  };

  return <CreateTransactionView {...props} {...generatedProps} />;
};

export default CreateTransactionContainer;
