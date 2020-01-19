import React from "react"
import Card from "../Card"

const CardList = ({ cities, handleDeleteButtonClick }) => {
	const getCities = cities => {
		return cities.map(city => (
			<Card
				key={city.id}
				id={city.id}
				name={city.name}
				weather={city.weather}
				handleDeleteButtonClick={handleDeleteButtonClick}
			/>
		))
	}

	return getCities(cities)
}

export default CardList
