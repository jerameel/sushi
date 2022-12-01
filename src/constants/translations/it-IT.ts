import { Translation } from 'types/Translation';
import en_US from './en-US';

const it_IT: Translation = {
  ...en_US,
  // DASHBOARD
  CREDIT: 'Spese',
  DEBIT: 'Guadagni',
  RECENT_TRANSACTIONS: 'Transazioni recenti',
  MY_ACCOUNTS: 'I miei conti bancari',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Aggiungi conto',
  ACCOUNT_NAME: 'Nome del conto',
  INITIAL_AMOUNT: 'Importo iniziale',
  CREATE_ACCOUNT: 'Crea conto',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Modifica conto',
  UPDATE_ACCOUNT: 'Aggiorna conto',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Dettagli conto',
  INITIAL_BALANCE: 'Bilancio iniziale',
  DELETE_ACCOUNT: 'Eliminare il conto?',
  DELETE_ACCOUNT_INFO:
    'Questo eliminerà definitivamente il conto {{accountName}} comprese {{transactionCount}} transazioni collegate.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Nuova transazione',
  CREATE_TRANSACTION: 'Crea transazione',
  CATEGORY: 'Categoria',
  SOURCE_ACCOUNT: 'Conto di origine',
  DESTINATION_ACCOUNT: 'Conto di destinazione',
  TRANSFER: 'Bonifico',
  SHORT_DESCRIPTION: 'Descrizione breve',
  AMOUNT: 'Importo',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Modifica transazione',
  UPDATE_TRANSACTION: 'Aggiorna transazione',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Dettagli transazione',
  ACCOUNT: 'Conto bancario',
  DATE_CREATED: 'Data di creazione',
  DATE_UPDATED: 'Data di aggiornamento',
  DELETE_TRANSACTION: 'Eliminare la transazione?',
  DELETE_TRANSACTION_INFO: 'Questo eliminerà definitivamente la transazione.',
  KEEP: 'Mantieni',
  DELETE: 'Elimina',

  // Transactions
  TRANSACTIONS: 'Transazioni',
  SEARCH: 'Ricerca',
  DATE_RANGE: 'Intervallo di tempo',
  SHOW_ALL: 'Mostra tutte',
  EXPORT: 'Esporta',

  // SETTINGS
  SETTINGS: 'Impostazioni',
  TRANSLATION_NAME: 'Italiano (IT)',
  CURRENCY: 'Valuta',
  LANGUAGE: 'Lingua',
  THEME: 'Tema',
  THEME_LIGHT: 'Chiaro',
  THEME_DARK: 'Scuro',
};

export default it_IT;
