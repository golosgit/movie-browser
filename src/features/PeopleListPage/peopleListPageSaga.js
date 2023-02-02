import { put, takeLatest, delay, call, select } from "redux-saga/effects";
import { fetchPeopleList, fetchPeopleListSuccess, fetchError, selectFetchPage } from "./peopleListPageSlice";
import { baseUrl, popularPeople, apiKey } from "../api";
import { getData } from "../getData";

function* fetchPeopleListHandler() {
  const page = yield select(selectFetchPage) || 1;
  const fetchPage = `&page=${page}`;

  try {
    yield delay(500);
    const results = yield call(getData, `${baseUrl}${popularPeople}${apiKey}${fetchPage}`);
    yield put(fetchPeopleListSuccess(results));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchPeopleListHandler() {
  yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler);
}