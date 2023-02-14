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
  EDIT_ACCOUNT: 'Modifier le Compte',
  UPDATE_ACCOUNT: 'Mettre à jour le Compte',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Détails du Compte',
  INITIAL_BALANCE: 'Balance Initiale',
  DELETE_ACCOUNT: 'Supprimer le Compte ?',
  DELETE_ACCOUNT_INFO:
    'Cela va supprimer définitivement le compte {{accountName}} ainsi que {{transactionCount}} transactions liées.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Nouvelle Transaction',
  CREATE_TRANSACTION: 'Ajouter une Transaction',
  CATEGORY: 'Catégorie',
  SOURCE_ACCOUNT: 'Compte d'origine',
  DESTINATION_ACCOUNT: 'Compte de destination',
  TRANSFER: 'Transférer',
  SHORT_DESCRIPTION: 'Description Courte',
  AMOUNT: 'Montant',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Modifier la Transaction',
  UPDATE_TRANSACTION: 'Mettre à jour la Transaction',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Détails de la Transaction',
  ACCOUNT: 'Compte',
  DATE_CREATED: 'Date de Création',
  DATE_UPDATED: 'Date de Modification',
  DELETE_TRANSACTION: 'Supprimer la Transaction ?',
  DELETE_TRANSACTION_INFO: 'Cela va supprimer définitivement la Transaction',
  KEEP: 'Conserver',
  DELETE: 'Supprimer',

  // Transactions
  TRANSACTIONS: 'Transactions',
  SEARCH: 'Rechercher',
  DATE_RANGE: 'Plage de date',
  SHOW_ALL: 'Tout montrer',
  EXPORT: 'Exporter',

  // SETTINGS
  SETTINGS: 'Réglages',
  TRANSLATION_NAME: 'Français (FR)',
  CURRENCY: 'Monnaie',
  LANGUAGE: 'Langue',
  THEME: 'Thème',
  THEME_LIGHT: 'Clair',
  THEME_DARK: 'Sombre',
  THEME_WASABI: 'Wasabi',

  // Insights
  INSIGHTS: 'Insights',

  // Filters
  FILTERS: 'Filtres',
  SEARCH: 'Rechercher',
  SEARCH_TERM: 'Rechercher un terme',
  SEARCH_DESCRIPTION:
    'La recherche se fait sur des termes similaires dans la description, catégorie ou transaction.',
  DATE_RANGE: 'Plage de date',
  SHOW_ALL: 'Tout montrer',
  TRANSACTION_TYPE: 'Type de Transaction',
  RESET_FILTER: 'Réinitialiser',
  APPLY_FILTER: 'Appliquer les filtres',
};

export default fr_FR;
