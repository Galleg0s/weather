import React from "react"
import { withNamespaces } from "react-i18next"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Weather, News } from "./components/Pages"
import Navigation from "./components/Navigation"
import Login from "./components/Pages/Login"
import NotFound from "./components/Pages/NotFound"
import { Paragraph, Wrapper, Grid } from "./components/ui"
import { SwitchLanguage, LogOut } from "./components"
import * as actions from "./redux/actions"
import { getUser } from "./redux/selectors"

// сделать t через контекст

const App = ({ changeLanguage, t, user, logIn, logOut }) => {
	return (
		<Wrapper>
			<Router>
				{user.isLoggedIn ? (
					<>
						<Grid childrenMargins="0 0 20px 0" justifyContent="space-between">
							<Navigation path="/" t={t} />
							<SwitchLanguage changeLanguage={changeLanguage} />
							<LogOut logOut={() => logOut(user)} />
						</Grid>

						<Route
							path="/"
							exact
							render={() => (
								<Paragraph fontSize="35px" fontWeight="400">
									{t("Welcome")}, Пользователь!
								</Paragraph>
							)}
						/>
						<Route path="/weather" component={Weather} />
						<Route path="/news" component={News} />
						{/* <Route component={NotFound} /> */}
					</>
				) : (
					<>
						<Route
							path="/login"
							render={() => (
								<Login isLoggedIn={user.isLoggedIn} logIn={logIn} />
							)}
						/>
					</>
				)}
				{/* <Redirect exact from="/" to="/login" /> */}
			</Router>
		</Wrapper>
	)
}

const mapStateToProps = state => {
	return {
		user: getUser(state),
	}
}

const mapDispatchToProps = dispatch => {
	const { changeLanguage, logIn, logOut } = bindActionCreators(
		actions,
		dispatch
	)

	return {
		changeLanguage: language => changeLanguage(language),
		logIn: credentials => logIn(credentials),
		logOut: user => logOut(user),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNamespaces()(App))
