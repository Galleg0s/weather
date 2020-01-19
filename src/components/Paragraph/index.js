import React from "react"
import StyledParagraph from "./styles"

const Paragraph = ({ children, ...otherProps }) => {
	return <StyledParagraph {...otherProps}>{children}</StyledParagraph>
}

export default Paragraph
