import { put, takeLatest, delay, call, select } from "redux-saga/effects";
import { fetchPeopleList, fetchPeopleListSuccess, fetchError, selectUrlPageParam, selectUrlSearchParam } from "./peopleListPageSlice";
import { baseUrl, popularPeople, apiKey, searchPeople } from "../api";
import { getData } from "../getData";

function* fetchPeopleListHandler() {
  const page = yield select(selectUrlPageParam) || 1;
  const query = yield select(selectUrlSearchParam);
  const fetchPage = `&page=${page}`;
  const fetchQuery = `&query=${query}`;

  const url = query => {
    if (query) {
      return `${baseUrl}${searchPeople}${apiKey}${fetchPage}${fetchQuery}`;
    }
    return `${baseUrl}${popularPeople}${apiKey}${fetchPage}`;
  } 

  try {
    yield delay(500);
    const results = yield call(getData, url(query));
    
    if (results.total_results === 0) {
      const status = "no results";
      yield put(fetchPeopleListSuccess({ status, results }));
    } else {
      const status = "success";
      yield put(fetchPeopleListSuccess({ status, results }));
    }   
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchPeopleListHandler() {
  yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler);
}