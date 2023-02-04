import { Translation } from 'types/Translation';
import en_US from './en-US';

const id_ID: Translation = {
  ...en_US,
  // DASHBOARD
  ALL: 'Semua',
  CREDIT: 'Credit',
  DEBIT: 'Debit',
  RECENT_TRANSACTIONS: 'Transaksi Terbaru',
  MY_ACCOUNTS: 'Akun Saya',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Tambah Akun',
  ACCOUNT_NAME: 'Nama Akun',
  INITIAL_AMOUNT: 'Jumlah Awal',
  CREATE_ACCOUNT: 'Buat Akun',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Edit Akun',
  UPDATE_ACCOUNT: 'Update Akun',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Detail Akun',
  INITIAL_BALANCE: 'Saldo Awal',
  DELETE_ACCOUNT: 'Hapus Akun?',
  DELETE_ACCOUNT_INFO:
    'Ini akan menghapus Akun {{accountName}} Secara permanen termasuk {{transactionCount}} transaksi yang terhubung.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Transaksi Baru',
  CREATE_TRANSACTION: 'Buat Transaksi',
  CATEGORY: 'Kategori',
  SOURCE_ACCOUNT: 'Akun Sumber',
  DESTINATION_ACCOUNT: 'Akun Tujuan',
  TRANSFER: 'Transfer',
  SHORT_DESCRIPTION: 'Deskripsi Singkat',
  AMOUNT: 'Jumlah',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Edit Transaksi',
  UPDATE_TRANSACTION: 'Update Transaksi',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Detail Transaksi',
  ACCOUNT: 'Akun',
  TRANSACTION_DATE: 'Tanggal Transaksi',
  TRANSACTION_TIME: 'Waktu Transaksi',
  DATE_CREATED: 'Tanggal Diciptakan',
  DATE_UPDATED: 'Tanggal Diperbarui',
  DELETE_TRANSACTION: 'Hapus Transaksi?',
  DELETE_TRANSACTION_INFO: 'Ini akan secara permanen menghapus transaksi.',
  KEEP: 'Simpan',
  DELETE: 'Hapus',

  // Transactions
  TRANSACTIONS: 'Transaksi',
  SEARCH: 'Cari',
  DATE_RANGE: 'Jangkauan Tanggal',
  SHOW_ALL: 'Tampilkan Semua',
  EXPORT: 'Ekspor',

  // SETTINGS
  SETTINGS: 'Pengaturan',
  TRANSLATION_NAME: 'Indonesia (ID)',
  CURRENCY: 'Mata Uang',
  LANGUAGE: 'Bahasa',
  THEME: 'Tema',
  THEME_LIGHT: 'Terang',
  THEME_DARK: 'Gelap',

  // Insights
  INSIGHTS: 'Wawasan',
};

export default id_ID;
