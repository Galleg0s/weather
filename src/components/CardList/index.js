import React from "react"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import Card from "../Card"

const CardList = ({ cities, onButtonClick, temperatureFilter }) => {
	return cities.map(city => (
		<Grid item lg={3} key={`${city.name}`}>
			<Card
				name={city.name}
				wind={city.wind}
				pressure={city.pressure}
				temperature={city.temperature}
				icon={city.icon}
				handleDeleteButtonClick={onButtonClick}
				temperatureFilter={temperatureFilter}
			/>
		</Grid>
	))
}

Card.propTypes = {
	cities: PropTypes.arrayOf(PropTypes.string),
	handleDeleteButtonClick: PropTypes.func.isRequired,
	temperatureFilter: PropTypes.number.isRequired,
}

export default CardList
