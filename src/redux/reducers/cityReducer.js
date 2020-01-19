// import { addCity, deleteCity } from "./actions"
import { ADD_CITY, DELETE_CITY } from "../constants"

const initialState = [
	{
		name: "Москва",
		id: 1234,
		weather: {
			temperature: "+5",
			wind: "10 м/с",
			pressure: "722 мм",
		},
	},
	{
		name: "Санкт-Петербург",
		id: 123123,
		weather: {
			temperature: "+5",
			wind: "10 м/с",
			pressure: "722 мм",
		},
	},
	{
		name: "Екатеринбург",
		id: 324234,
		weather: {
			temperature: "+5",
			wind: "10 м/с",
			pressure: "722 мм",
		},
	},
]

const cityReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CITY:
			return [
				...state,
				{
					name: action.payload.name,
					id: action.payload.id,
					weather: {
						temperature: "+5",
						wind: "10 м/с",
						pressure: "722 мм",
					},
				},
			]
		case DELETE_CITY:
			return [...state.filter(city => city.id !== action.payload.id)]
		default:
			return state
	}
}

export default cityReducer
