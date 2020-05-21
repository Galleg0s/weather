import React from "react"
import PropTypes from "prop-types"
import StyledButton from "./styles"

const Button = ({ value, type, children, onClick }) => {
	return (
		<StyledButton type={type} value={value} onClick={onClick}>
			{children}
		</StyledButton>
	)
}

Button.defaultProps = {
	type: "button",
}
Button.propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string,
}

export default Button
