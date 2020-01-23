// import { addCity, deleteCity } from "./actions"
import { ADD_CITY, DELETE_CITY, ADD_WEATHER_TO_CITY } from "../constants"

const initialState = []

const citiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CITY:
			return [
				...state,
				{
					name: action.payload,
				},
			]
		case DELETE_CITY:
			return state.filter(city => city.name !== action.payload)
		case ADD_WEATHER_TO_CITY:
			// eslint-disable-next-line no-case-declarations
			const cities = state.map(city =>
				city.name === action.payload.name ? action.payload : city
			)
			return [...cities]
		default:
			return state
	}
}

export default citiesReducer
