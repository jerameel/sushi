import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Wallets } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface HomePublicProps
  extends NativeStackScreenProps<MainStackParamList, 'HOME'> {}

export interface HomePrivateProps {
  wallets: Wallets;
}

export interface HomeProps extends HomePublicProps, HomePrivateProps {}
