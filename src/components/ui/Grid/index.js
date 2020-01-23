import React from "react"
import PropTypes from "prop-types"
import StyledGrid from "./styles"

const Grid = ({ children, childrenMargins, alignItems, justifyContent }) => {
	return (
		<StyledGrid
			childrenMargins={childrenMargins}
			alignItems={alignItems}
			justifyContent={justifyContent}
		>
			{children}
		</StyledGrid>
	)
}

Grid.propTypes = {
	children: PropTypes.node.isRequired,
	childrenMargins: PropTypes.string,
	alignItems: PropTypes.string,
	justifyContent: PropTypes.string,
}

Grid.defaultProps = {
	childrenMargins: "0",
	alignItems: "stretch",
	justifyContent: "flex-start",
}

export default Grid
