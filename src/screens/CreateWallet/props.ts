import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Wallet } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface CreateWalletPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'CREATE_WALLET'> {}

export interface CreateWalletPrivateProps {
  createWallet: (payload: Omit<Wallet, 'id'>) => void;
}

export interface CreateWalletProps
  extends CreateWalletPublicProps,
    CreateWalletPrivateProps {}
