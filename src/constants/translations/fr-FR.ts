import { Translation } from 'types/Translation';
import en_US from './en-US';

const fr_FR: Translation = {
  ...en_US,
  // DASHBOARD
  CREDIT: 'Crédit',
  DEBIT: 'Débit',
  RECENT_TRANSACTIONS: 'Transactions récentes',
  MY_ACCOUNTS: 'Mes comptes',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Ajouter un Compte',
  ACCOUNT_NAME: 'Intitulé du Compte',
  INITIAL_AMOUNT: 'Montant Initial',
  CREATE_ACCOUNT: 'Créer un Compte',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Modifier le compte',
  UPDATE_ACCOUNT: 'Mettre à jour le compte',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Détails du Compte',
  INITIAL_BALANCE: 'Balance Initiale',
  DELETE_ACCOUNT: 'Supprimer le Compte ?',
  DELETE_ACCOUNT_INFO:
    'Cela va supprimer définitivement le compte {{accountName}} ainsi que {{transactionCount}} transactions liées.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Nouvelle Transaction',
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
