"use strict";
/* 
const importViewScripts = (page) => page.keys().forEach(page);

console.log(importViewScripts.length);

document.addEventListener("turbolinks:load", () => {
  importViewScripts(require.context("../nzimbi/", true, /\.js$/));
});
 */

/*
 for (const file of commandFiles) {
    const command = await import(`../commands/${file}`);
    commands.push(command.data.toJSON());
  }
 */

// import * from "../nzimbi";

//* ok
import { Titulaire } from "../nzimbi/titulaire.js";
import { Compte } from "../nzimbi/compte.js";
import { CompteEpargne } from "../nzimbi/compteEpargne.js";
//*/

/*
import * as exports from "../nzimbi";
Object.entries(exports).forEach(
  ([name, exported]) => (window[name] = exported)
);
//Object.entries(require('foo')).forEach(([name, exported]) => global[name] = exported); (node.js)
*/

/*
import * as util from "../nzimbi";
// Object.assign(global, util);
util.importAll(util, global);

*/

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



/*

const files = import.meta.globEager('./path/*.css')

// conditionalStyle.js
const styles = import.meta.globEager('./*.css');

// main.js
if (false) {
  import('./conditionalStyle.js');
}
*/
