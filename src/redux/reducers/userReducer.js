import { LOGIN, LOGOUT } from "../constants"

const initialState = [
	{
		login: "admin",
		password: "123456",
		isLoggedIn: false,
	},
]

const userReduser = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
		case LOGOUT: {
			const index = state.findIndex(user => {
				return (
					user.login === action.payload.login &&
					user.password === action.payload.password
				)
			})

			if (index !== -1) {
				return [
					...state.slice(0, index),
					{
						...state[index],
						isLoggedIn: !state[index].isLoggedIn,
					},
					...state.slice(index + 1),
				]
			}
			return state
		}
		default:
			return state
	}
}

export default userReduser
