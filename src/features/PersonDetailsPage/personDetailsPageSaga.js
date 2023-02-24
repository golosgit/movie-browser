import { put, takeLatest, delay, call, select, all } from "redux-saga/effects";
import { baseUrl, personDetails, personDetailsCredits, apiKey } from "../api";
import { getData } from "../getData";
import { fetchPersonDetails, fetchPersonDetailsSuccess, fetchError, selectPersonId } from "./personDetailsPageSlice";

function* fetchPersonDetailsHandler() {
  const id = yield select(selectPersonId);

  try {
    yield delay(500);
    const results = yield all({
      personDetails: call(getData, `${baseUrl}${personDetails}${id}${apiKey}`),
      credits: call(getData, `${baseUrl}${personDetails}${id}${personDetailsCredits}${apiKey}`),
    });
    yield put(fetchPersonDetailsSuccess(results));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchPersonDetailsHandler() {
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
