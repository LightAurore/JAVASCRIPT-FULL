'use strict';

// Dom
// exo 1

const inputPrenom = document.getElementById('prenom');
const selectCountry = document.getElementById('pays');
const btnSearch = document.getElementById('affiche-proba-pays');

const afficherPrenomPays = document.getElementById('afficher-resultat');







btnSearch.addEventListener('click', async() => {
    console.log('do something');
    // const response = await axios.get(`https://api.genderize.io/?name=${inputPrenom.value}&country_id=${selectCountry.value}`);
    // const response = await axios.get(`https://api.nationalize.io/?name=johnson`);
    
    const response = await axios.get(`https://api.agify.io/?name=johnson`);
    console.log(response);

    afficherPrenomPays.innerText = `Il y a ${response.data.count} ${response.data.name} pour le code pays ${response.data.country} et l'âge le plus probable est ${response.data.age} ans`;
})
