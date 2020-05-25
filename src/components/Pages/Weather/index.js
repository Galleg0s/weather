import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withTranslation } from "react-i18next"
import { Grid, Typography } from "@material-ui/core"
import { throttle, debounce } from "throttle-debounce"
import * as actions from "../../../redux/actions"
import {
	getCities,
	getTemperature,
	getSuggestionList,
	getNextCity,
	getHint,
} from "../../../redux/selectors"

import { Autocomplete, AddCityButton, CardList, Range } from "../.."

const App = ({
	suggestionList,
	fetchSuggestions,
	setNextCityName,
	setSuggestionList,
	addCity,
	setHint,
	nextCity,
	deleteCity,
	setTemperatureFilter,
	temperature,
	t,
	cities,
	hint,
}) => {
	const handleAddButtonClick = () => {
		const isCityCardExist =
			cities.filter(city => city.name === nextCity).length === 1

		if (nextCity !== "" && !isCityCardExist) {
			addCity(nextCity)
		}
	}

	const handleDeleteButtonClick = name => {
		deleteCity(name)
	}

	const handleRangeChange = degrees => {
		setTemperatureFilter(degrees)
	}

	return (
		<Grid container spacing={4}>
			<Grid item container spacing={2}>
				<Grid item lg={6}>
					<Autocomplete
						suggestionList={suggestionList}
						fetchSuggestions={fetchSuggestions}
						setNextCityName={setNextCityName}
						setSuggestionList={setSuggestionList}
						setHint={setHint}
					/>
				</Grid>
				<Grid item lg={2}>
					<AddCityButton
						nextCity={nextCity}
						onButtonClick={debounce(300, handleAddButtonClick)}
					/>
				</Grid>
				<Grid item lg={4}>
					<Range
						temperature={temperature}
						onRangeChange={throttle(300, handleRangeChange)}
						title={t("Warmer than")}
					/>
				</Grid>
			</Grid>
			<Grid item container spacing={2}>
				<CardList
					cities={cities}
					onButtonClick={handleDeleteButtonClick}
					temperatureFilter={temperature}
				/>
			</Grid>
			<Grid>{hint && <Typography>{hint}</Typography>}</Grid>
		</Grid>
	)
}

const mapStateToProps = state => {
	return {
		cities: getCities(state),
		temperature: getTemperature(state),
		suggestionList: getSuggestionList(state),
		nextCity: getNextCity(state),
		hint: getHint(state),
	}
}

const mapDispatchToProps = dispatch => {
	const {
		addCity,
		deleteCity,
		setTemperatureFilter,
		fetchSuggestions,
		setNextCityName,
		setSuggestionList,
		setHint,
	} = bindActionCreators(actions, dispatch)

	return {
		addCity: city => addCity(city),
		deleteCity: name => deleteCity(name),
		setTemperatureFilter: temperature => setTemperatureFilter(temperature),
		fetchSuggestions: suggestions => fetchSuggestions(suggestions),
		setNextCityName: name => setNextCityName(name),
		setSuggestionList: value => setSuggestionList(value),
		setHint: message => setHint(message),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withTranslation()(App))
