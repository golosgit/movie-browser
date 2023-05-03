import { all } from "redux-saga/effects";
import { watchFetchPersonDetailsHandler } from "../features/PersonDetailsPage/personDetailsPageSaga";

export default function* saga() {
  yield all([
    watchFetchPersonDetailsHandler(),
  ]);
}
