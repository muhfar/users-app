import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducers from "../reducers";
import rootSagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const stores = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSagas);

export default stores;
