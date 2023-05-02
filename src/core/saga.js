import { all } from "redux-saga/effects";
import { watchFetchMovieDetailsHandler } from "../features/MovieDetailsPage/movieDetailsPageSaga";
import { watchFetchPeopleListHandler } from "../features/PeopleListPage/peopleListPageSaga";
import { watchFetchPersonDetailsHandler } from "../features/PersonDetailsPage/personDetailsPageSaga";

export default function* saga() {
  yield all([
    watchFetchPeopleListHandler(),
    watchFetchMovieDetailsHandler(),
    watchFetchPersonDetailsHandler(),
  ]);
}
