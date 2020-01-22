import React from "react"
import StyledGrid from "./styles"

const Grid = ({ children, childrenMargins, alignItems }) => {
	return (
		<StyledGrid childrenMargins={childrenMargins} alignItems={alignItems}>
			{children}
		</StyledGrid>
	)
}

export default Grid
