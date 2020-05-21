import React from "react"
import { Button } from "../ui"

const Logout = ({ logOut }) => {
	return (
		<Button value="Выйти" onClick={logOut}>
			Выйти
		</Button>
	)
}

export default Logout
