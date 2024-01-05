'use strict';

// const axios = require("axios")

// import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: '53.1,-0.13'},
    headers: {
      'X-RapidAPI-Key': 'e02bc8fa29msh9d0c33cc8c9507dp1dd155jsn0ee742843e4e',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

// const meteo = async ()=>{
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }
// }

const meteo = async ()=>{
    try {
      const response = await axios.request('https://weatherapi-com.p.rapidapi.com/current.json');
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
}

//   meteo()


// btnSearch.addEventListener('click', async() => {
//     const response = await axios.get(`https://api.agify.io/?name=${inputPrenom.value}&country_id=${selectCountry.value}`);

//     resultat.innerText = `Il y a ${response.data.count} ${response.data.name} pour le code pays ${response.data.country_id} et l'âge le plus probable est ${response.data.age} ans`;
// })

