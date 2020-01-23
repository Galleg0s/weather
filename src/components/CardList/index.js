import React from "react"
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

export default CardList
