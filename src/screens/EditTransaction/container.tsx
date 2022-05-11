import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { editTransactionAction, Transaction } from 'store/transactions';

import {
  EditTransactionPrivateProps,
  EditTransactionPublicProps,
} from './props';
import EditTransactionView from './view';

const EditTransactionContainer = (props: EditTransactionPublicProps) => {
  const dispatch = useDispatch();
  const transactionId = props.route.params?.transactionId || '';

  const wallets = useSelector((state: RootState) => state.wallets);
  const transactions = useSelector((state: RootState) => state.transactions);
  const transaction = transactions[transactionId];

  if (!transaction) {
    props.navigation.goBack();
  }

  const editTransaction = (payload: Transaction) => {
    // TODO: Improve validation structure
    const isTransfer = payload.category.toUpperCase() === 'TRANSFER';
    if (
      payload.category &&
      payload.sourceWalletId &&
      ((isTransfer &&
        payload.destinationWalletId &&
        payload.destinationWalletId !== payload.sourceWalletId) ||
        !isTransfer)
    ) {
      dispatch(editTransactionAction(payload));
      props.navigation.goBack();
    }
  };

  const generatedProps: EditTransactionPrivateProps = {
    wallets,
    transactions,
    transaction,
    editTransaction,
  };

  return <EditTransactionView {...props} {...generatedProps} />;
};

export default EditTransactionContainer;
