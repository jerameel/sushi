import { Translation } from 'types/Translation';
import en_US from './en-US';

const ca_CA = {
  // DASHBOARD
  ALL: 'Tots',
  CREDIT: 'Crèdit',
  DEBIT: 'Dèbit',
  RECENT_TRANSACTIONS: 'Transaccions recents',
  MY_ACCOUNTS: 'Els meus comptes',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Afegir compte',
  ACCOUNT_NAME: 'Nom del compte',
  INITIAL_AMOUNT: 'Import inicial',
  CREATE_ACCOUNT: 'Crea compte',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Editar compte',
  UPDATE_ACCOUNT: 'Actualitza el compte',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Detalls del compte',
  CURRENT_BALANCE: 'Import actual',
  INITIAL_BALANCE: 'Import inicial',
  DELETE_ACCOUNT: 'Esborrar compte?',
  DELETE_ACCOUNT_INFO:
    'Això suprimirà permanentment el compte {{accountName}} incloses les transaccions enllaçades {{transactionCount}}.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Nova transacció',
  CREATE_TRANSACTION: 'Crear transacció',
  CATEGORY: 'Categoria',
  SOURCE_ACCOUNT: 'Compte d'origen',
  DESTINATION_ACCOUNT: 'Compte de destinació',
  TRANSFER: 'Transferència',
  SHORT_DESCRIPTION: 'Curta descripció',
  AMOUNT: 'Import',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Editar la transacció',
  UPDATE_TRANSACTION: 'Actualitzar la transacció',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Detalls de la transacció',
  ACCOUNT: 'Compte',
  TRANSACTION_DATE: 'Data de la transacció',
  TRANSACTION_TIME: 'Hora de la transacció',
  DATE_CREATED: 'Data de creació',
  DATE_UPDATED: 'Data d'actualització',
  DELETE_TRANSACTION: 'Suprimeix la transacció?',
  DELETE_TRANSACTION_INFO:
    'Això suprimirà permanentment el registre de la transacció.',
  KEEP: 'Mantenir',
  DELETE: 'Suprimeix',

  // Transactions
  TRANSACTIONS: 'Transaccions',
  EXPORT: 'Exporta',

  // SETTINGS
  SETTINGS: 'Configuració',
  TRANSLATION_NAME: 'Català (CA)',
  CURRENCY: 'Moneda',
  LANGUAGE: 'Llenguatge',
  THEME: 'Tema',
  THEME_LIGHT: 'Clar',
  THEME_DARK: 'Fosc',
  THEME_WASABI: 'Wasabi',

  // Insights
  INSIGHTS: 'Insights',

  // Filters
  FILTERS: 'Filtres',
  SEARCH: 'Cercar',
  SEARCH_TERM: 'Terme de cerca',
  SEARCH_DESCRIPTION:
    'Això cerca text similar a la descripció o categoria d'una transacció.',
  DATE_RANGE: 'Interval de dates',
  SHOW_ALL: 'Mostrar tots',
  TRANSACTION_TYPE: 'Tipus de transacció',
  RESET_FILTER: 'Restableix',
  APPLY_FILTER: 'Aplicar filtres',
};

export default ca_CA;
