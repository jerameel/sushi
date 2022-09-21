import { RootState } from 'store';
import produce from 'immer';
import { Transactions } from 'store/transactions';
import { PersistedState } from 'redux-persist';

const Migrations = {
  2: (state: PersistedState & RootState): PersistedState & RootState => {
    return produce(state, (draft) => {
      draft.transactions = Object.keys(draft.transactions).reduce(
        (transactions: Transactions, key) => {
          return {
            ...transactions,
            [key]: {
              ...draft.transactions[key],
              paidAt: draft.transactions[key].createdAt,
            },
          };
        },
        {},
      );
    });
  },
};

export default Migrations;
