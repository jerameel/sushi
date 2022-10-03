import { Translation } from 'types/Translation';
import en_US from './en-US';

const uk_UA: Translation = {
  ...en_US,
  // DASHBOARD
  CREDIT: 'Кредит',
  DEBIT: 'Дебет',
  RECENT_TRANSACTIONS: 'Останні Транзакції',
  MY_ACCOUNTS: 'Мої Рахунки',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Додати Рахунок',
  ACCOUNT_NAME: 'Назва Рахунку',
  INITIAL_AMOUNT: 'Початковий Баланс',
  CREATE_ACCOUNT: 'Створити Рахунок',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Редагувати Рахунок',
  UPDATE_ACCOUNT: 'Оновити Рахунок',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Деталі Рахунку',
  INITIAL_BALANCE: 'Початковий Баланс',
  DELETE_ACCOUNT: 'Видалити Рахунок?',
  DELETE_ACCOUNT_INFO:
    'Це назавжди видалить рахунок {{accountName}}, включаючи {{transactionCount}} пов’язаних транзакцій.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Нова Транзакція',
  CREATE_TRANSACTION: 'Створити Транзакцію',
  CATEGORY: 'Категорія',
  SOURCE_ACCOUNT: 'З Рахунку',
  DESTINATION_ACCOUNT: 'На Рахунок',
  TRANSFER: 'Переказ',
  SHORT_DESCRIPTION: 'Короткий Опис',
  AMOUNT: 'Сума',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Редагувати Транзакцію',
  UPDATE_TRANSACTION: 'Оновити Транзакцію',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Деталі Транзакції',
  ACCOUNT: 'Рахунок',
  DATE_CREATED: 'Дата Створення',
  DATE_UPDATED: 'Дата Оновлення',
  DELETE_TRANSACTION: 'Видалити Транзакцію?',
  DELETE_TRANSACTION_INFO: 'Це назавжди видалить запис транзацкії.',
  KEEP: 'Лишити',
  DELETE: 'Видалити',

  // Transactions
  TRANSACTIONS: 'Транзакції',
  SEARCH: 'Пошук',
  DATE_RANGE: 'Проміжок Часу',
  SHOW_ALL: 'Показати Всі',
  EXPORT: 'Експорт',

  // SETTINGS
  SETTINGS: 'Налаштування',
  TRANSLATION_NAME: 'Українська (UA)',
  CURRENCY: 'Валюта',
  LANGUAGE: 'Мова',
  THEME: 'Тема',
  THEME_LIGHT: 'Світла',
  THEME_DARK: 'Темна',
};

export default uk_UA;
