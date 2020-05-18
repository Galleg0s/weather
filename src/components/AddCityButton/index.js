import React from "react"
import PropTypes from "prop-types"
import { Paragraph, Button } from "../ui"

const AddCardButton = ({ handleAddButtonClick }) => {
	return (
		<Button onClick={handleAddButtonClick}>
			<Paragraph fontSize="35px" fontWeight="300" textAlign="center">
				+
			</Paragraph>
		</Button>
	)
}

AddCardButton.propTypes = {
	handleAddButtonClick: PropTypes.func.isRequired,
}

export default AddCardButton
