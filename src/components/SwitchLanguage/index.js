import React from "react"
import PropTypes from "prop-types"
import { Button } from "../ui"

const SwitchLanguage = ({ changeLanguage }) => {
	return (
		<div>
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
		</div>
	)
}

SwitchLanguage.propTypes = {
	changeLanguage: PropTypes.func.isRequired,
}
export default SwitchLanguage
