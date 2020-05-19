import React, { Component } from "react"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			login: "",
			password: "",
		}
	}

	render() {
		const { logIn } = this.props
		const { login, password } = this.state

		return (
			<form>
				<p>Войдите, чтобы увидеть содержимое сайта:</p>
				<input
					type="text"
					placeholder="Логин"
					minLength="2"
					maxLength="50"
					value={login}
					onChange={e => {
						this.setState({
							login: e.target.value,
						})
					}}
				/>
				<input
					type="password"
					placeholder="Пароль"
					minLength="6"
					maxLength="20"
					value={password}
					onChange={e => {
						this.setState({
							password: e.target.value,
						})
					}}
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
}
export default Login
