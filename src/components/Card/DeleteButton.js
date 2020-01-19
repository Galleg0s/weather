import styled from "styled-components"

const StyledCloseButton = styled.button`
	position: absolute;
	right: 0;
	top: 0;
	border: none;
	font-size: 40px;
	font-weight: 300;
	color: #aaa;
	width: 40px;
	height: 40px;
	cursor: pointer;
	background: none;
	outline: none;
	&::before {
		content: "+";
		display: block;
		transform: translate(50%, -50%) rotate(45deg);
		top: 50%;
		right: 50%;
		position: absolute;
	}
`

export default StyledCloseButton
