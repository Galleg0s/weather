import React from "react"
import PropTypes from "prop-types"
import StyledWrapper from "./styles"

const Wrapper = ({ children, maxWidth, paddings }) => {
	return (
		<StyledWrapper maxWidth={maxWidth} paddings={paddings}>
			{children}
		</StyledWrapper>
	)
}

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	maxWidth: PropTypes.string.isRequired,
	paddings: PropTypes.string.isRequired,
}

export default Wrapper
