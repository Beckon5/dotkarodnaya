import {
  call,
  put,
  takeEvery,
  select,
  take
} from "redux-saga/effects";
import axios from "axios";
import {
  changeData
  
} from "../store/actions";
import {
  path
} from "./axiosConfig";
import {ACTION_GET_DATA} from "../store/actionType";

export function* fetchData(action) {

  try {

    const response = yield call(
      [axios, axios.get],
      `${path}`
    );
    yield put(changeData(response.data));
  } catch (e) {
    console.log('THAT WAS AN ERROR')
  }
}


export function* sagaHome() {
  yield takeEvery(ACTION_GET_DATA, fetchData);
}