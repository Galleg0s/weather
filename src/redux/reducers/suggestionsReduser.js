import { FETCH_SUGGESTIONS, SET_SUGGESTION_LIST } from "../constants"

const initialState = {
	suggestionList: [],
	fetchedValue: "",
}

const suggestionListReduser = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SUGGESTIONS:
			return {
				...state,
				fetchedValue: action.payload,
			}
		case SET_SUGGESTION_LIST:
			return {
				...state,
				suggestionList: action.payload,
			}
		default:
			return state
	}
}

export default suggestionListReduser
