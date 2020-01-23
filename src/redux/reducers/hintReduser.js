import { SET_HINT } from "../constants"

const initialState = ""

const hintReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_HINT: {
			return action.payload
		}
		default:
			return state
	}
}

export default hintReduser
