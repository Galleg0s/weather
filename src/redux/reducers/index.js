import { combineReducers } from "redux"
import temperatureRecucer from "./temperatureReducer"
import citiesReducer from "./citiesReducer"
import suggestionsReduser from "./suggestionsReduser"
import nextCityReduser from "./nextCityReduser"
import hintReduser from "./hintReduser"

const rootReducer = combineReducers({
	temperature: temperatureRecucer,
	cities: citiesReducer,
	suggestions: suggestionsReduser,
	nextCity: nextCityReduser,
	hint: hintReduser,
})

export default rootReducer
