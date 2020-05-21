import React, { useState } from "react"
import { Button, TextField, Typography } from "@material-ui/core"
import PropTypes from "prop-types"

const Login = ({ logIn }) => {
	const [state, setState] = useState({ login: "", password: "" })

	const { login, password } = state

	return (
		<>
			<Typography variant="subtitle1" gutterBottom>
				Войдите, чтобы увидеть содержимое сайта:
			</Typography>
			<TextField
				label="Логин"
				variant="outlined"
				margin="normal"
				helperText="Логин должен содержать от 2 до 50 символов"
				fullWidth
				onChange={e => setState({ ...state, login: e.target.value })}
			/>
			<TextField
				type="password"
				label="Пароль"
				variant="outlined"
				margin="normal"
				helperText="Пароль должен содержать от 2 до 50 символов"
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
				Войти
			</Button>
		</>
	)
}

Login.propTypes = {
	logIn: PropTypes.func.isRequired,
}

export default Login
