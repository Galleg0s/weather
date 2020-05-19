import React from "react"

const Logout = ({ logOut, user }) => {
	return (
		<button type="button" onClick={logOut}>
			Выйти
		</button>
	)
}

export default Logout
