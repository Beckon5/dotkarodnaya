import {
  all
} from 'redux-saga/effects';
import {
  sagaHome
} from './sagaHome';

export default function* () {
  yield all([
    sagaHome()
  ]);
}