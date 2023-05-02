import { all } from "redux-saga/effects";
import { watchFetchMovieDetailsHandler } from "../features/MovieDetailsPage/movieDetailsPageSaga";
import { watchFetchPersonDetailsHandler } from "../features/PersonDetailsPage/personDetailsPageSaga";

export default function* saga() {
  yield all([
    watchFetchMovieDetailsHandler(),
    watchFetchPersonDetailsHandler(),
  ]);
}
