import {
	ADD_CITY,
	DELETE_CITY,
	INPUT_CITY_NAME,
	SET_TEMPERATURE_VALUE,
} from "./constants"

let nextCityId = 0

export const addCity = name => {
	return {
		type: ADD_CITY,
		payload: {
			name,
			id: ++nextCityId,
		},
	}
}

export const deleteCity = id => {
	return {
		type: DELETE_CITY,
		payload: id,
	}
}

export const inputCityName = name => {
	return {
		type: INPUT_CITY_NAME,
		payload: name,
	}
}

export const setTemperatureFilter = degrees => {
	return {
		type: SET_TEMPERATURE_VALUE,
		payload: degrees,
	}
}
