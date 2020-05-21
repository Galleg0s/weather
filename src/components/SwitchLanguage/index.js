import React from "react"
import PropTypes from "prop-types"
import { Button, Grid } from "../ui"

const SwitchLanguage = ({ changeLanguage }) => {
	const languages = ["en", "ru"]

	return (
		<Grid childrenMargins="0 10px 0 0">
			{languages.map(language => {
				return (
					<Button
						key={language}
						type="button"
						value={language}
						onClick={event => changeLanguage(event.target.value)}
					>
						{language}
					</Button>
				)
			})}
		</Grid>
	)
}

SwitchLanguage.propTypes = {
	changeLanguage: PropTypes.func.isRequired,
}
export default SwitchLanguage
