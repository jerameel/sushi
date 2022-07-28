import { Translation } from 'types/Translation';

const ru_RU: Translation = {
  // DASHBOARD
  CREDIT: 'Расход',
  DEBIT: 'Доход',
  RECENT_TRANSACTIONS: 'Недавние Транзакции',
  MY_ACCOUNTS: 'Мои Счета',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Добавить Счёт',
  ACCOUNT_NAME: 'Имя Счёта',
  INITIAL_AMOUNT: 'Начальный Баланс',
  CREATE_ACCOUNT: 'Создать Счёт',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Изменить Счёт',
  UPDATE_ACCOUNT: 'Обновить Счёт',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Детали Счёта',
  INITIAL_BALANCE: 'Начальный Баланс',
  DELETE_ACCOUNT: 'Удалить Счёт?',
  DELETE_ACCOUNT_INFO:
    'Это безвозвратно удалит счёт {{accountName}} включая {{transactionCount}} связанных транзакций.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Новая Транзакция',
  CREATE_TRANSACTION: 'Создать Транзакцию',
  CATEGORY: 'Категория',
  SOURCE_ACCOUNT: 'Счёт Транзакции',
  DESTINATION_ACCOUNT: 'Счёт Назначения',
  TRANSFER: 'Перевод',
  SHORT_DESCRIPTION: 'Краткое Описание',
  AMOUNT: 'Сумма',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Изменить Транзакцию',
  UPDATE_TRANSACTION: 'Обновить Транзакцию',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Детали Транзакции',
  ACCOUNT: 'Счёт',
  DATE_CREATED: 'Дата Создания',
  DATE_UPDATED: 'Дата Обновления',
  DELETE_TRANSACTION: 'Удалить Транзакцию?',
  DELETE_TRANSACTION_INFO:
    'Это безвозвратно удалит запись о транзакции.',
  KEEP: 'Оставить',
  DELETE: 'Удалить',

  // Transactions
  TRANSACTIONS: 'Транзакции',
  SEARCH: 'Поиск',
  DATE_RANGE: 'Диапазон Дат',
  SHOW_ALL: 'Показать Всё',

  // SETTINGS
  SETTINGS: 'Настройки',
  TRANSLATION_NAME: 'Русский',
  CURRENCY: 'Валюта',
  LANGUAGE: 'Язык',
  THEME: 'Тема',
  THEME_LIGHT: 'Светлая',
  THEME_DARK: 'Тёмная',
};

export default ru_RU;
