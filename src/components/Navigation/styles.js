import styled from "styled-components"

const StyledNav = styled.nav`
	display: flex;
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

export default StyledNav
