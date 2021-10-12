import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from 'types/Route';

export interface EditWalletPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'EDIT_WALLET'> {}

export interface EditWalletPrivateProps {
  createWallet: (payload: { label: string; initialAmount: number }) => void;
}

export interface EditWalletProps
  extends EditWalletPublicProps,
    EditWalletPrivateProps {}
