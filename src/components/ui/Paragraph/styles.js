import styled from "styled-components"

const Paragraph = styled.p`
	font-family: "Roboto", Arial, sans-serif;
	font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
	font-weight: ${props => (props.fontWeight ? props.fontWeight : 400)};
	padding: ${props => (props.paddings ? props.paddings : 0)};
	text-align: ${props => (props.textAlign ? props.textAlign : "left")};
	color: ${props => (props.color ? props.color : "")};
	margin: 0;
`

export default Paragraph
