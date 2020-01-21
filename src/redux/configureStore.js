import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"

import rootSaga from "./sagas"

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	rootReducer,
	compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
)

sagaMiddleware.run(rootSaga)

export default store
