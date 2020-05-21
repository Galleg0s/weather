import React from "react"
import { NavLink } from "react-router-dom"
import { Typography, Grid } from "@material-ui/core"
import { useTranslation } from "react-i18next"

const links = [
	{ title: "Main", path: "/" },
	{ title: "Weather", path: "/weather" },
	{ title: "News", path: "/news" },
]

const Navigation = () => {
	const [t] = useTranslation()

	return (
		<>
			{links.map(({ title, path }) => (
				<Grid item key={title}>
					<NavLink to={path} key={title}>
						<Typography variant="button">{t(title)}</Typography>
					</NavLink>
				</Grid>
			))}
		</>
	)
}

export default Navigation
