import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { TransactionsPrivateProps, TransactionsPublicProps } from './props';
import TransactionsView from './view';

const TransactionsContainer = (props: TransactionsPublicProps) => {
  const wallets = useSelector((state: RootState) => state.wallets);

  const language = useSelector((state: RootState) => state.currency.language);
  const transactions = useSelector((state: RootState) => state.transactions);

  const generatedProps: TransactionsPrivateProps = {
    wallets,
    transactions,
    language,
  };

  return <TransactionsView {...props} {...generatedProps} />;
};

export default TransactionsContainer;
