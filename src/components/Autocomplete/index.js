// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React from "react"
import TextField from "@material-ui/core/TextField"
import { Autocomplete as AutocompleteUI } from "@material-ui/lab"
import CircularProgress from "@material-ui/core/CircularProgress"

export default function Autocomplete({
	fetchSuggestions,
	suggestionList,
	setNextCityName,
	setSuggestionList,
}) {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState("")
	const loading = open && suggestionList.length === 0

	React.useEffect(() => {
		let active = true

		if (!loading) {
			return undefined
		}

		if (active) {
			// что передать сюда?
			fetchSuggestions(value)
		}

		return () => {
			active = false
		}
	}, [loading])

	React.useEffect(() => {
		if (!open) {
			setSuggestionList([])
		}
	}, [open])

	return (
		<AutocompleteUI
			open={open}
			onChange={(event, value) => {
				setNextCityName(value)
			}}
			onOpen={() => {
				setOpen(true)
			}}
			onClose={() => {
				setOpen(false)
			}}
			getOptionSelected={(option, value) => {
				return option === value.name
			}}
			onInputChange={(event, value) => {
				setValue(value)
			}}
			getOptionLabel={option => {
				return option
			}}
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
