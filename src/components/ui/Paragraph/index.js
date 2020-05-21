import React from "react"
import PropTypes from "prop-types"
import StyledParagraph from "./styles"

const Paragraph = ({
	children,
	fontSize,
	fontWeight,
	paddings,
	textAlign,
	color,
}) => {
	return (
		<StyledParagraph
			fontSize={fontSize}
			fontWeight={fontWeight}
			paddings={paddings}
			textAlign={textAlign}
			color={color}
		>
			{children}
		</StyledParagraph>
	)
}

Paragraph.propTypes = {
	children: PropTypes.node.isRequired,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string,
	paddings: PropTypes.string,
	textAlign: PropTypes.string,
	color: PropTypes.string,
}

Paragraph.defaultProps = {
	fontSize: "16px",
	fontWeight: "400",
	paddings: "0",
	textAlign: "left",
	color: "",
}
export default Paragraph
