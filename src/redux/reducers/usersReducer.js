import { LOGIN, LOGOUT } from "../constants"

const initialState = {
	isLoggedIn: false,
	list: [
		{
			login: "admin",
			password: "123456",
		},
	],
}

const userReduser = (state = initialState, action) => {
	switch (action.type) {
		case LOGOUT: {
			return {
				...state,
				isLoggedIn: false,
			}
		}
		case LOGIN: {
			const index = state.list.findIndex(user => {
				return (
					user.login === action.payload.login &&
					user.password === action.payload.password
				)
			})

			if (index !== -1) {
				return {
					...state,
					isLoggedIn: true,
				}
			}
			return state
		}
		default:
			return state
	}
}

export default userReduser
