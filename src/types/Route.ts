export type MainStackParamList = {
  HOME?: {};
  CREATE_WALLET?: {};
  CREATE_TRANSACTION?: {};
  WALLET_DETAILS?: {
    walletId: string;
  };
  TRANSACTION_DETAILS?: {
    transactionId: string;
  };
  SETTINGS?: {};
};
