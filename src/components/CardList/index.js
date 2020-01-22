import React from "react"
import Card from "../Card"

const CardList = ({ cities, handleDeleteButtonClick }) => {
	return cities.map(city => (
		<Card
			key={`${city.name}`}
			name={city.name}
			wind={city.wind}
			pressure={city.pressure}
			temperature={city.temperature}
			icon={city.icon}
			handleDeleteButtonClick={handleDeleteButtonClick}
		/>
	))
}

export default CardList
