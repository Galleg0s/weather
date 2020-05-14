import React from "react"
import StyledButton from "./styles"

const SwitchLanguage = ({ changeLanguage }) => {
	return (
		<>
			<button
				type="button"
				value="ru"
				onClick={event => changeLanguage(event.target.value)}
			>
				ru
			</button>
			<button
				type="button"
				value="en"
				onClick={event => changeLanguage(event.target.value)}
			>
				en
			</button>
		</>
	)
}

export default SwitchLanguage
