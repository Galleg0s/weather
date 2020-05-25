import React from "react"
import PropTypes from "prop-types"
import { Button, Typography } from "@material-ui/core"

const AddCardButton = ({ onButtonClick }) => {
	return (
		<Button color="primary" onClick={onButtonClick} value="city">
			<Typography variant="h4">+</Typography>
		</Button>
	)
}

AddCardButton.propTypes = {
	onButtonClick: PropTypes.func.isRequired,
}

export default AddCardButton
