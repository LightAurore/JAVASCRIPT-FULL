'use strict'

console.log(document.forms[0]);

console.log(document.repertoriePlantes);

const repertoriePlantes = document.repertoriePlantes;
const formuleError = document.getElementById('formule-error')
const gallerieContainer = document.getElementById('gallerie-container');


/* */


const maGallerie = (id,nom,famille,image,active,formule,maladie,description) =>{

let carte = `
<article class="card">
<header class="card__name">
    <h2 id="nomPlante">${nom}</h2>
</header>
<main class="card__main">
    <section class="card__contain--img">
            <img src="./assets/images/${image}" alt="" id="plante-img">
    </section>
    <aside class="card__contain">
        <div class="card__caontaine--title">
            <ul>
            <li>
            <h3>Famille</h3>
            <span id="affiche-famille">${famille}</span>
            </li>
            <li>
            <h3>Substance active</h3>
            <span id="affiche-substActive">${active}</span>
            </li>
            <li>
                <h3>Formule</h3>
                <span id="affiche-groupe">${formule}</span>
            </li>
                <li>
                    <h3>Mal à soigner</h3>
                    <span id="affiche-maladie">${maladie}</span>
                </li>
            </ul>
        </div>
        
    </aside>
</main>
<footer>
    <div>
            <h3>Texte descriptif</h3>
            <p id="affiche-description">
            ${description}
            </p>
        </div>
</footer>
<button onclick="effacer(${id})" class="supprimer-art">supprimer</button>

</article>
`;
 return carte;
}

/*  */

repertoriePlantes.sendForm.addEventListener('click', async (e) => {
    e.preventDefault(); 
    
    //---- PARTIE API ---
    if(repertoriePlantes.nomPlante.value != '' && repertoriePlantes.famillePlante.value != '' && repertoriePlantes.imagePlante.value != '' && repertoriePlantes.substanceActive.value != '' && repertoriePlantes.formuleChimique.value != '' && repertoriePlantes.desciption.value != '' && repertoriePlantes.malASoigner.value != ''){
        const userToSend = {
            nom: repertoriePlantes.nomPlante.value,
            famille: repertoriePlantes.famillePlante.value,
            image: repertoriePlantes.imagePlante.value,
            active: repertoriePlantes.substanceActive.value,
            formule: repertoriePlantes.formuleChimique.value,
            maladie: repertoriePlantes.malASoigner.value,
            description: repertoriePlantes.desciption.value
        }
        
        try {
            await axios.post('http://localhost:3000/plantes', userToSend);
            repertoriePlantes.reset(); //Remet à zero le formulaire
            
        }
        catch(err) {
            console.log(err);
        }
    }
})


repertoriePlantes.confirmFormule.addEventListener('change', () => {
    if(checkFormules(repertoriePlantes.formuleChimique.value, repertoriePlantes.confirmFormule.value)){
        formuleError.textContent = '';
    } else {
        showFormuleError();
    }
})

const checkFormules = (formule1, formule2) => {
    return formule1 === formule2;
}

const showFormuleError = () => {
    formuleError.textContent = 'Les formules chimiques ne sont pas identiques !';
}

repertoriePlantes.addEventListener('change', () => {
    if(repertoriePlantes.nomPlante.value != '' && repertoriePlantes.famillePlante.value != '' && repertoriePlantes.imagePlante.value != '' && repertoriePlantes.substanceActive.value != '' && repertoriePlantes.formuleChimique.value != '' && repertoriePlantes.desciption.value != '' && repertoriePlantes.malASoigner.value != ''){
        repertoriePlantes.sendForm.disabled = false;
    }
    else {
        repertoriePlantes.sendForm.disabled = true;
    }
    console.log('Oui.');
})

const recup = async() => {
    gallerieContainer.innerHTML = "";
    try {
        const result = await axios.get(`http://localhost:3000/plantes`);
        console.log(result.data);
        result.data.forEach(element => {
            // console.log(element.nom);
            // console.log(element.famille);
            // console.log(element.image);
            // console.log(element.active);
            // console.log(element.formule);
            // console.log(element.maladie);
            // console.log(element.description);
           let mesArts = maGallerie(element.id, element.nom,element.famille,element.image,element.active,element.formule,element.maladie,element.description);
            console.log(element.id);
           gallerieContainer.innerHTML += mesArts;
        });
    }
    catch(err) {
        console.log(err);
    }
}
recup();

// const effacer = () => {
//     try {
//         const btn_supprimer = document.querySelectorAll('.supprimer-art');
//         btn_supprimer.forEach(element => {
            
//             console.log(element);
//             element.addEventListener('click', async()=>{
//                 console.log(element); 
//                 await axios.delete(`http://localhost:3000/plantes/${element.id}`);
//             })
            
//         });
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

const effacer = async(id) => {
    try {
        await axios.delete(`http://localhost:3000/plantes/${id}`);
        //TODO rafraichir la liste

    }
    catch(err) {
        console.log(err);
    }

}


