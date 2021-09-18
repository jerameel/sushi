import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from 'types/Route';

export interface EditorPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'EDITOR'> {}

export interface EditorPrivateProps {}

export interface EditorProps extends EditorPublicProps, EditorPrivateProps {}
