import styled from "styled-components"

const StyledGrid = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	align-items: ${props => (props.alignItems ? props.alignItems : "stretch")};
	justify-content: ${props =>
		props.justifyContent ? props.justifyContent : "flex-strart"};
	& > div {
		margin: ${props => (props.childrenMargins ? props.childrenMargins : "0")};
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

export default StyledGrid
