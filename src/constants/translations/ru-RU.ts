import { Translation } from 'types/Translation';
import en_US from './en-US';

const ru_RU: Translation = {
  ...en_US,
  // DASHBOARD
  ALL: 'Все',
  CREDIT: 'Расход',
  DEBIT: 'Доход',
  RECENT_TRANSACTIONS: 'Недавние транзакции',
  MY_ACCOUNTS: 'Мои счета',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Добавить счёт',
  ACCOUNT_NAME: 'Имя счёта',
  INITIAL_AMOUNT: 'Начальный баланс',
  CREATE_ACCOUNT: 'Создать счёт',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Изменить счёт',
  UPDATE_ACCOUNT: 'Обновить счёт',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Детали счёта',
  CURRENT_BALANCE: 'Текущий баланс',
  INITIAL_BALANCE: 'Начальный баланс',
  DELETE_ACCOUNT: 'Удалить счёт?',
  DELETE_ACCOUNT_INFO:
    'Это безвозвратно удалит счёт "{{accountName}}", включая {{transactionCount}} связанных транзакций.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Новая транзакция',
  CREATE_TRANSACTION: 'Создать транзакцию',
  CATEGORY: 'Категория',
  SOURCE_ACCOUNT: 'Счёт транзакции',
  DESTINATION_ACCOUNT: 'Счёт назначения',
  TRANSFER: 'Перевод',
  SHORT_DESCRIPTION: 'Краткое описание',
  AMOUNT: 'Сумма',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Изменить транзакцию',
  UPDATE_TRANSACTION: 'Обновить транзакцию',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Детали транзакции',
  ACCOUNT: 'Счёт',
  TRANSACTION_DATE: 'Дата транзакции',
  TRANSACTION_TIME: 'Время транзакции',
  DATE_CREATED: 'Дата создания',
  DATE_UPDATED: 'Дата обновления',
  DELETE_TRANSACTION: 'Удалить транзакцию?',
  DELETE_TRANSACTION_INFO: 'Это действие безвозвратно удалит запись о транзакции.',
  KEEP: 'Оставить',
  DELETE: 'Удалить',

  // Transactions
  TRANSACTIONS: 'Транзакции',
  EXPORT: 'Экспорт',

  // SETTINGS
  SETTINGS: 'Настройки',
  TRANSLATION_NAME: 'Русский',
  CURRENCY: 'Валюта',
  LANGUAGE: 'Язык',
  THEME: 'Тема',
  THEME_LIGHT: 'Светлая',
  THEME_DARK: 'Тёмная',
  THEME_WASABI: 'Васаби',

  // Insights
  INSIGHTS: 'Статистика',

  // Filters
  FILTERS: 'Фильтры',
  SEARCH: 'Поиск',
  SEARCH_TERM: 'Поисковой запрос',
  SEARCH_DESCRIPTION:
    'Поиск введённого текста в описании и категории транзакций.',
  DATE_RANGE: 'Диапозон дат',
  SHOW_ALL: 'За всё время',
  TRANSACTION_TYPE: 'Тип транзакции',
  RESET_FILTER: 'Сбросить',
  APPLY_FILTER: 'Применить фильтры',
};

export default ru_RU;
