// Axios est une librairie basée sur xhr et les promesses, il faut donc soit l'installer soit utiliser le cdn
//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


const inputPrenom = document.getElementById('prenom');
const selectCountry = document.getElementById('country');
const btnSearch = document.getElementById('btn-search');
const resultat = document.getElementById('resultat');


btnSearch.addEventListener('click', async() => {
    const response = await axios.get(`https://api.agify.io/?name=${inputPrenom.value}&country_id=${selectCountry.value}`);

    resultat.innerText = `Il y a ${response.data.count} ${response.data.name} pour le code pays ${response.data.country_id} et l'âge le plus probable est ${response.data.age} ans`;
})
