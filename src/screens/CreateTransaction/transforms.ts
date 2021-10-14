import groupBy from 'ramda/es/groupBy';
import sortBy from 'ramda/es/sortBy';
import { Transaction, Transactions } from 'store/transactions';
import { Wallets } from 'store/wallets';

export const formatCategory = (category: string) => {
  return category
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const toWalletOptions = (wallets: Wallets) => {
  return Object.keys(wallets).map((key) => {
    const wallet = wallets[key];
    return {
      label: wallet.label,
      value: wallet.id,
    };
  });
};

export const getCategorySuggestions = (transactions: Transactions) => {
  const transactionsArray = Object.keys(transactions).map((key) => {
    const transaction = transactions[key];
    return transaction;
  });
  const groupByCategoryName = groupBy(
    (transaction: Transaction) => transaction.category,
  );

  const groupedByCategoryTransactions = groupByCategoryName(transactionsArray);

  const countedCategoryArray = Object.keys(groupedByCategoryTransactions).map(
    (category) => {
      const transactionCount = groupedByCategoryTransactions[category].length;
      return {
        category,
        count: transactionCount,
      };
    },
  );

  const sortByCount = sortBy(
    (countedCategory: { category: string; count: number }) =>
      -countedCategory.count,
  );

  const sortedCategories = sortByCount(countedCategoryArray).map(
    (countedCategory) => countedCategory.category,
  );

  const defaultCategories = ['Transfer'];

  return [...new Set([...defaultCategories, ...sortedCategories])].slice(0, 8);
};
