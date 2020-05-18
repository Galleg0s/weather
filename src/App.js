import React from "react"
import { withNamespaces } from "react-i18next"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Weather, News } from "./components/Pages"
import Navigation from "./components/Navigation"
import { Paragraph, Wrapper } from "./components/ui"

const App = () => {
	return (
		<Wrapper>
			<Router>
				<Navigation path="/" />
				<Route
					path="/"
					exact
					render={() => (
						<Paragraph fontSize="35px" fontWeight="400">
							Добро пожаловать, Пользователь!
						</Paragraph>
					)}
				/>
				<Route path="/weather" component={Weather} />
				<Route path="/news" component={News} />
			</Router>
		</Wrapper>
	)
}

export default withNamespaces()(App)
