import React from "react"
import StyledCard from "./styles"
import Paragraph from "../Paragraph"
import DeleteButton from "./DeleteButton"

const Card = ({ id, name, weather, handleDeleteButtonClick }) => {
	return (
		<StyledCard>
			<Paragraph fontSize="16px" fontWeight="bold" paddings="0 0 12px 0">
				{name}
			</Paragraph>
			<div>
				<img src="" alt="Погода" />
				<Paragraph fontSize="20px" fontWeight="700">
					{weather.temperature}
				</Paragraph>
			</div>
			<Paragraph fontSize="14px" paddings="0 0 6px 0">
				Ветер: {weather.wind}
			</Paragraph>
			<Paragraph fontSize="14px" paddings="0 0 6px 0">
				Давление: {weather.pressure}
			</Paragraph>
			<DeleteButton onClick={() => handleDeleteButtonClick(id)} />
		</StyledCard>
	)
}

export default Card
