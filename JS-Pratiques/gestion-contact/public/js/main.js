'use strict'

// DOM
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const birthday = document.getElementById('birthday');
const phoneNumber = document.getElementById('phoneNumber');

const btn_enregistrer_contact = document.getElementById('enregisterContact')
const btn_effacer_contact = document.getElementById('effacerContact')

// Variables
const contacts = [
{
    id: 1,
    nom : "durand",
    prenom: "alax",
    annif: "2005-3-1",
    tel : "4856564564"
},
{
    id: 1,
    nom : "dutronc",
    prenom: "alix",
    annif: "2005-3-1",
    tel : "4856564564"
},
{
    id: 1,
    nom : "durond",
    prenom: "alex",
    annif: "2005-3-1",
    tel : "4856564564"
},
{
    id: 1,
    nom : "dupré",
    prenom: "alaxa",
    annif: "2005-3-1",
    tel : "4856564564"
},
{
    id: 1,
    nom : "duchamps",
    prenom: "alexa",
    annif: "2005-3-1",
    tel : "4856564564"
},
{
    id: 1,
    nom : "duplex",
    prenom: "alixi",
    annif: "2005-3-1",
    tel : "4856564564"
}
];



// Les fonctions

/**
 * 
 * @returns 
 */
function New_contact(){
    return new Promise((resolve, reject) => {
        if(firstname.value && lastname.value && birthday.value && phoneNumber.value){
            resolve('Les champs sont justes');
        }else{
            reject('Les champs ne sont pas juste');
        }
    })
}

/**
 * 
 * @param {Date} birthdate 
 * @returns 
 */
const Calc_Age = (birthdate)=> {
    const birth = new Date(birthdate.value)
    const today = new Date();
    const result = today.getFullYear() - birth.getFullYear();

    console.log(birth.getMonth());
    

    const age = (today.getMonth() > birth.getMonth()) ? (result - 1 ) : ((today.getMonth() == birth.getMonth()) ? ((today.getDate() > birth.getDate) ? (result - 1 ): (result)) : (result - 1));
    console.log("l'age " + typeof age + " " + age);
    return age;
}

/**
 * 
 * @param {Number} age 
 * @returns 
 */
const isContactMajeur = (age) => {

    return new Promise((resolve, reject) =>{
        (age>=18) ? resolve("Majeur " + true) : reject("Majeur " + false);
    })
}

/**
 * 
 * @param {Object} obj 
 * @returns 
 */
const isListContactFull = (obj) => {
    return new Promise((resolve, reject) => {
        (obj.length > 10) ? reject("no Remplie " + true) : resolve("no Remplie " + false);
    })
}


const Record_Contact = (contacts)=>{
    console.log(`id_${contacts.length + 1}`);
    contacts.push({ 
        id : `id_${contacts.length + 1}`,
        prenom : `${firstname.value}`,
        nom : `${lastname.value}`,
        annif : `${birthday.value}`,
        tel : `${phoneNumber.value}`,
    });

    console.log("mon id " + contacts[contacts.length - 1].id);

}

const isNomPrenomFull = () =>{

    console.log(firstname?.value, lastname?.value);
    return new Promise((resolve, reject) => {
       ( firstname?.value && lastname?.value) ? resolve("Nom et prénom sont remplis") : reject("les deux cases (nom et prénom) ne sont pas remplis");
    })
}

const isInList = (contacts) => {
    // console.log(firstname.value + " oui " +  contacts.includes(firstname?.value));

    return new Promise((resolve, reject) => {
        let i;
        let est = contacts.find((elt, index) =>{
            if(elt.prenom === `${firstname.value}` && elt.nom === `${lastname.value}`){
                console.log(`${firstname.value}`, index,  `${lastname.value}`);
                resolve('La personne est dans la liste');
                i = index;
                return index;
            }else{
                if(i == index || (elt.prenom === `${firstname.value}` && elt.nom === `${lastname.value}`)){
                    reject("La peronnes n'est pas là")
                }
            }
        });
    })
}



btn_enregistrer_contact.addEventListener('click', async() =>{
    
    try{
        const newContact = await New_contact();
        console.log(newContact);
        const estMajeur = await isContactMajeur(Calc_Age(birthday));
        console.log(estMajeur);
        const placeDispo = await isListContactFull(contacts);
        console.log("place dispo " + placeDispo);
        console.log("apppa" + contacts);
        Record_Contact(contacts);

    }
    catch(err){
        console.log(err)
    }

    
})

btn_effacer_contact.addEventListener('click', async() => {
    try{
        const nomPrenomCompleter = await isNomPrenomFull();
        console.log(nomPrenomCompleter);
        const estDansListe = await isInList(contacts)
        console.log(estDansListe);
    }
    catch(err){
        console.log(err);
    }
})