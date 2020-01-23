import React, { Component } from "react"
import { connect } from "react-redux"

import {
	addCity,
	deleteCity,
	setTemperatureFilter,
	fetchSuggestions,
	setNextCityName,
	setSuggestionList,
} from "./redux/actions"

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
} from "./components"

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
			<Wrapper>
				<Grid childrenMargins="0 0 30px 0" justifyContent="space-between">
					<Grid childrenMargins="0 0 30px 0">
						<Autosuggest
							suggestionList={this.props.suggestionList}
							fetchSuggestions={this.props.fetchSuggestions}
							setNextCityName={this.props.setNextCityName}
							setSuggestionList={setSuggestionList}
						/>
						<AddCityButton
							nextCity={this.props.nextCity}
							handleAddButtonClick={debounce(300, this.handleAddButtonClick)}
						/>
					</Grid>
					<Range
						temperature={this.props.temperature}
						handleRangeChange={throttle(300, this.handleRangeChange)}
					/>
				</Grid>
				{this.props.Hint && (
					<Grid>
						<Hint message={this.props.hint} />
					</Grid>
				)}
				<Grid childrenMargins="20px 20px 0 0">
					<CardList
						cities={this.props.cities}
						handleDeleteButtonClick={this.handleDeleteButtonClick}
						temperatureFilter={this.props.temperature}
					/>
				</Grid>
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

const mapDispatchToProps = dispatch => ({
	addCity: city => dispatch(addCity(city)),
	deleteCity: name => dispatch(deleteCity(name)),
	setTemperatureFilter: temperature =>
		dispatch(setTemperatureFilter(temperature)),
	fetchSuggestions: suggestions => dispatch(fetchSuggestions(suggestions)),
	setNextCityName: name => dispatch(setNextCityName(name)),
	setSuggestionList: value => dispatch(setSuggestionList(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
