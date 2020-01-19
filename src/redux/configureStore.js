import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import rootReducer from "./reducers/index"

const store = createStore(rootReducer, applyMiddleware(logger))
export default store
