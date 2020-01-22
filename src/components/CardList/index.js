import React from "react"
import Card from "../Card"

const CardList = ({ cities, handleDeleteButtonClick }) => {
	if (cities.length !== 0) debugger
	return cities.map((city, index) => (
		<Card
			// eslint-disable-next-line react/no-array-index-key
			key={`${city.name}${index}`}
			name={city.name}
			weather={city.weather}
			handleDeleteButtonClick={handleDeleteButtonClick}
		/>
	))
}

export default CardList
