import styled from "styled-components"

const StyledGrid = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	align-items: ${props => (props.alignItems ? props.alignItems : "stretch")};
	flex-direction: ${props =>
		props.flexDirection ? props.flexDirection : "row"};
	justify-content: ${props =>
		props.justifyContent ? props.justifyContent : "flex-strart"};
	& > * {
		margin: ${props =>
			props.childrenMargins ? props.childrenMargins : "0"} !important;
	}
`

export default StyledGrid
