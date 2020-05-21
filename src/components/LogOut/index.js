import React from "react"
import { Button, Link } from "@material-ui/core"

const Logout = ({ logOut }) => {
	return (
		<Button value="Выйти" onClick={logOut}>
			Выйти
		</Button>
	)
}

export default Logout
