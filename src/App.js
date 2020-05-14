import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "./redux/actions"

import {
	getCities,
	getTemperature,
	getSuggestionList,
	getNextCity,
	getHint,
} from "./redux/selectors"

import {
	Autosuggest,
	AddCityButton,
	CardList,
	Range,
	Wrapper,
	Grid,
	Hint,
	SwitchLanguage,
} from "./components"

import { throttle, debounce } from "throttle-debounce"
import { withNamespaces } from "react-i18next"

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
			<Wrapper>
				<Grid childrenMargins="0 20px 20px 0">
					<SwitchLanguage changeLanguage={this.props.changeLanguage} />
				</Grid>

				<Grid justifyContent="space-between">
					<Grid childrenMargins="0 0 30px 0">
						<Autosuggest
							suggestionList={this.props.suggestionList}
							fetchSuggestions={this.props.fetchSuggestions}
							setNextCityName={this.props.setNextCityName}
							setSuggestionList={this.props.setSuggestionList}
							setHint={this.props.setHint}
							title={this.props.t("Select a city")}
						/>
						<AddCityButton
							nextCity={this.props.nextCity}
							handleAddButtonClick={debounce(300, this.handleAddButtonClick)}
						/>
					</Grid>
					<Range
						temperature={this.props.temperature}
						handleRangeChange={throttle(300, this.handleRangeChange)}
						title={this.props.t("Warmer than")}
					/>
				</Grid>
				<Grid childrenMargins="20px 20px 0 0">
					<CardList
						cities={this.props.cities}
						handleDeleteButtonClick={this.handleDeleteButtonClick}
						temperatureFilter={this.props.temperature}
					/>
				</Grid>
				{this.props.hint && (
					<Grid>
						<Hint message={this.props.hint} />
					</Grid>
				)}
			</Wrapper>
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
		changeLanguage,
	} = bindActionCreators(actions, dispatch)

	return {
		addCity: city => addCity(city),
		deleteCity: name => deleteCity(name),
		setTemperatureFilter: temperature => setTemperatureFilter(temperature),
		fetchSuggestions: suggestions => fetchSuggestions(suggestions),
		setNextCityName: name => setNextCityName(name),
		setSuggestionList: value => setSuggestionList(value),
		setHint: message => setHint(message),
		changeLanguage: language => changeLanguage(language),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNamespaces()(App))
