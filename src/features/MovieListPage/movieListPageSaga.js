import { put, takeLatest, delay, call, select } from "redux-saga/effects";
import { fetchMovieList, fetchMovieListSuccess, fetchError, selectUrlPageParam, selectUrlSearchParam } from "./movieListPageSlice";
import { baseUrl, popularMovies, apiKey, searchMovies } from "../api";
import { getData } from "../getData";

function* fetchMovieListHandler() {
  const page = yield select(selectUrlPageParam) || 1;
  const query = yield select(selectUrlSearchParam);
  const fetchPage = `&page=${page}`;
  const fetchQuery = `&query=${query}`;

  const url = query => {
    if (query) {
      return `${baseUrl}${searchMovies}${apiKey}${fetchPage}${fetchQuery}`;
    }
    return `${baseUrl}${popularMovies}${apiKey}${fetchPage}`;
  } 

  try {
    yield delay(500);
    const results = yield call(getData, url(query));
    yield put(fetchMovieListSuccess(results));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchMovieListHandler() {
  yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
}