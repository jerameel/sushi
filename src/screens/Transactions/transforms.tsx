import { Wallets } from 'store/wallets';

export const toWalletOptions = (wallets: Wallets) => {
  return Object.keys(wallets).map((key) => {
    const wallet = wallets[key];
    return {
      label: wallet.label,
      value: wallet.id,
    };
  });
};
