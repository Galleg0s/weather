import React from "react"
import { withNamespaces } from "react-i18next"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Container, Grid, Typography, makeStyles } from "@material-ui/core"
import { Weather, News } from "./components/Pages"
import Navigation from "./components/Navigation"
import Login from "./components/Pages/Login"
import { SwitchLanguage, LogOut } from "./components"
import * as actions from "./redux/actions"
import { getUserList, getUserStatus } from "./redux/selectors"

// сделать t через контекст
const useStyles = makeStyles({
	containerCls: {
		marginTop: "50px",
	},
})

const App = ({ changeLanguage, t, userList, logIn, logOut, isLoggedIn }) => {
	const { containerCls } = useStyles()
	return (
		<Container className={containerCls}>
			<Grid container item xs={12} justify="center">
				<Grid item xs={12} lg={4}>
					<Router>
						{isLoggedIn ? (
							<>
								<Navigation path="/" t={t} />
								<SwitchLanguage changeLanguage={changeLanguage} />
								<LogOut logOut={logOut} />

								<Route
									path="/"
									exact
									render={() => (
										<Typography variant="h2">
											{t("Welcome")}, {userList[0].login}!
										</Typography>
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
				</Grid>
			</Grid>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		userList: getUserList(state),
		isLoggedIn: getUserStatus(state),
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
		logOut,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNamespaces()(App))
