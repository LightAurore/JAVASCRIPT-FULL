
import axios from "axios";

interface Response {
	text: string;
	author: string;
	category: string;
	id: number;
}

// const getQuotes1() {

//     axios.get('https://api.quotable.io/random')
//        .then(res => {
//             console.log(res.data.content);
//         })
//        .catch(err => {
//             console.log(err);
//         })
// }

function getQuotes() {
	// const options = {
	// 	method: 'GET',
	// 	// url: 'https://famous-quotes4.p.rapidapi.com/random',
	// 	url: urlString,
	// 	params: { category: 'all', count: '2' },
	// 	headers: {
	// 		'X-RapidAPI-Key': 'your-rapid-key',
	// 		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
	// 	},
	// };

    const options = {
        method: 'GET',
        url: 'https://sportapi7.p.rapidapi.com/api/v1/sport/football/events/live',
        headers: {
          'X-RapidAPI-Key': 'e02bc8fa29msh9d0c33cc8c9507dp1dd155jsn0ee742843e4e',
          'X-RapidAPI-Host': 'sportapi7.p.rapidapi.com'
        }
      };

      let data;
      

	axios(options)
		.then(function (response) {
			data = response;
		})
		.catch(function (error: string) {
			console.error(error);
		});

        return data;
}

export default getQuotes;