import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import detector from "i18next-browser-languagedetector"
import translationEN from "./locales/en.json"
import translationRU from "./locales/ru.json"

let language = window.navigator
	? window.navigator.language ||
	  window.navigator.systemLanguage ||
	  window.navigator.userLanguage
	: "ru"
language = language.substr(0, 2).toLowerCase()

// the translations
const resources = {
	en: {
		translation: translationEN,
	},
	ru: {
		translation: translationRU,
	},
}

i18n
	.use(detector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: language,
		fallbackLng: "ru", // use en if detected lng is not available

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	})

export default i18n
