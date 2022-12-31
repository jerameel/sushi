import { Transaction } from 'store/transactions';

export type TransactionRecord = Transaction & {
  sourceWalletLabel: string;
  sourceWalletInitialAmount: number;
  destinationWalletLabel: string | null;
  destinationWalletInitialAmount: number | null;
};

export const recordToCSVString = (records: TransactionRecord[]) => {
  if (records.length > 0) {
    const headerString = `${Object.keys(records[0]).join(',')}\n`;
    const rowString = records
      .map((record) =>
        Object.values(record)
          .map((value) => `${value}`)
          .join(','),
      )
      .join('\n');
    return `${headerString}${rowString}`;
  }

  return '';
};
