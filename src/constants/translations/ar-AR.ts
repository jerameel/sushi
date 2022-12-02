import { Translation } from 'types/Translation';
import en_US from './en-US';

const ar_AR: Translation = {
  ...en_US,
  // DASHBOARD
  CREDIT: 'الإئتمان',
  DEBIT: 'الدَين',
  RECENT_TRANSACTIONS: 'التحويلات الأخيرة',
  MY_ACCOUNTS: 'حسابي',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'أضف حساب',
  ACCOUNT_NAME: 'إسم الحساب',
  INITIAL_AMOUNT: 'المبلغ الأولي',
  CREATE_ACCOUNT: 'إنشاء حساب',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'تعديل الحساب',
  UPDATE_ACCOUNT: 'تحديث الحساب',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'تفاصيل الحساب',
  INITIAL_BALANCE: 'الرصيد الإفتتاحي',
  DELETE_ACCOUNT: 'أحذف الحساب؟',
  DELETE_ACCOUNT_INFO:
    '.معاملة مرتبطة {{transactionCount}} بشكل دائم بما في ذلك {{accountName}} سيؤدي هذا إلى حذف المحفظة',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'معاملة جديدة',
  CREATE_TRANSACTION: 'إنشاء معاملة',
  CATEGORY: 'الصنف',
  SOURCE_ACCOUNT: 'حساب المصدر',
  DESTINATION_ACCOUNT: 'الحساب المقصود',
  TRANSFER: 'تحويل',
  SHORT_DESCRIPTION: 'وصف مختصر',
  AMOUNT: 'المبلغ',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'تعديل المعاملة',
  UPDATE_TRANSACTION: 'تحديث المعاملة',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'بيانات المعاملة',
  ACCOUNT: 'الحساب',
  TRANSACTION_DATE: 'تاريخ المعاملة',
  TRANSACTION_TIME: 'وقت المعاملة',
  DATE_CREATED: 'تاريخ الإنشاء',
  DATE_UPDATED: 'تاريخ التحديث',
  DELETE_TRANSACTION: 'أحذف المعاملة؟',
  DELETE_TRANSACTION_INFO:
    '.سيؤدي هذا إلى حذف سجل المعاملة بشكل دائم',
  KEEP: 'إحتفظ به',
  DELETE: 'إحذفه',

  // Transactions
  TRANSACTIONS: 'المعاملات',
  SEARCH: 'بحث',
  DATE_RANGE: 'نطاق التاريخ',
  SHOW_ALL: 'أظهر الكل',
  EXPORT: 'تصدير',

  // SETTINGS
  SETTINGS: 'الإعدادات',
  TRANSLATION_NAME: 'العربية',
  CURRENCY: 'العملة',
  LANGUAGE: 'اللغة',
  THEME: 'السمة',
  THEME_LIGHT: 'فاتح',
  THEME_DARK: 'مظلم',
};

export default ar_AR;
