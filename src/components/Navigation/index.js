import React from "react"
import { NavLink } from "react-router-dom"
import { Paragraph } from "../ui"
import StyledList from "./styles.js"

const links = [
	{ title: "Main", path: "/" },
	{ title: "Weather", path: "/weather" },
	{ title: "News", path: "/news" },
]

const Navigation = ({ t }) => {
	return (
		<StyledList>
			{links.map(({ title, path }) => (
				<NavLink to={path}>
					<Paragraph fontSize="22px" fontWeight="400" textAlign="center">
						{t(title)}
					</Paragraph>
				</NavLink>
			))}
		</StyledList>
	)
}

export default Navigation
