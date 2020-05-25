// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { Autocomplete as AutocompleteUI } from "@material-ui/lab"
import CircularProgress from "@material-ui/core/CircularProgress"

const Autocomplete = ({
	fetchSuggestions,
	suggestionList,
	setNextCityName,
	setSuggestionList,
}) => {
	const [open, setOpen] = useState(false)
	const loading = open && suggestionList.length === 0

	const handleInputChange = (event, value) => {
		if (value.length > 2) {
			fetchSuggestions(value)
		}
	}

	const handleOptionChange = (event, value) => setNextCityName(value)

	return (
		<AutocompleteUI
			open={open}
			onChange={handleOptionChange}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			getOptionSelected={(option, value) => option === value.name}
			getOptionLabel={option => option}
			onInputChange={handleInputChange}
			options={suggestionList}
			loading={loading}
			freeSolo
			renderInput={params => (
				<TextField
					{...params}
					label="Введите название города"
					variant="outlined"
					fullWidth
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<>
								{loading ? (
									<CircularProgress color="inherit" size={20} />
								) : null}
								{params.InputProps.endAdornment}
							</>
						),
					}}
				/>
			)}
		/>
	)
}

export default Autocomplete
