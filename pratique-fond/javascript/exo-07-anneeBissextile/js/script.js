charset="UTF8";

alert("Est ce qu'une année est bissextile ou non")
let input = parseInt(prompt("Entrez une année :"))

let c1 = input%4;
let c2 = input%100;
let c3 = input%400;

if((!(c1) && (c2)) || !(c3)){
    alert(`${input} est une année bissextile`);
    document.getElementById("annee").innerText = `${input} est une année bissextile`;
}
else{
    alert(`${input} n'est pas une année bissextile`);
    document.getElementById("annee").innerText =`${input} n'est pas une année bissextile` ;
}

