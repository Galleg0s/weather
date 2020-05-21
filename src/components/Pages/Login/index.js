import React, { useState } from "react"
import { Button, TextField, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

const Login = ({ logIn }) => {
	const [state, setState] = useState({ login: "", password: "" })

	const { login, password } = state
	const [t] = useTranslation()

	return (
		<>
			<Typography variant="subtitle1" gutterBottom>
				{t("Login message")}
			</Typography>
			<TextField
				label={t("Login")}
				variant="outlined"
				margin="normal"
				helperText={t("Login helper")}
				fullWidth
				onChange={e => setState({ ...state, login: e.target.value })}
			/>
			<TextField
				type="password"
				label={t("Password")}
				variant="outlined"
				margin="normal"
				helperText={t("Login helper")}
				fullWidth
				onChange={e => setState({ ...state, password: e.target.value })}
			/>

			<Button
				variant="contained"
				color="primary"
				type="submit"
				value="Войти"
				onClick={e => {
					e.preventDefault()
					logIn({
						login,
						password,
					})
				}}
				fullWidth
			>
				{t("Log in")}
			</Button>
		</>
	)
}

Login.propTypes = {
	logIn: PropTypes.func.isRequired,
}

export default Login
