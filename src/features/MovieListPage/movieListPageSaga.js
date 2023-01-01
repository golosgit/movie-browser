import { put, takeLatest, delay, call } from "redux-saga/effects";
import { fetchMovieList, fetchMovieListSuccess, fetchError } from "./movieListPageSlice";
import { getMovieList } from "../../api";

function* fetchMovieListHandler() {
  try {
    yield delay(500);
    const results = yield call(getMovieList);
    yield put(fetchMovieListSuccess(results.results));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchMovieListHandler() {
  yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
}