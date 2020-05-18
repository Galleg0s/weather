import styled from "styled-components"

const StyledList = styled.nav`
	display: flex;
	margin-bottom: 30px;
	padding: 0;
	& > a {
		padding-right: 10px;
		cursor: pointer;
		text-decoration: none;
		color: #2c2c2c;
	}
	& > a:hover {
		color: #aaa;
	}
`

export default StyledList
