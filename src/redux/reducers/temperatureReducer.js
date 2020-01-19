import { SET_TEMPERATURE_VALUE } from "../constants"

const initialState = 5

const temperatureReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TEMPERATURE_VALUE:
			return action.payload
		default:
			return state
	}
}

export default temperatureReducer
