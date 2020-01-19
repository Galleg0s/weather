const getResults = fetch(
	"http://kladr-api.ru/api.php?query=Моск&contentType=city&withParent=false"
)
	.then(response => response.json())
	.then(result => console.log(result))
	.catch(err => console.log(err))
