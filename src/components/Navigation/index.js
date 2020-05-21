import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import { Typography, Grid } from "@material-ui/core"

const links = [
	{ title: "Main", path: "/" },
	{ title: "Weather", path: "/weather" },
	{ title: "News", path: "/news" },
]

const Navigation = ({ t }) => {
	return (
		<>
			{links.map(({ title, path }) => (
				<Grid item>
					<NavLink to={path} key={title}>
						<Typography variant="button">{t(title)}</Typography>
					</NavLink>
				</Grid>
			))}
		</>
	)
}

Navigation.propTypes = {
	t: PropTypes.func.isRequired,
}

export default Navigation
