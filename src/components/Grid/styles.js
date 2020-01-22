import styled from "styled-components"

const StyledGrid = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	& > div {
		margin: ${props => (props.childrenMargins ? props.childrenMargins : 0)};
	}
	align-items: ${props => (props.alignItems ? props.alignItems : "stretch")};
`

export default StyledGrid
