import { Translation } from 'types/Translation';
import en_US from './en-US';

const de_DE: Translation = {
  ...en_US,
  // DASHBOARD
  CREDIT: 'Kredit',
  DEBIT: 'Debit',
  RECENT_TRANSACTIONS: 'neuliche Transaktionen',
  MY_ACCOUNTS: 'Meine Konten',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Konto hinzufügen',
  ACCOUNT_NAME: 'Kontoname',
  INITIAL_AMOUNT: 'Anfangsguthaben',
  CREATE_ACCOUNT: 'Konto erstellen',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Konto editieren',
  UPDATE_ACCOUNT: 'Konto updaten',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Kontodetails',
  INITIAL_BALANCE: 'Startguthaben',
  DELETE_ACCOUNT: 'Konto löschen?',
  DELETE_ACCOUNT_INFO:
    'Dies wird das {{accountName}} Konto mit {{transactionCount}} verknüpften Transaktionen permanent löschen.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Neue Transaktion',
  CREATE_TRANSACTION: 'Transaktion erstellen',
  CATEGORY: 'Kategorie',
  SOURCE_ACCOUNT: 'Ursprungskonto',
  DESTINATION_ACCOUNT: 'Zielkonto',
  TRANSFER: 'Überweisung',
  SHORT_DESCRIPTION: 'Kurze Beschreibung',
  AMOUNT: 'Betrag',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Transaktion editieren',
  UPDATE_TRANSACTION: 'Transaktion updaten',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Transaktiondetails',
  ACCOUNT: 'Konto',
  TRANSACTION_DATE: 'Transaktionsdatum',
  TRANSACTION_TIME: 'Transaktionszeit',
  DATE_CREATED: 'Erstellungsdatum',
  DATE_UPDATED: 'Aktualisierungsdatum',
  DELETE_TRANSACTION: 'Transaktion löschen?',
  DELETE_TRANSACTION_INFO:
    'Dies wird den Transaktionseintrag permanent löschen.',
  KEEP: 'Behalten',
  DELETE: 'Löschen',

  // Transactions
  TRANSACTIONS: 'Transaktionen',
  SEARCH: 'Suche',
  DATE_RANGE: 'Datumsbereich',
  SHOW_ALL: 'Alle anzeigen',
  EXPORT: 'Exportieren',

  // SETTINGS
  SETTINGS: 'Einstellungen',
  TRANSLATION_NAME: 'Deutsch (DE)',
  CURRENCY: 'Währung',
  LANGUAGE: 'Sprache',
  THEME: 'Thema',
  THEME_LIGHT: 'Hell',
  THEME_DARK: 'Dunkel',
};

export default de_DE;
