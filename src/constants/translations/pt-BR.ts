import { Translation } from 'types/Translation';
import en_US from './en-US';

const pt_BR: Translation = {
  ...en_US,
  // DASHBOARD
  CREDIT: 'Crédito',
  DEBIT: 'Débito',
  RECENT_TRANSACTIONS: 'Transações recentes',
  MY_ACCOUNTS: 'Minhas Contas',

  // ADD ACCOUNT
  ADD_ACCOUNT: 'Adicionar Conta',
  ACCOUNT_NAME: 'Nome da Conta',
  INITIAL_AMOUNT: 'Valor Inicial',
  CREATE_ACCOUNT: 'Criar Conta',

  // EDIT ACCOUNT
  EDIT_ACCOUNT: 'Editar Conta',
  UPDATE_ACCOUNT: 'Atualizar Conta',

  // ACCOUNT DETAILS
  ACCOUNT_DETAILS: 'Detalhes da Conta',
  INITIAL_BALANCE: 'Saldo Inicial',
  DELETE_ACCOUNT: 'Excluir Conta?',
  DELETE_ACCOUNT_INFO:
    'Isso excluirá permanentemente a conta {{accountName}}, incluindo {{transactionCount}} transações relacionadas.',

  // NEW TRANSACTION
  NEW_TRANSACTION: 'Nova Transação',
  CREATE_TRANSACTION: 'Criar Transação',
  CATEGORY: 'Categoria',
  SOURCE_ACCOUNT: 'Conta de Origem',
  DESTINATION_ACCOUNT: 'Conta Destino',
  TRANSFER: 'Transferir',
  SHORT_DESCRIPTION: 'Breve Descrição',
  AMOUNT: 'Valor',

  // EDIT TRANSACTION
  EDIT_TRANSACTION: 'Editar Transação',
  UPDATE_TRANSACTION: 'Atualizar Transação',

  // TRANSACTION DETAILS
  TRANSACTION_DETAILS: 'Detalhes da Transação',
  ACCOUNT: 'Conta',
  TRANSACTION_DATE: 'Data da Transação',
  TRANSACTION_TIME: 'Hora da Transação',
  DATE_CREATED: 'Criada em',
  DATE_UPDATED: 'Atualizada em',
  DELETE_TRANSACTION: 'Excluir Transação?',
  DELETE_TRANSACTION_INFO:
    'Isso excluirá permanentemente o registro da transação.',
  KEEP: 'Manter',
  DELETE: 'Excluir',

  // Transactions
  TRANSACTIONS: 'Transações',
  SEARCH: 'Procurar',
  DATE_RANGE: 'Período',
  SHOW_ALL: 'Mostrar Tudo',
  EXPORT: 'Exportar',

  // SETTINGS
  SETTINGS: 'Configurações',
  TRANSLATION_NAME: 'Português (BR)',
  CURRENCY: 'Moeda',
  LANGUAGE: 'Idioma',
  THEME: 'Tema',
  THEME_LIGHT: 'Claro',
  THEME_DARK: 'Escuro',
};

export default pt_BR;
