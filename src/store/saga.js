import { all, fork } from "redux-saga/effects";

import trafficSaga from "./sagas/trafficSaga";

export default function* rootSaga() {
  yield all([fork(trafficSaga)]);
}
