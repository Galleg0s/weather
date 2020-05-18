import React from "react"
import { NavLink } from "react-router-dom"
import { Paragraph } from "../ui"
import StyledList from "./styles.js"

const Navigation = () => {
	return (
		<StyledList>
			<NavLink to="/">
				<Paragraph fontSize="22px" fontWeight="400" textAlign="center">
					Главная
				</Paragraph>
			</NavLink>
			<NavLink to="/weather">
				<Paragraph fontSize="22px" fontWeight="400" textAlign="center">
					Погода
				</Paragraph>
			</NavLink>
			<NavLink to="/news">
				<Paragraph fontSize="22px" fontWeight="400" textAlign="center">
					Новости
				</Paragraph>
			</NavLink>
		</StyledList>
	)
}

export default Navigation
