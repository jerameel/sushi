export type MainStackParamList = {
  HOME?: {};
  TRANSACTIONS?: {};
  CREATE_WALLET?: {};
  EDIT_WALLET?: {
    walletId: string;
  };
  CREATE_TRANSACTION?: {};
  EDIT_TRANSACTION?: {
    transactionId: string;
  };
  WALLET_DETAILS?: {
    walletId: string;
  };
  TRANSACTION_DETAILS?: {
    transactionId: string;
  };
  SETTINGS?: {};
};
