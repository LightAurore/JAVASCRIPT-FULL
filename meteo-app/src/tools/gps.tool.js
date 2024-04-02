
export const GpsTool = async () => {

    const city = "wavre";

	const apikey = "19662c6a10adc2f517d9c2172c2b7f8e";

	await fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=" 
			+ city 
			+ "&units=metric&appid=" 
			+ apikey
			).then((response) => response.json())
			.then((data) => console.log(data));
}

// https://rapidapi.com/wirefreethought/api/geodb-cities/