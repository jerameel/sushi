import { Translation } from 'types/Translation';

const en_US: Translation = {
  // DASHBOARD
  CREDIT: 'Credit',
  DEBIT: 'Debit',
  RECENT_TRANSACTIONS: 'Recent Transactions',
  MY_ACCOUNTS: 'My Accounts',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Add Account',
  ACCOUNT_NAME: 'Account Name',
  INITIAL_AMOUNT: 'Initial Amount',
  CREATE_ACCOUNT: 'Create Account',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Edit Account',
  UPDATE_ACCOUNT: 'Update Account',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Account Details',
  INITIAL_BALANCE: 'Initial Balance',
  DELETE_ACCOUNT: 'Delete Account?',
  DELETE_ACCOUNT_INFO:
    'This will permanently delete the {{accountName}} wallet including {{transactionCount}} linked transactions.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'New Transaction',
  CREATE_TRANSACTION: 'Create Transaction',
  CATEGORY: 'Category',
  SOURCE_ACCOUNT: 'Source Account',
  DESTINATION_ACCOUNT: 'Destination Account',
  TRANSFER: 'Transfer',
  SHORT_DESCRIPTION: 'Short Description',
  AMOUNT: 'Amount',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Edit Transaction',
  UPDATE_TRANSACTION: 'Update Transaction',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Transaction Details',
  ACCOUNT: 'Account',
  TRANSACTION_DATE: 'Transaction Date',
  TRANSACTION_TIME: 'Transaction Time',
  DATE_CREATED: 'Date Created',
  DATE_UPDATED: 'Date Updated',
  DELETE_TRANSACTION: 'Delete Transaction?',
  DELETE_TRANSACTION_INFO:
    'This will permanently delete the transaction record.',
  KEEP: 'Keep',
  DELETE: 'Delete',

  // Transactions
  TRANSACTIONS: 'Transactions',
  SEARCH: 'Search',
  DATE_RANGE: 'Date Range',
  SHOW_ALL: 'Show All',
  EXPORT: 'Export',

  // SETTINGS
  SETTINGS: 'Settings',
  TRANSLATION_NAME: 'English (US)',
  CURRENCY: 'Currency',
  LANGUAGE: 'Language',
  THEME: 'Theme',
  THEME_LIGHT: 'Light',
  THEME_DARK: 'Dark',
};

export default en_US;
