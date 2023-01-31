import { put, takeLatest, delay, call, select } from "redux-saga/effects";
import { fetchMovieList, fetchMovieListSuccess, fetchError, selectFetchPage } from "./movieListPageSlice";
import { baseUrl, popularMovies, apiKey } from "../api";
import { getData } from "../getData";

function* fetchMovieListHandler() {
  const page = yield select(selectFetchPage) || 1;
  const fetchPage = `&page=${page}`;

  try {
    yield delay(500);
    const results = yield call(getData, `${baseUrl}${popularMovies}${apiKey}${fetchPage}`);
    yield put(fetchMovieListSuccess(results));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchMovieListHandler() {
  yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
}