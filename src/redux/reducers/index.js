import { combineReducers } from "redux"
import temperatureReducer from "./temperatureReducer"
import citiesReducer from "./citiesReducer"
import suggestionsReducer from "./suggestionsReducer"
import nextCityReducer from "./nextCityReducer"
import hintReducer from "./hintReducer"
import usersReducer from "./usersReducer"

const rootReducer = combineReducers({
	temperature: temperatureReducer,
	cities: citiesReducer,
	suggestions: suggestionsReducer,
	nextCity: nextCityReducer,
	hint: hintReducer,
	users: usersReducer,
})

export default rootReducer
