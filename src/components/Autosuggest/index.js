import React from "react"
import "./styles.css"
import ReactAutosuggest from "react-autosuggest"
import AutosuggestHighlightMatch from "autosuggest-highlight/match"
import AutosuggestHighlightParse from "autosuggest-highlight/parse"

const languages = [
	{
		name: "C",
		year: 1972,
	},
	{
		name: "C#",
		year: 2000,
	},
	{
		name: "C++",
		year: 1983,
	},
	{
		name: "Clojure",
		year: 2007,
	},
	{
		name: "Elm",
		year: 2012,
	},
	{
		name: "Go",
		year: 2009,
	},
	{
		name: "Haskell",
		year: 1990,
	},
	{
		name: "Java",
		year: 1995,
	},
	{
		name: "Javascript",
		year: 1995,
	},
	{
		name: "Perl",
		year: 1987,
	},
	{
		name: "PHP",
		year: 1995,
	},
	{
		name: "Python",
		year: 1991,
	},
	{
		name: "Ruby",
		year: 1995,
	},
	{
		name: "Scala",
		year: 2003,
	},
]

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function getSuggestions(value) {
	const escapedValue = escapeRegexCharacters(value.trim())

	if (escapedValue === "") {
		return []
	}

	const regex = new RegExp("^" + escapedValue, "i")

	return languages.filter(language => regex.test(language.name))
}

function getSuggestionValue(suggestion) {
	return suggestion.name
}

function renderSuggestion(suggestion, { query }) {
	const matches = AutosuggestHighlightMatch(suggestion.name, query)
	const parts = AutosuggestHighlightParse(suggestion.name, matches)

	return (
		<span>
			{parts.map((part, index) => {
				const className = part.highlight
					? "react-autosuggest__suggestion-match"
					: null

				return (
					<span className={className} key={index}>
						{part.text}
					</span>
				)
			})}
		</span>
	)
}

class Autosuggest extends React.Component {
	constructor() {
		super()

		this.state = {
			value: "",
			suggestions: [],
		}
	}

	onChangeHandler = ({ newValue, method }) => {
		this.setState({
			value: newValue,
		})
	}

	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value),
		})
	}

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		})
	}

	render() {
		const { value, suggestions } = this.state
		const inputProps = {
			placeholder: "Введите город",
			value,
			onChange: this.onChangeHandler,
		}

		return (
			<ReactAutosuggest
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={inputProps}
			/>
		)
	}
}

export default Autosuggest
// const Autocomplete = ({children}) => {
//   return (
//       <StyledAutocomplete>

//       </StyledAutocomplete>
//   );
// };
