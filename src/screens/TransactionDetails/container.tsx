import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { createWalletAction, Wallet } from 'store/wallets';

import {
  TransactionDetailsPrivateProps,
  TransactionDetailsPublicProps,
} from './props';

import { deleteTransactionAction } from 'store/transactions';
import TransactionDetailsView from './view';

const TransactionDetailsContainer = (props: TransactionDetailsPublicProps) => {
  const dispatch = useDispatch();
  const transactionId = props.route.params?.transactionId || '';

  const wallets = useSelector((state: RootState) => state.wallets);
  const transactions = useSelector((state: RootState) => state.transactions);
  const transaction = transactions[transactionId];

  if (!transaction) {
    props.navigation.goBack();
  }

  const sourceWallet = wallets[transaction.sourceWalletId];
  const destinationWallet = transaction.destinationWalletId
    ? wallets[transaction.destinationWalletId]
    : null;

  const deleteTransaction = () => {
    dispatch(deleteTransactionAction(transaction.id));
    props.navigation.goBack();
  };
  const generatedProps: TransactionDetailsPrivateProps = {
    transaction,
    sourceWallet,
    destinationWallet,
    deleteTransaction,
  };

  return <TransactionDetailsView {...props} {...generatedProps} />;
};

export default TransactionDetailsContainer;
