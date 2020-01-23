import React from "react"
import PropTypes from "prop-types"
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
	return temperatureFilter <= temperature && wind ? (
		<StyledCard>
			<Paragraph fontSize="16px" fontWeight="bold" paddings="0 0 12px 0">
				{name}
			</Paragraph>
			<Grid alignItems="center">
				<img
					width="50"
					height="50"
					src={`https://www.weatherbit.io/static/img/icons/${icon.code}.png`}
					alt={icon.description}
				/>
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

Card.propTypes = {
	name: PropTypes.string.isRequired,
	wind: PropTypes.string.isRequired,
	pressure: PropTypes.string.isRequired,
	temperature: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	handleDeleteButtonClick: PropTypes.func.isRequired,
	temperatureFilter: PropTypes.number.isRequired,
}

export default Card
