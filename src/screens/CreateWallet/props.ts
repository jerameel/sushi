import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CreateWalletInput } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface CreateWalletPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'CREATE_WALLET'> {}

export interface CreateWalletPrivateProps {
  createWallet: (payload: CreateWalletInput) => void;
}

export interface CreateWalletProps
  extends CreateWalletPublicProps,
    CreateWalletPrivateProps {}
