import { call, put, select, takeLatest, takeEvery } from "redux-saga/effects"
import { FETCH_SUGGESTIONS, ADD_CITY, ADD_WEATHER_TO_CITY } from "./constants"
import { setSuggestionList } from "./actions"
import get from "./api"
import { getCities } from "./selectors"

function filterSuggestions(results) {
	const duplicatedCities = results
		.filter(result => result.localityType)
		.map(result => result.name)

	return [...new Set(duplicatedCities)]
}

function* fetchSuggestionsWatcher({ payload }) {
	const geoApi = `http://geohelper.info/api/v1/cities?locale[lang]=ru&apiKey=elx4PqYowePswgCzpBNzXsRDQkTotRgh&filter[name]=${payload}`

	try {
		const { result } = yield call(get, geoApi)
		const suggestionList = filterSuggestions(result)
		yield put(setSuggestionList(suggestionList))
	} catch (error) {
		yield put({ type: "FAIL_TO_FETCH", error })
	}
}

function* addCityWatcher({ payload }) {
	const weatherApi = `http://api.weatherbit.io/v2.0/current/?key=36784d296fcf46f39350949f826617dc&city=${payload}&country=RU`

	try {
		const { data } = yield call(get, weatherApi)
		const cityWeather = {
			wind: data[0].wind_spd,
			pressure: data[0].pres,
			temperature: data[0].temp,
			icon: {
				icon: data[0].weather.icon,
				alt: data[0].weather.description,
			},
		}

		yield put({
			type: ADD_WEATHER_TO_CITY,
			payload: { name: payload, ...cityWeather },
		})
		// yield put({ type: ADD_CITY_WITH_WEATHER, payload: cityWithWeather })
	} catch (error) {
		// yield put({ type: "FAIL_TO_FETCH", error })
		// удалить город из списка
	}
}

function* rootSaga() {
	yield takeLatest(FETCH_SUGGESTIONS, fetchSuggestionsWatcher)
	yield takeEvery(ADD_CITY, addCityWatcher)
}

export default rootSaga
