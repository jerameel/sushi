import { Translation } from 'types/Translation';
import en_US from './en-US';

const rs_RS: Translation = {
  ...en_US,
  // DASHBOARD
  ALL: 'Све',
  CREDIT: 'Кредит',
  DEBIT: 'Дебит',
  RECENT_TRANSACTIONS: 'Недавне Трансакције',
  MY_ACCOUNTS: 'Мој Налог',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Додај Налог',
  ACCOUNT_NAME: 'Име Налога',
  INITIAL_AMOUNT: 'Почетна Сума',
  CREATE_ACCOUNT: 'Направи Налог',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Уреди Налог',
  UPDATE_ACCOUNT: 'Ажурирај Налог',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Детаљи Налога',
  INITIAL_BALANCE: 'Почетни Капитал',
  DELETE_ACCOUNT: 'Обришите Налог?',
  DELETE_ACCOUNT_INFO:
    'Ово ће заувек да избрише {{accountName}} новчаник, укључујући све повезане са њим {{transactionCount}}.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Нова Трансакција',
  CREATE_TRANSACTION: 'Направите Трансакцију',
  CATEGORY: 'Категорија',
  SOURCE_ACCOUNT: 'Изворни Налог',
  DESTINATION_ACCOUNT: 'Дестинациони Налог',
  TRANSFER: 'Пренеси',
  SHORT_DESCRIPTION: 'Кратки Опис',
  AMOUNT: 'Сума',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Измени Трансакцију',
  UPDATE_TRANSACTION: 'Обнови Трансакцију',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Детаљи Трансакције',
  ACCOUNT: 'Налог',
  DATE_CREATED: 'Време Креирања',
  DATE_UPDATED: 'Време Ажурирања',
  DELETE_TRANSACTION: 'Обриши Трансакцију?',
  DELETE_TRANSACTION_INFO: 'Обриши Информације Трансакције.',
  KEEP: 'Остави',
  DELETE: 'Обриши',

  // Transactions
  TRANSACTIONS: 'Трансакција',
  SEARCH: 'Претрага',
  DATE_RANGE: 'Изабрано Време',
  SHOW_ALL: 'Покажи Све',
  EXPORT: 'Извези',

  // SETTINGS
  SETTINGS: 'Подешавања',
  TRANSLATION_NAME: 'Српски',
  CURRENCY: 'Динар',
  LANGUAGE: 'Српски',
  THEME: 'Тема',
  THEME_LIGHT: 'Светла',
  THEME_DARK: 'Тамна',
};

export default rs_RS;
