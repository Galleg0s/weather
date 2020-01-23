import React from "react"
import PropTypes from "prop-types"
import Paragraph from "../Paragraph"

const Hint = ({ message }) => {
	return (
		<Paragraph fontSize="16px" margins="0 20px 0 0" color="red">
			{message}
		</Paragraph>
	)
}

Hint.propTypes = {
	message: PropTypes.string.isRequired,
}

export default Hint
