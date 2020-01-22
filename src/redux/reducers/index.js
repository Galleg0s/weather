import { combineReducers } from "redux"
import temperatureRecucer from "./temperatureReducer"
import citiesReducer from "./citiesReducer"
import suggestionsReduser from "./suggestionsReduser"
import nextCityReduser from "./nextCityReduser"

const rootReducer = combineReducers({
	temperature: temperatureRecucer,
	cities: citiesReducer,
	suggestions: suggestionsReduser,
	nextCity: nextCityReduser,
})

export default rootReducer
