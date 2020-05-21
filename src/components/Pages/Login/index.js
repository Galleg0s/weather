import React, { useState } from "react"
import { Button, Grid, Paragraph, Wrapper } from "../../ui"

const Login = ({ logIn }) => {
	const [state, setState] = useState({ login: "", password: "" })

	const { login, password } = state

	return (
		<Wrapper maxWidth="320px">
			<Grid childrenMargins="0 0 20px 0" flexDirection="column">
				<Paragraph>Войдите, чтобы увидеть содержимое сайта:</Paragraph>
				<Grid childrenMargins="0 0 10px 0" flexDirection="column">
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
					<Button
						type="submit"
						value="Выйти"
						onClick={e => {
							e.preventDefault()

							logIn({
								login,
								password,
							})
						}}
					>
						Войти
					</Button>
				</Grid>
			</Grid>
		</Wrapper>
	)
}

export default Login
