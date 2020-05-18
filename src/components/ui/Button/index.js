import React from "react"
import PropTypes from "prop-types"
import StyledButton from "./styles"

const Button = ({ value, children, onClick }) => {
	return (
		<StyledButton type="button" value={value} onClick={onClick}>
			{children}
		</StyledButton>
	)
}

Button.propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Button
