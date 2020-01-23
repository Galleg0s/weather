import { call, put, takeLatest, takeEvery } from "redux-saga/effects"
import { FETCH_SUGGESTIONS, ADD_CITY, ADD_WEATHER_TO_CITY } from "./constants"
import { setSuggestionList } from "./actions"
import get from "../api"

function filterSuggestions(results) {
	const duplicatedCities = results
		.filter(
			result => result.localityType && result.localityType.code === "city-city"
		)
		.map(result => result.name)

	return [...new Set(duplicatedCities)]
}

function* fetchSuggestionsWatcher({ payload }) {
	const geoApi = `http://geohelper.info/api/v1/cities?locale[lang]=ru&apiKey=elx4PqYowePswgCzpBNzXsRDQkTotRgh&filter[name]=${payload}`

	try {
		const inputValue = payload.trim().toLowerCase()
		const inputLength = inputValue.length

		if (inputLength === "" || inputLength < 2) {
			yield put(setSuggestionList(""))
		} else {
			const { result } = yield call(get, geoApi)
			const suggestionList = filterSuggestions(result)
			yield put(setSuggestionList(suggestionList))
		}
	} catch (error) {
		yield put({
			type: "FAIL_TO_FETCH",
			payload: "Не удалось получить данные от сервиса geohelper",
		})
	}
}

function* addCityWatcher({ payload }) {
	const weatherApi = `https://api.weatherbit.io/v2.0/current/?key=36784d296fcf46f39350949f826617dc&city=${payload}&country=RU`

	try {
		const { data } = yield call(get, weatherApi)
		const cityWeather = {
			wind: data[0].wind_spd,
			pressure: data[0].pres,
			temperature: data[0].temp,
			icon: {
				code: data[0].weather.icon,
				description: data[0].weather.description,
			},
		}

		yield put({
			type: ADD_WEATHER_TO_CITY,
			payload: { name: payload, ...cityWeather },
		})
	} catch (error) {
		yield put({
			type: "FAIL_TO_FETCH",
			payload: "Не удалось получить данные от сервиса weatherbit",
		})
	}
}

function* rootSaga() {
	yield takeLatest(FETCH_SUGGESTIONS, fetchSuggestionsWatcher)
	yield takeEvery(ADD_CITY, addCityWatcher)
}

export default rootSaga
