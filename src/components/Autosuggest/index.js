import React, { useState } from "react"
import PropTypes from "prop-types"
import Autosuggest from "react-autosuggest"
// import "./styles.css"
import StyledAutosuggest from "./styles.js"

const renderSuggestion = suggestion => <div>{suggestion}</div>

const App = ({
	fetchSuggestions,
	suggestionList,
	setNextCityName,
	setSuggestionList,
}) => {
	const [value, setValue] = useState("")

	const onChange = (event, { newValue }) => {
		setValue(newValue)
	}

	const onSuggestionsFetchRequested = ({ value }) => {
		fetchSuggestions(value)
	}

	const onSuggestionsClearRequested = () => {
		setSuggestionList("")
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
		<StyledAutosuggest>
			<Autosuggest
				suggestions={suggestionList}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={inputProps}
			/>
		</StyledAutosuggest>
	)
}

App.propTypes = {
	fetchSuggestions: PropTypes.func.isRequired,
	suggestionList: PropTypes.arrayOf(PropTypes.string).isRequired,
	setNextCityName: PropTypes.func.isRequired,
	setSuggestionList: PropTypes.func.isRequired,
}

export default App
