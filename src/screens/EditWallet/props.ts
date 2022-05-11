import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Wallet } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface EditWalletPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'CREATE_WALLET'> {}

export interface EditWalletPrivateProps {
  wallet: Wallet;
  editWallet: (payload: Wallet) => void;
}

export interface EditWalletProps
  extends EditWalletPublicProps,
    EditWalletPrivateProps {}
