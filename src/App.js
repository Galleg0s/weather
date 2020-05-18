import React from "react"
import { withNamespaces } from "react-i18next"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Weather, News } from "./components/Pages"
import Navigation from "./components/Navigation"
import Login from "./components/Login"
import { Paragraph, Wrapper, Grid } from "./components/ui"
import { SwitchLanguage } from "./components"
import * as actions from "./redux/actions"

// сделать t через контекст

const App = ({ changeLanguage, t }) => {
	return (
		<Wrapper>
			<Router>
				<Route path="/login" component={Login} />
				<Grid childrenMargins="0 0 20px 0" justifyContent="space-between">
					<Navigation path="/" t={t} />
					<SwitchLanguage changeLanguage={changeLanguage} />
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
			</Router>
		</Wrapper>
	)
}

const mapStateToProps = state => {
	return state
}

const mapDispatchToProps = dispatch => {
	const { changeLanguage } = bindActionCreators(actions, dispatch)

	return {
		changeLanguage: language => changeLanguage(language),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNamespaces()(App))
