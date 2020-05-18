import React from "react"
import { Button } from "../ui"

const SwitchLanguage = ({ changeLanguage }) => {
	return (
		<>
			<Button
				type="button"
				value="ru"
				onClick={event => changeLanguage(event.target.value)}
			>
				ru
			</Button>
			<Button
				type="button"
				value="en"
				onClick={event => changeLanguage(event.target.value)}
			>
				en
			</Button>
		</>
	)
}

export default SwitchLanguage