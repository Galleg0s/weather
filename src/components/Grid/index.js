import React from "react"
import StyledGrid from "./styles"

const Grid = ({ children, childrenMargins }) => {
	return <StyledGrid childrenMargins={childrenMargins}>{children}</StyledGrid>
}

export default Grid
