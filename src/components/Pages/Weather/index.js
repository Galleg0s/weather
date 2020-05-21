import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../../redux/actions"
import { withTranslation } from "react-i18next"
import { Grid, Typography } from "@material-ui/core"
import {
	getCities,
	getTemperature,
	getSuggestionList,
	getNextCity,
	getHint,
} from "../../../redux/selectors"

import { Autosuggest, AddCityButton, CardList, Range } from "../.."
import { throttle, debounce } from "throttle-debounce"

class App extends Component {
	handleAddButtonClick = () => {
		const isCityCardExist =
			this.props.cities.filter(city => city.name === this.props.nextCity)
				.length === 1

		if (this.props.nextCity !== "" && !isCityCardExist) {
			this.props.addCity(this.props.nextCity)
		}
	}

	handleDeleteButtonClick = name => {
		this.props.deleteCity(name)
	}
	handleRangeChange = degrees => {
		this.props.setTemperatureFilter(degrees)
	}

	render() {
		return (
			<Grid container>
				<Grid item lg={12} container>
					<Grid item lg={7}>
						<Autosuggest
							suggestionList={this.props.suggestionList}
							fetchSuggestions={this.props.fetchSuggestions}
							setNextCityName={this.props.setNextCityName}
							setSuggestionList={this.props.setSuggestionList}
							setHint={this.props.setHint}
							title={this.props.t("Select a city")}
						/>
					</Grid>
					<Grid item lg={1}>
						<AddCityButton
							nextCity={this.props.nextCity}
							handleAddButtonClick={debounce(300, this.handleAddButtonClick)}
						/>
					</Grid>
					<Grid item lg={4}>
						<Range
							temperature={this.props.temperature}
							handleRangeChange={throttle(300, this.handleRangeChange)}
							title={this.props.t("Warmer than")}
						/>
					</Grid>
				</Grid>
				<CardList
					cities={this.props.cities}
					handleDeleteButtonClick={this.handleDeleteButtonClick}
					temperatureFilter={this.props.temperature}
				/>
				{this.props.hint && <Typography>{this.props.hint}</Typography>}
			</Grid>
		)
	}
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
