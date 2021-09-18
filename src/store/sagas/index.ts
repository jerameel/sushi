import { fork, all } from 'redux-saga/effects';

const sagas: any[] = [];

export default function* root() {
  yield all(sagas.map(fork));
}
