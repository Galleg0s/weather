import React, { useState } from "react"

const Login = ({ logIn }) => {
	const [state, setState] = useState({ login: "", password: "" })

	const { login, password } = state
	return (
		<form>
			<p>Войдите, чтобы увидеть содержимое сайта:</p>
			<input
				type="text"
				placeholder="Логин"
				minLength="2"
				maxLength="50"
				value={login}
				onChange={e => setState({ ...state, login: e.target.value })}
			/>
			<input
				type="password"
				placeholder="Пароль"
				minLength="6"
				maxLength="20"
				value={password}
				onChange={e => setState({ ...state, password: e.target.value })}
			/>
			<button
				type="submit"
				onClick={e => {
					e.preventDefault()
					logIn({
						login,
						password,
					})
				}}
			>
				Войти
			</button>
		</form>
	)
}

export default Login
