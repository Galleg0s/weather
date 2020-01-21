import {
	ADD_CITY,
	DELETE_CITY,
	SET_TEMPERATURE_VALUE,
	FETCH_SUGGESTIONS,
	SET_SUGGESTION_LIST,
	SET_NEXT_CITY_NAME,
} from "./constants"

export const addCity = name => {
	return {
		type: ADD_CITY,
		payload: {
			name,
		},
	}
}

export const deleteCity = name => {
	return {
		type: DELETE_CITY,
		payload: name,
	}
}

export const changeTemperature = degrees => {
	return {
		type: SET_TEMPERATURE_VALUE,
		payload: degrees,
	}
}

export const fetchSuggestions = name => {
	return {
		type: FETCH_SUGGESTIONS,
		payload: name,
	}
}

export const setSuggestionList = suggestionList => {
	return {
		type: SET_SUGGESTION_LIST,
		payload: suggestionList,
	}
}

export const setNextCityName = name => {
	return {
		type: SET_NEXT_CITY_NAME,
		payload: name,
	}
}
