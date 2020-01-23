import {
	ADD_CITY,
	DELETE_CITY,
	SET_TEMPERATURE_FILTER,
	FETCH_SUGGESTIONS,
	SET_SUGGESTION_LIST,
	SET_NEXT_CITY_NAME,
	ADD_CITY_WITH_WEATHER,
	SET_HINT,
} from "./constants"

export const addCity = name => {
	return {
		type: ADD_CITY,
		payload: name,
	}
}

export const deleteCity = name => {
	return {
		type: DELETE_CITY,
		payload: name,
	}
}

export const setTemperatureFilter = degrees => {
	return {
		type: SET_TEMPERATURE_FILTER,
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

export const addCityWithWeather = cityWithWeather => {
	return {
		type: ADD_CITY_WITH_WEATHER,
		payload: cityWithWeather,
	}
}

export const setHint = message => {
	return {
		type: SET_HINT,
		payload: message,
	}
}
