"use strict";

let titulaire1 = new Titulaire("Jab", "Cross");

console.log(titulaire1);

let titulaire2 = new Titulaire("Uppercut", "Hook");
console.log(titulaire2.nom);

titulaire2.Titulaire_Identite();

let titulaire3 = new Titulaire("Kick", "Elbow");

let compte1 = new Compte(titulaire3, 25);

console.log(compte1);

compte1.crediter(150);
console.log(compte1);

compte1.debiter(60);
console.log(compte1.solde);

compte1.afficher_solde();

let compteEpargne = new CompteEpargne(titulaire2, 15);
console.log(compteEpargne);

compteEpargne.crediter(50);
console.log(compteEpargne);

compteEpargne.debiter(10);
compteEpargne.afficher_solde();
/* 
setInterval(() => {
    compteEpargne.afficher_solde();
}, 10000);
*/
compteEpargne.afficher_epargne();