export type MainStackParamList = {
  HOME?: {};
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
