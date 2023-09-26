import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import trafficReducer from './slices/trafficSlice'

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {traffic: trafficReducer},
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga);
