import React from "react"
import PropTypes from "prop-types"
import StyledButton from "./styles"
import { Paragraph } from "../ui"

const AddCardButton = ({ handleAddButtonClick }) => {
	return (
		<StyledButton onClick={handleAddButtonClick}>
			<Paragraph fontSize="35px" fontWeight="300">
				+
			</Paragraph>
		</StyledButton>
	)
}

AddCardButton.propTypes = {
	handleAddButtonClick: PropTypes.func.isRequired,
}

export default AddCardButton
