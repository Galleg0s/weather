import styled from "styled-components"

const StyledWrapper = styled.div`
	margin: 60px auto;
	max-width: ${props => (props.maxWidth ? props.maxWidth : "")};
	min-width: 280px;
	font-family: "Roboto", Arial, sans-serif;
	padding: ${props => (props.paddings ? props.paddings : "0")};
`

export default StyledWrapper
