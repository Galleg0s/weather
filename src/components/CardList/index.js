import React from "react"
import PropTypes from "prop-types"
import Card from "../Card"

const CardList = ({ cities, handleDeleteButtonClick, temperatureFilter }) => {
	return cities.map(city => (
		<Card
			key={`${city.name}`}
			name={city.name}
			wind={city.wind}
			pressure={city.pressure}
			temperature={city.temperature}
			icon={city.icon}
			handleDeleteButtonClick={handleDeleteButtonClick}
			temperatureFilter={temperatureFilter}
		/>
	))
}

Card.propTypes = {
	cities: PropTypes.arrayOf(PropTypes.string),
	handleDeleteButtonClick: PropTypes.func.isRequired,
	temperatureFilter: PropTypes.number.isRequired,
}

export default CardList
