import React from "react"
import PropTypes from "prop-types"
import StyledGrid from "./styles"

const Grid = ({ children, childrenMargins, alignItems }) => {
	return (
		<StyledGrid childrenMargins={childrenMargins} alignItems={alignItems}>
			{children}
		</StyledGrid>
	)
}

Grid.propTypes = {
	children: PropTypes.node.isRequired,
	childrenMargins: PropTypes.string,
	alignItems: PropTypes.string,
}

Grid.defaultProps = {
	childrenMargins: "0",
	alignItems: "stretch",
}

export default Grid
