import { combineReducers } from "redux"
import temperatureRecucer from "./temperatureReducer"
import cityReducer from "./cityReducer"

const rootReducer = combineReducers({
	temperature: temperatureRecucer,
	cities: cityReducer,
})

export default rootReducer
