import React from "react"
import { Button } from "@material-ui/core"
import { useTranslation } from "react-i18next"

const Logout = ({ logOut }) => {
	const [t] = useTranslation()

	return (
		<Button value="Выйти" onClick={logOut}>
			{t("Logout")}
		</Button>
	)
}

export default Logout
