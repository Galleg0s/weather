import React from "react"
import ReactDOM from "react-dom"
import { I18nextProvider } from "react-i18next"
import { Provider } from "react-redux"
import store from "./redux/configureStore"
import "typeface-roboto"
import i18n from "./i18n"
import App from "./App"
import "normalize.css"

ReactDOM.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n}>
			<App />
		</I18nextProvider>
	</Provider>,
	document.getElementById("root")
)
