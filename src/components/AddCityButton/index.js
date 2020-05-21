import React from "react"
import PropTypes from "prop-types"
import { Button } from "@material-ui/core"
import { Paragraph } from "../ui"

const AddCardButton = ({ handleAddButtonClick }) => {
	return (
		<Button color="primary" marginsonClick={handleAddButtonClick} value="city">
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
