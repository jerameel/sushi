import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { InsightsPrivateProps, InsightsPublicProps } from './props';
import InsightsView from './view';

const InsightsContainer = (props: InsightsPublicProps) => {
  const wallets = useSelector((state: RootState) => state.wallets);

  const language = useSelector((state: RootState) => state.currency.language);
  const transactions = useSelector((state: RootState) => state.transactions);

  const generatedProps: InsightsPrivateProps = {
    wallets,
    transactions,
    language,
  };

  return <InsightsView {...props} {...generatedProps} />;
};

export default InsightsContainer;
