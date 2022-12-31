import { all } from "redux-saga/effects";
import { watchFetchMovieListHandler } from "./features/MovieListPage/movieListPageSaga";

export default function* saga() {
  yield all([
    watchFetchMovieListHandler(),
  ])
};