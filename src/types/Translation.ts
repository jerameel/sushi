export type Translation = {
  // DASHBOARD
  ALL: string;
  CREDIT: string;
  DEBIT: string;
  RECENT_TRANSACTIONS: string;
  MY_ACCOUNTS: string;

  // ADD ACCOUNT
  ADD_ACCOUNT: string;
  ACCOUNT_NAME: string;
  INITIAL_AMOUNT: string;
  CREATE_ACCOUNT: string;

  // EDIT ACCOUNT
  EDIT_ACCOUNT: string;
  UPDATE_ACCOUNT: string;

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: string;
  INITIAL_BALANCE: string;
  DELETE_ACCOUNT: string;
  DELETE_ACCOUNT_INFO: string;

  // NEW TRANSACTION
  NEW_TRANSACTION: string;
  CREATE_TRANSACTION: string;
  CATEGORY: string;
  SOURCE_ACCOUNT: string;
  DESTINATION_ACCOUNT: string;
  TRANSFER: string;
  SHORT_DESCRIPTION: string;
  AMOUNT: string;

  // EDIT TRANSACTION
  EDIT_TRANSACTION: string;
  UPDATE_TRANSACTION: string;

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: string;
  ACCOUNT: string;
  TRANSACTION_DATE: string;
  TRANSACTION_TIME: string;
  DATE_CREATED: string;
  DATE_UPDATED: string;
  DELETE_TRANSACTION: string;
  DELETE_TRANSACTION_INFO: string;
  KEEP: string;
  DELETE: string;

  // Transactions
  TRANSACTIONS: string;
  SEARCH: string;
  DATE_RANGE: string;
  SHOW_ALL: string;
  EXPORT: string;

  // SETTINGS
  SETTINGS: string;
  TRANSLATION_NAME: string;
  CURRENCY: string;
  LANGUAGE: string;
  THEME: string;
  THEME_LIGHT: string;
  THEME_DARK: string;
};

export type TranslationKey = keyof Translation;
