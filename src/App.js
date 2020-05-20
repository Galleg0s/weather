import React from "react"
import { withNamespaces } from "react-i18next"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Weather, News } from "./components/Pages"
import Navigation from "./components/Navigation"
import Login from "./components/Pages/Login"
import NotFound from "./components/Pages/NotFound"
import { Paragraph, Wrapper, Grid } from "./components/ui"
import { SwitchLanguage, LogOut } from "./components"
import * as actions from "./redux/actions"
import { getUserList, getUserStatus } from "./redux/selectors"

// сделать t через контекст

const App = ({ changeLanguage, t, userList, logIn, logOut, isLoggedIn }) => {
	return (
		<Wrapper>
			<Router>
				{isLoggedIn ? (
					<>
						<Grid childrenMargins="0 0 20px 0" justifyContent="space-between">
							<Navigation path="/" t={t} />
							<SwitchLanguage changeLanguage={changeLanguage} />
							<LogOut logOut={logOut} />
						</Grid>

						<Route
							path="/"
							exact
							render={() => (
								<Paragraph fontSize="30px" fontWeight="400">
									{t("Welcome")}, {userList[0].login}!
								</Paragraph>
							)}
						/>
						<Route path="/weather" component={Weather} />
						<Route path="/news" component={News} />
						<Redirect exact from="/login" to="/" />
					</>
				) : (
					<>
						<Redirect exact from="/" to="/login" />
						<Route path="/login" render={() => <Login logIn={logIn} />} />
					</>
				)}
			</Router>
		</Wrapper>
	)
}

const mapStateToProps = state => {
	return {
		userList: getUserList(state),
		isLoggedIn: getUserStatus(state),
	}
}

const mapDispatchToProps = dispatch => {
	const { changeLanguage, logIn, logOut, validate } = bindActionCreators(
		actions,
		dispatch
	)

	return {
		changeLanguage: language => changeLanguage(language),
		logIn: credentials => logIn(credentials),
		logOut,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNamespaces()(App))
