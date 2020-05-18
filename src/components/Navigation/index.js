import React from "react"
import { NavLink } from "react-router-dom"
import { Paragraph } from "../ui"
import StyledList from "./styles.js"

const Navigation = ({ t }) => {
	return (
		<StyledList>
			<NavLink to="/">
				<Paragraph fontSize="22px" fontWeight="400" textAlign="center">
					{t("Main")}
				</Paragraph>
			</NavLink>
			<NavLink to="/weather">
				<Paragraph fontSize="22px" fontWeight="400" textAlign="center">
					{t("Weather")}
				</Paragraph>
			</NavLink>
			<NavLink to="/news">
				<Paragraph fontSize="22px" fontWeight="400" textAlign="center">
					{t("News")}
				</Paragraph>
			</NavLink>
		</StyledList>
	)
}

export default Navigation
