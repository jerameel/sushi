import { Translation } from 'types/Translation';
import en_US from './en-US';

const it_IT: Translation = {
  ...en_US,
  // DASHBOARD
  CREDIT: 'Spese',
  DEBIT: 'Guadagni',
  RECENT_TRANSACTIONS: 'Transazioni Recenti',
  MY_ACCOUNTS: 'I Miei Conti',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Aggiungi Conto',
  ACCOUNT_NAME: 'Nome Conto',
  INITIAL_AMOUNT: 'Importo Iniziale',
  CREATE_ACCOUNT: 'Crea Conto',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Modifica Conto',
  UPDATE_ACCOUNT: 'Aggiorna Conto',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Dettagli Account',
  INITIAL_BALANCE: 'Bilancio Iniziale',
  DELETE_ACCOUNT: 'Elimina Account?',
  DELETE_ACCOUNT_INFO:
    'Questo eliminerà definitivamente il conto {{accountName}} comprese {{transactionCount}} transazioni collegate.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Nuova Transazione',
  CREATE_TRANSACTION: 'Crea Transazione',
  CATEGORY: 'Categoria',
  SOURCE_ACCOUNT: 'Conto Di Origine',
  DESTINATION_ACCOUNT: 'Conto Di Destinazione',
  TRANSFER: 'Trasferimento',
  SHORT_DESCRIPTION: 'Breve Descrizione',
  AMOUNT: 'Importo',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Modifica Transazione',
  UPDATE_TRANSACTION: 'Aggiorna Transazione',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Dettagli Transazione',
  ACCOUNT: 'Conto',
  DATE_CREATED: 'Data Di Creazione',
  DATE_UPDATED: 'Data Di Aggiornamento',
  DELETE_TRANSACTION: 'Eliminare La Transazione?',
  DELETE_TRANSACTION_INFO: 'Questo eliminerà definitivamente la transazione.',
  KEEP: 'Mantieni',
  DELETE: 'Elimina',

  // Transactions
  TRANSACTIONS: 'Transazioni',
  SEARCH: 'Ricerca',
  DATE_RANGE: 'Intervallo Di Date',
  SHOW_ALL: 'Mostra Tutto',
  EXPORT: 'Export',

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
