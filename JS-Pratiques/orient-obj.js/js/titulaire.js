'use strict';

/* 
let nomTitulaire = "Gabriel";
let prenomTitulaire = "Archi";

let soldeCompte = 150;

soldeCompte += soldeCompte * 0.0015;;
 */

class Titulaire{

    /**
     * Titulaire de compte banquaire
     * @param {string} nom 
     * @param {string} prenom 
     */

    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom
    }

    Titulaire_Identite(){
        console.log(`Le titulaire s'appelle ${this.prenom} ${this.nom}`);
    }
}