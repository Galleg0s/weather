const get = url => {
	return fetch(url)
		.then(response => response.json())
		.then(result => result)
}

export default get
