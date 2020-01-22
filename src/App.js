import React, { Component } from "react"
import { connect } from "react-redux"
import {
	addCity,
	deleteCity,
	changeTemperature,
	fetchSuggestions,
	setNextCityName,
} from "./redux/actions"

import {
	Autosuggest,
	AddCityButton,
	CardList,
	Range,
	Wrapper,
	Grid,
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
		this.props.changeTemperature(degrees)
	}

	render() {
		return (
			<Wrapper>
				<Grid childrenMargins="0 0 30px 0">
					<Autosuggest
						suggestionList={this.props.suggestionList}
						fetchSuggestions={this.props.fetchSuggestions}
						setNextCityName={this.props.setNextCityName}
					/>
					<AddCityButton
						nextCity={this.props.nextCity}
						handleAddButtonClick={this.handleAddButtonClick}
					/>
					<Range
						temperature={this.props.temperature}
						handleRangeChange={throttle(200, this.handleRangeChange)}
					/>
				</Grid>
				<Grid childrenMargins="0 20px 20px 0">
					<CardList
						cities={this.props.cities}
						handleDeleteButtonClick={this.handleDeleteButtonClick}
					/>
				</Grid>
			</Wrapper>
		)
	}
}

const mapStateToProps = store => {
	return {
		cities: store.cities,
		temperature: store.temperature,
		suggestionList: store.suggestions.suggestionList,
		nextCity: store.nextCity,
	}
}

const mapDispatchToProps = dispatch => ({
	addCity: city => dispatch(addCity(city)),
	deleteCity: name => dispatch(deleteCity(name)),
	changeTemperature: degrees => dispatch(changeTemperature(degrees)),
	fetchSuggestions: suggestions => dispatch(fetchSuggestions(suggestions)),
	setNextCityName: name => dispatch(setNextCityName(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
