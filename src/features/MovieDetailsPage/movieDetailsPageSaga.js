import { put, takeLatest, delay, call, select, all } from "redux-saga/effects";
import { baseUrl, movieDetails, movieDetailsCredits, apiKey } from "../api";
import { getData } from "../getData";
import { fetchMovieDetails, fetchMovieDetailsSuccess, fetchError, selectMovieId } from "./movieDetailsPageSlice";

function* fetchMovieDetailsHandler() {
  const id = yield select(selectMovieId);

  try {
    yield delay(500);
    const results = yield all({
      movieDetails: call(getData, `${baseUrl}${movieDetails}${id}${apiKey}`),
      credits: call(getData, `${baseUrl}${movieDetails}${id}${movieDetailsCredits}${apiKey}`),
    });
    yield put(fetchMovieDetailsSuccess(results));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchMovieDetailsHandler() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
