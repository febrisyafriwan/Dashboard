import { takeLatest, put, call } from "redux-saga/effects";
import { faker } from '@faker-js/faker';
import { getDataTotalCaseSuccess, getDataTotalCaseFailed } from '../slices/trafficSlice'

function* getDataTotalCaseAction(param) {
  try {
    const data = [...Array(10)].map(() => ({
      timewindow: faker.date.past(),
      count: faker.datatype.number()
    }))
    yield put(getDataTotalCaseSuccess(data));
  } catch (error) {
    yield put(getDataTotalCaseFailed());
  }
}

function* trafficSaga() {
  yield takeLatest('getDataTotalCase', getDataTotalCaseAction);
}

export default trafficSaga;
