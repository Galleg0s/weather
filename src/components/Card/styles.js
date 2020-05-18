import styled from "styled-components"

const StyledCard = styled.div`
	position: relative;
	width: 200px;
	display: flex;
	flex-direction: column;
	border: 1px solid #aaa;
	padding: 10px 30px 10px 10px;
	@media (max-width: 768px) {
		width: auto;
		margin: 0 0 20px 0 !important;
	}
`
export default StyledCard
