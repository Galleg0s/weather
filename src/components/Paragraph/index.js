import React from "react"
import PropTypes from "prop-types"
import StyledParagraph from "./styles"

const Paragraph = ({ children, fontSize, fontWeight, margins, paddings }) => {
	return (
		<StyledParagraph
			fontSize={fontSize}
			fontWeight={fontWeight}
			margins={margins}
			paddings={paddings}
		>
			{children}
		</StyledParagraph>
	)
}

Paragraph.propTypes = {
	children: PropTypes.node.isRequired,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string,
	margins: PropTypes.string,
	paddings: PropTypes.string,
}

Paragraph.defaultProps = {
	fontSize: "16px",
	fontWeight: "400",
	margins: "0",
	paddings: "0",
}
export default Paragraph
