import React from "react"
import Card from "../Card"

const CardList = ({ cities, handleDeleteButtonClick }) => {
	const getCities = data => {
		return data.map((city, index) => (
			<Card
				// eslint-disable-next-line react/no-array-index-key
				key={`${city.name}${index}`}
				name={city.name}
				weather={city.weather}
				handleDeleteButtonClick={handleDeleteButtonClick}
			/>
		))
	}

	return getCities(cities)
}

export default CardList
