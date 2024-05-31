import { call, put, takeLatest } from "redux-saga/effects";

import services from "../../Services";
import { failedFetchUsers, saveUsers, USERS_ACTION } from "../actions/users.action";
import { User } from "../../Types";

const { fetchUsers } = services;

function* fetchUsersSaga() {
  try {
    const result: User[] = yield call(fetchUsers);

    yield put(saveUsers(result));
  } catch (error: any) {
    yield put(failedFetchUsers(error.message));
  }
}

function* rootSagas() {
  yield takeLatest(USERS_ACTION.FETCH_USERS, fetchUsersSaga);
}

export default rootSagas;
