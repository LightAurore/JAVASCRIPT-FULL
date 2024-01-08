'use strict';

// Dom
const input_prenom = document.getElementById('prenom');
const input_pays = document.getElementById('pays');

const btn_chercher = document.getElementById('chercher-prob-pays');
const afficheChien = document.getElementById('affiche-imgs');

const imgGrand = document.getElementById('img-grand');



const api = "https://dog.ceo/api/breeds/image/random";

const fetchApi = async (api) => {
    // On récupère la réponse de la requête
        // Celle ci contient plusieurs données comme le code http, le temps d'éxécution, des options etc
        const response = await fetch(api);
        // Il faut donc penser à récupérer l'objet json de la requête, grâce à la méthode json
        const data = await response.json();

            // console.log(data);
        
    return data;    
} 

const Creer_gallerie = (data, nodeParent) => {
    const html_img = document.createElement('img');
    html_img.src = `${data.message}`;
    html_img.classList.add('photo')
    nodeParent.appendChild(html_img);

}

const Get_Src_img = (nodeParent) => {

    const lesImages = document.querySelectorAll(`#${nodeParent} img`)
    console.log(lesImages);
    lesImages.forEach((img) => {
        img.addEventListener('click', () => {
        console.log(img.src);
        imgGrand.src = img.src;
        document.querySelector('.img-container').style.display = "flex";
        })
    })

}

document.getElementById('close-img').addEventListener('click', () => {
    document.querySelector('.img-container').style.display = "none";
})


Event
btn_chercher.addEventListener('click', async () => {
    // console.log("do something");
    try {
        for (let i = 0; i < 24; i++) {
            const donnees = await fetchApi(api);
            Creer_gallerie(donnees, afficheChien);
        }

        const mesImgs = Get_Src_img("affiche-imgs");
    }
    catch(err) {
        console.log(err);
    }
})









// const fetchApi = async(api) => {
//     await fetch(api)
//         .then(res =>{ res.json()})
//         .then(data => data)
    
// } 

// btn_chercher.addEventListener('click', async () => {
//     console.log("do something");
//     try{
//         const data = fetchApi(api);
//         console.log(data);

//     }
//     catch(err){
//         console.log(err);
//     }
// })

