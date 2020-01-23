import React, { useState } from "react"
import PropTypes from "prop-types"
import Autosuggest from "react-autosuggest"
import StyledAutosuggest from "./styles"

const renderSuggestion = suggestion => <div>{suggestion}</div>

const App = ({
	fetchSuggestions,
	suggestionList,
	setNextCityName,
	setSuggestionList,
	setHint,
}) => {
	const [value, setValue] = useState("")

	const onChange = (event, { newValue }) => {
		setValue(newValue)
	}

	const onSuggestionsFetchRequested = ({ value }) => {
		fetchSuggestions(value)
	}

	const onSuggestionsClearRequested = () => {
		setHint("")
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
	setHint: PropTypes.func.isRequired,
}

export default App
