import { all } from "redux-saga/effects";
import { watchFetchMovieListHandler } from "./features/MovieListPage/movieListPageSaga";
import { watchFetchGenresHandler } from "./features/Genres/genresSaga";
import { watchFetchPeopleListHandler } from "./features/PeopleListPage/peopleListPageSaga";
import { watchFetchMovieDetailsHandler } from "./features/MovieDetailsPage/movieDetailsPageSaga";
import { watchFetchPersonDetailsHandler } from "./features/PersonDetailsPage/personDetailsPageSaga";

export default function* saga() {
  yield all([
    watchFetchMovieListHandler(),
    watchFetchGenresHandler(),
    watchFetchPeopleListHandler(),
    watchFetchMovieDetailsHandler(),
    watchFetchPersonDetailsHandler(),
  ]);
}