import { combineReducers } from "redux"
import temperatureRecucer from "./temperatureReducer"
import citiesReducer from "./citiesReducer"
import suggestionsReduser from "./suggestionsReduser"

const rootReducer = combineReducers({
	temperature: temperatureRecucer,
	cities: citiesReducer,
	suggestions: suggestionsReduser,
})

export default rootReducer
