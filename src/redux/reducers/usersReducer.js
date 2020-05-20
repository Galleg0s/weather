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
		case LOGIN:
		case LOGOUT: {
			return {
				...state,
				isLoggedIn: !state.isLoggedIn,
			}
		}
		default:
			return state
	}
}

export default userReduser
