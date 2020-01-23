import styled from "styled-components"

const StyledAutosuggest = styled.div`
	.react-autosuggest__container {
		position: relative;
		margin-right: 5px;
		@media (max-width: 768px) {
			margin-right: 0;
		}
	}

	.react-autosuggest__input {
		width: 100%;
		box-sizing: border-box;
		padding: 13px 20px;
		font-family: Arial, sans-serif;
		font-weight: 400;
		font-size: 30px;
		border: 1px solid #aaa;
	}

	.react-autosuggest__input--focused {
		outline: none;
	}

	.react-autosuggest__suggestions-container {
		display: none;
	}

	.react-autosuggest__suggestions-container--open {
		display: block;
		position: absolute;
		box-sizing: border-box;
		top: 61px;
		width: 100%;
		border: 1px solid #aaa;
		color: #000;
		background-color: #fff;
		font-weight: 400;
		font-size: 30px;
		z-index: 2;
		@media (max-width: 768px) {
			width: 100%;
		}
	}

	.react-autosuggest__suggestions-list {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.react-autosuggest__suggestion {
		cursor: pointer;
		padding: 10px 20px;
	}

	.react-autosuggest__suggestion--highlighted {
		background-color: #ddd;
	}

	.react-autosuggest__suggestion-match {
		font-weight: 700;
	}
`

export default StyledAutosuggest
