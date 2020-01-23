import styled from "styled-components"

const StyledRange = styled.div`
	.input-range {
		position: relative;
		width: 250px;
		@media (max-width: 768px) {
			width: auto;
		}
	}
	.input-range__slider {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: #2c2c2c;
		border: 1px solid #eeeeee;
		border-radius: 6px;
		cursor: pointer;
		display: block;
		height: 18px;
		margin-left: -0.5rem;
		margin-top: -12px;
		outline: none;
		position: absolute;
		top: 50%;
		transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
		width: 10px;
	}
	.input-range__slider:active {
		transform: scale(1.3);
	}
	.input-range__slider:focus {
		box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2);
	}
	.input-range--disabled .input-range__slider {
		background: #cccccc;
		border: 1px solid #cccccc;
		box-shadow: none;
		transform: none;
	}
	.input-range__slider-container {
		transition: left 0.3s ease-out;
	}
	.input-range__label {
		color: #2c2c2c;
		font-size: 12px;
		transform: translateZ(0);
		white-space: nowrap;
	}
	.input-range__label--min,
	.input-range__label--max {
		display: none;
	}
	.input-range__label--value {
		position: absolute;
		top: 15px;
	}
	.input-range__label-container {
		left: -50%;
		position: relative;
	}
	.input-range__label--max .input-range__label-container {
		left: 50%;
	}
	.input-range__track {
		background: #808080;
		border-radius: 1px;
		cursor: pointer;
		display: block;
		height: 3px;
		position: relative;
		transition: left 0.3s ease-out, width 0.3s ease-out;
	}
	.input-range--disabled .input-range__track {
		background: #eeeeee;
	}
	.input-range__track--background {
		left: 0;
		position: absolute;
		right: 0;
		top: 50%;
	}
	.input-range__track--active {
		background: #eeeeee;
	}
`
const Wrapper = styled.div`
	margin-left: 20px !important;
	@media (max-width: 768px) {
		margin: 0 0 40px 0 !important;
	}
`

export { StyledRange, Wrapper }
