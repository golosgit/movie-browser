import { put, takeLatest, delay, call } from "redux-saga/effects";
import { fetchGenres, fetchGenresSuccess } from "./genresSlice";
import { baseUrl, genres, apiKey } from "../api";
import { getData } from "../getData";

function* fetchGenresHandler() {
  try {
    yield delay(300);
    const results = yield call(getData, `${baseUrl}${genres}${apiKey}`);
    yield put(fetchGenresSuccess(results.genres));
  } catch (error) {
    throw new Error(error);
  }
}

export function* watchFetchGenresHandler() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}