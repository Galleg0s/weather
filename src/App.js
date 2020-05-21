import React from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Container, Grid, Typography, makeStyles } from "@material-ui/core"
import { useTranslation } from "react-i18next"
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

const App = ({ changeLanguage, userList, logIn, logOut, isLoggedIn }) => {
	const { containerCls } = useStyles()
	const [t] = useTranslation()

	return (
		<Container className={containerCls}>
			<Grid container item xs={12}>
				<Grid item container lg={10} spacing={8}>
					<Router>
						{isLoggedIn ? (
							<>
								<Grid item container lg={12} alignItems="baseline">
									<Grid item container spacing={2} lg={4}>
										<Navigation path="/" />
									</Grid>
									<Grid item lg={8}>
										<LogOut logOut={logOut} />
									</Grid>
								</Grid>

								<Grid item lg={12}>
									<Route
										path="/"
										exact
										render={() => (
											<Typography variant="h6">
												{t("Welcome")}, {userList[0].login}!
											</Typography>
										)}
									/>

									<Route path="/weather" component={Weather} />
									<Route path="/news" component={News} />
									<Redirect exact from="/login" to="/" />
								</Grid>
							</>
						) : (
							<>
								<Redirect exact from="/" to="/login" />
								<Route
									path="/login"
									render={() => {
										return (
											<Grid item container justify="center">
												<Grid item lg={4}>
													<Login logIn={logIn} />
												</Grid>
											</Grid>
										)
									}}
								/>
							</>
						)}
					</Router>
				</Grid>
				<Grid item lg={2}>
					<SwitchLanguage changeLanguage={changeLanguage} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
