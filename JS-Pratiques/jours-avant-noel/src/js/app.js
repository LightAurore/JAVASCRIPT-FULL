'use strict';

const jourDeNoel = new Date(2023,11,25,0,0,0);


let compte_a_rebours = setInterval(function(){

    let maintenant = new Date();
    let temps_restant = jourDeNoel - maintenant;
    let jour_sup = Math.ceil((temps_restant / 1000 )/ 86400);  // uniquement pour un moment donné qu'on arrondit

    let jour = Math.floor((Math.abs(temps_restant) / 1000 )/ 86400);  
    let heure = Math.floor(((Math.abs(temps_restant) / 1000 )% 86400)/ 3600);
    let minute = Math.floor(((Math.abs(temps_restant) / 1000 )% 3600)/ 60);
    let seconde = Math.floor(Math.abs(temps_restant) / 1000 )% 60;


document.getElementById("jour").innerText = `${jour}`;
document.getElementById("heure").innerText = `${heure}`;
document.getElementById("minute").innerText = `${minute}`;
document.getElementById("seconde").innerText = `${seconde}`;

if(temps_restant == 0){
    document.getElementById("jour-j").innerText = `C'est ${"noël".toUpperCase()} 🎄`;
}else if(temps_restant < 0){

    let noel_prochain = Math.abs(jourDeNoel.getFullYear() - maintenant.getFullYear() + 1) *365;
    let jr_apres_noel = Math.abs(jour_sup);
    console.log(noel_prochain);
        document.getElementById("jour-j").innerText = `Nous sommes le ${maintenant.toLocaleString('fr-be', {
            year: '2-digit',
            month: 'long',
            day: 'numeric'
        })} , il reste ${ jr_apres_noel + noel_prochain} jours avant ${"noël".toUpperCase()} !`;
}
else{
    document.getElementById("jour-j").innerText = `Nous sommes le ${maintenant.toLocaleString('fr-be', {
        year: '2-digit',
        month: 'long',
        day: 'numeric'
    })} , il reste ${jour_sup} jours avant ${"noël".toUpperCase()} !`;
}
},1000);

const screenWidth = screen.availWidth;
console.log(screenWidth);
