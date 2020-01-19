import styled from "styled-components"

const StyledGrid = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	& > div {
		margin: ${props => (props.childrenMargins ? props.childrenMargins : 0)};
	}
`

export default StyledGrid
