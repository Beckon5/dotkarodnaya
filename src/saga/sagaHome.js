import {
  call,
  put,
  takeEvery
} from "redux-saga/effects";
import axios from "axios";
import {
  changeData
  
} from "../store/actions";
import {
  path
} from "./axiosConfig";
import actionType from "../store/actionType";

export function* fetchData(action) {

  try {
    const response = yield call(
      [axios, axios.get],
      `${path}`
    );
    yield put(changeData(response.data));
  } catch (e) {
    alert("Ошибка получения данных с API")
  }
}


export function* sagaHome() {
  yield takeEvery(actionType.ACTION_GET_DATA, fetchData);
}