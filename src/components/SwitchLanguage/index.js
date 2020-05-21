import React from "react"
import PropTypes from "prop-types"
import { Button, Grid } from "@material-ui/core"

const SwitchLanguage = ({ changeLanguage }) => {
	const languages = ["en", "ru"]

	return (
		<Grid item>
			{languages.map(language => {
				return (
					<Button
						key={language}
						type="button"
						value={language}
						onClick={event => {
							changeLanguage(event.currentTarget.value)
						}}
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
