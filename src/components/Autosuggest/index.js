import React, { useState } from "react"
import PropTypes from "prop-types"
import Autosuggest from "react-autosuggest"
import "./styles.css"

const renderSuggestion = suggestion => <div>{suggestion}</div>

const App = ({ fetchSuggestions, suggestionList, setNextCityName }) => {
	const [value, setValue] = useState("")
	const [suggestions, setSuggestions] = useState([])

	const onChange = (event, { newValue }) => {
		setValue(newValue)
	}

	const onSuggestionsFetchRequested = ({ value }) => {
		const inputValue = value.trim().toLowerCase()
		const inputLength = inputValue.length

		if (inputLength === "" || inputLength < 2) {
			return []
		}

		fetchSuggestions(inputValue)
	}

	const onSuggestionsClearRequested = () => {
		setSuggestions([])
	}

	const getSuggestionValue = suggestion => {
		setNextCityName(suggestion)
		return suggestion
	}

	const inputProps = {
		placeholder: "Введите город",
		value,
		onChange,
	}

	return (
		<Autosuggest
			suggestions={suggestionList}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			getSuggestionValue={getSuggestionValue}
			renderSuggestion={renderSuggestion}
			inputProps={inputProps}
		/>
	)
}

App.propTypes = {
	fetchSuggestions: PropTypes.func.isRequired,
	suggestionList: PropTypes.arrayOf(PropTypes.string).isRequired,
	setNextCityName: PropTypes.func.isRequired,
}

export default App
