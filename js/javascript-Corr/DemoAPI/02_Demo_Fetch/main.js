//Le fetch
// La méthode prend en paramètre l'url, et si rien n'est précisé, c'est en get
// fetch('https://api.agify.io/?nae=michael&country_id=BE')
//     .then((res) => {
//         if(res.status == 200) {
//             console.log("SUCCESS 200");
//             res.json()
//                 .then((data) => {
//                     console.log(data);
//                 })
//         }
//         else {
//             console.log("ERROR");
//         }
//     })
//     .catch((err) => {
//         console.log("ERROR : ", err);
//     })


//------------------------------------------
const inputPrenom = document.getElementById('prenom');
const selectCountry = document.getElementById('country');
const btnSearch = document.getElementById('btn-search');
const resultat = document.getElementById('resultat');


btnSearch.addEventListener('click', async () => {
    try {
        // On récupère la réponse de la requête
        // Celle ci contient plusieurs données comme le code http, le temps d'éxécution, des options etc
        const response = await fetch(`https://api.agify.io/?name=${inputPrenom.value}&country_id=${selectCountry.value}`);
        // Il faut donc penser à récupérer l'objet json de la requête, grâce à la méthode json
        const data = await response.json();

        
        resultat.innerText = `Il y a ${data.count} ${data.name} pour le code pays ${data.country_id} et l'âge le plus probable est ${data.age} ans`;
    }
    catch(err) {
        console.log(err);
    }
})