import React, { Component } from "react"
import { connect } from "react-redux"
import { addCity, deleteCity } from "./redux/actions"

import {
	Autosuggest,
	AddCityButton,
	CardList,
	Range,
	Wrapper,
	Grid,
} from "./components"

class App extends Component {
	handleAddButtonClick = () => {
		this.props.addCity("Москва")
	}

	handleDeleteButtonClick = id => {
		this.props.deleteCity(id)
	}

	render() {
		return (
			<Wrapper>
				<Grid childrenMargins="0 0 30px 0">
					<Autosuggest />
					<AddCityButton handleAddButtonClick={this.handleAddButtonClick} />
					<Range temperature={this.props.temperature} />
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
	}
}

const mapDispatchToProps = dispatch => ({
	addCity: city => dispatch(addCity(city)),
	deleteCity: id => dispatch(deleteCity(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
