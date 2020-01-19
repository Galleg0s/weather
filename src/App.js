import React from "react"
import {
	Autosuggest,
	AddCardButton,
	CardList,
	Range,
	Wrapper,
	Grid,
} from "./components"

const App = () => {
	return (
		<Wrapper>
			<Grid childrenMargins="0 0 30px 0">
				<Autosuggest />
				<AddCardButton />
				<Range />
			</Grid>
			<Grid childrenMargins="0 20px 20px 0">
				<CardList />
			</Grid>
		</Wrapper>
	)
}

export default App
