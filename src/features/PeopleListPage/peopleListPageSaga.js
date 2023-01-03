import { put, takeLatest, delay, call } from "redux-saga/effects";
import { fetchPeopleList, fetchPeopleListSuccess, fetchError } from "./peopleListPageSlice";
import { baseUrl, popularPeople, apiKey } from "../api";
import { getData } from "../getData";

function* fetchPeopleListHandler() {
  try {
    yield delay(500);
    const results = yield call(getData, `${baseUrl}${popularPeople}${apiKey}`);
    yield put(fetchPeopleListSuccess(results.results));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchPeopleListHandler() {
  yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler);
}