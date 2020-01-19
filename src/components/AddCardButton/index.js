import React from "react"
import StyledButton from "./styles"
import Paragraph from "../Paragraph"

const AddCardButton = () => {
	return (
		<StyledButton>
			<Paragraph fontSize="35px" fontWeight="300">
				+
			</Paragraph>
		</StyledButton>
	)
}

export default AddCardButton
