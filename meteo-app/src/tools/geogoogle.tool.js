
export const GeogoogleTool = async () =>{

    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=wavre&sensor=false';
    
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

}

