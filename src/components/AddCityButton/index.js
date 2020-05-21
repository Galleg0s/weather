import React from "react"
import PropTypes from "prop-types"
import { Button, Typography } from "@material-ui/core"

const AddCardButton = ({ handleAddButtonClick }) => {
	return (
		<Button
			variant="outlined"
			color="primary"
			onClick={handleAddButtonClick}
			value="city"
		>
			<Typography>+</Typography>
		</Button>
	)
}

AddCardButton.propTypes = {
	handleAddButtonClick: PropTypes.func.isRequired,
}

export default AddCardButton
