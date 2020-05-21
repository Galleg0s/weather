import React from "react"
import PropTypes from "prop-types"
import StyledGrid from "./styles"

const Grid = ({
	children,
	childrenMargins,
	alignItems,
	justifyContent,
	flexDirection,
}) => {
	return (
		<StyledGrid
			flexDirection={flexDirection}
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
	flexDirection: PropTypes.string,
}

Grid.defaultProps = {
	flexDirection: "row",
	childrenMargins: "0",
	alignItems: "stretch",
	justifyContent: "flex-start",
}

export default Grid
