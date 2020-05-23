const get = async url => {
	try {
		const response = await fetch(url)
		const result = await response.json()
		return result
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(`Failed to fetch data from ${url}: ${error}`)
	}
}

export default get
