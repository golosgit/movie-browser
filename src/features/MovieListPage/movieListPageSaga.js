import { put, takeLatest, delay, call } from "redux-saga/effects";
import { fetchMovieList, fetchMovieListSuccess, fetchError } from "./movieListPageSlice";
import { baseUrl, popularMovies, apiKey } from "../api";
import { getData } from "../getData";

function* fetchMovieListHandler() {
  try {
    yield delay(500);
    const results = yield call(getData, `${baseUrl}${popularMovies}${apiKey}`);
    yield put(fetchMovieListSuccess(results.results));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchMovieListHandler() {
  yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
}