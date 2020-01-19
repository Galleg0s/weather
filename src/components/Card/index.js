import React from "react"
import StyledCard from "./styles"
import Paragraph from "../Paragraph"
import DeleteButton from "./DeleteButton"

const Card = () => {
	return (
		<StyledCard>
			<Paragraph fontSize="16px" fontWeight="bold" paddings="0 0 12px 0">
				Город
			</Paragraph>
			<div>
				<img src="" alt="Погода" />
				<Paragraph fontSize="20px" fontWeight="700">
					3
				</Paragraph>
			</div>
			<Paragraph fontSize="14px" paddings="0 0 6px 0">
				Ветер: 3 м/c
			</Paragraph>
			<Paragraph fontSize="14px" paddings="0 0 6px 0">
				Давление: 3 мм
			</Paragraph>

			<DeleteButton
				onClick={() => {
					console.log("Закрыть плашку")
				}}
			/>
		</StyledCard>
	)
}

export default Card
