import { SET_TEMPERATURE_FILTER } from "../constants"

const initialState = 3

const temperatureReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TEMPERATURE_FILTER:
			return action.payload
		default:
			return state
	}
}

export default temperatureReducer
