import { all } from "redux-saga/effects";
import { watchFetchGenresHandler } from "../features/Genres/genresSaga";
import { watchFetchMovieDetailsHandler } from "../features/MovieDetailsPage/movieDetailsPageSaga";
import { watchFetchMovieListHandler } from "../features/MovieListPage/movieListPageSaga";
import { watchFetchPeopleListHandler } from "../features/PeopleListPage/peopleListPageSaga";
import { watchFetchPersonDetailsHandler } from "../features/PersonDetailsPage/personDetailsPageSaga";

export default function* saga() {
  yield all([
    watchFetchMovieListHandler(),
    watchFetchGenresHandler(),
    watchFetchPeopleListHandler(),
    watchFetchMovieDetailsHandler(),
    watchFetchPersonDetailsHandler(),
  ]);
}
