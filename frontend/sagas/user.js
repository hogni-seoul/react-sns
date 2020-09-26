import { all, fork, takeLatest, delay, call, put } from "redux-saga/effects";
import axios from "axios";

// function loginAPI(data) {
//   return axios.post("/api/login", data);
// }

function logoutAPI() {
  return axios.post("/api/logout");
}

function* logIn(action) {
  try {
    // const result = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({ type: "LOG_IN_SUCCESS", data: action.data });
  } catch (error) {
    yield put({ type: "LOG_IN_FAILURE", data: error.response.data });
  }
}

function* logOut() {
  try {
    const result = yield call(logoutAPI);
    yield put({ type: "LOG_OUT_SUCCESS", data: result.data });
  } catch (error) {
    yield put({ type: "LOG_OUT_FAILURE", data: error.response.data });
  }
}
function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
