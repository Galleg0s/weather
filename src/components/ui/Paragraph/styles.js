import styled from "styled-components"

const Paragraph = styled.p`
	font-family: "Roboto", Arial, sans-serif;
	font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
	font-weight: ${props => (props.fontWeight ? props.fontWeight : 400)};
	margin: ${props => (props.margins ? props.margins : 0)};
	padding: ${props => (props.paddings ? props.paddings : 0)};
	text-align: ${props => (props.textAlign ? props.textAlign : "left")};
	color: ${props => (props.color ? props.color : "")};
`

export default Paragraph
