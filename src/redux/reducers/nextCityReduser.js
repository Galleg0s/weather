import { SET_NEXT_CITY_NAME } from "../constants"

const initialState = ""

const newCityReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEXT_CITY_NAME: {
			return action.payload
		}
		default:
			return state
	}
}

export default newCityReduser
