import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import { Paragraph } from "../ui"
import StyledList from "./styles"

const links = [
	{ title: "Main", path: "/" },
	{ title: "Weather", path: "/weather" },
	{ title: "News", path: "/news" },
]

const Navigation = ({ t }) => {
	return (
		<StyledList>
			{links.map(({ title, path }) => (
				<NavLink to={path} key={title}>
					<Paragraph fontSize="22px" fontWeight="400" textAlign="center">
						{t(title)}
					</Paragraph>
				</NavLink>
			))}
		</StyledList>
	)
}

Navigation.propTypes = {
	t: PropTypes.func.isRequired,
}

export default Navigation
