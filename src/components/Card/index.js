import React from "react"
import StyledCard from "./styles"
import Paragraph from "../Paragraph"
import DeleteButton from "./DeleteButton"
import formatTemperature from "../../utils"
import Grid from "../Grid"

const Card = ({
	name,
	wind,
	pressure,
	temperature,
	icon,
	handleDeleteButtonClick,
	temperatureFilter,
}) => {
	const Icon = code => {
		return (
			<img
				width="50"
				height="50"
				src={`https://www.weatherbit.io/static/img/icons/${icon.code}.png`}
				alt={icon.description}
			/>
		)
	}

	return temperatureFilter <= temperature && wind ? (
		<StyledCard>
			<Paragraph fontSize="16px" fontWeight="bold" paddings="0 0 12px 0">
				{name}
			</Paragraph>
			<Grid alignItems="center">
				<Icon code={icon.code} description={icon.description} />
				<Paragraph fontSize="20px" fontWeight="700" margins="0 0 0 15px">
					{formatTemperature(temperature)}
				</Paragraph>
			</Grid>
			<Paragraph fontSize="14px" paddings="0 0 6px 0">
				Ветер: {wind} м/с
			</Paragraph>
			<Paragraph fontSize="14px" paddings="0 0 6px 0">
				Давление: {pressure} мм
			</Paragraph>
			<DeleteButton onClick={() => handleDeleteButtonClick(name)} />
		</StyledCard>
	) : null
}

export default Card
