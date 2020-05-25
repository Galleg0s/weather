import React from "react"
import PropTypes from "prop-types"
import { Card as CardUI, CardContent, CardActions } from "@material-ui/core"
import { Paragraph } from "../ui"
import DeleteButton from "./DeleteButton"
import formatTemperature from "../../utils"

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
		<CardUI style={{ position: "relative" }}>
			<CardActions>
				<DeleteButton onClick={() => handleDeleteButtonClick(name)} />
			</CardActions>
			<CardContent>
				<Paragraph fontSize="16px" fontWeight="bold" paddings="0 0 12px 0">
					{name}
				</Paragraph>
				<div>
					<img
						width="50"
						height="50"
						src={`https://www.weatherbit.io/static/img/icons/${icon.code}.png`}
						alt={icon.description}
					/>
					<Paragraph fontSize="20px" fontWeight="700" margins="0 0 0 15px">
						{formatTemperature(temperature)}
					</Paragraph>
				</div>
				<Paragraph fontSize="14px" paddings="0 0 6px 0">
					Ветер: {wind} м/с
				</Paragraph>
				<Paragraph fontSize="14px" paddings="0 0 6px 0">
					Давление: {pressure} мм
				</Paragraph>
			</CardContent>
		</CardUI>
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
