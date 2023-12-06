
let taille = parseInt(prompt("Entrez le nombre de niveau de la pyramide : "));

let i = 0;

let a = 'A'
while(i<taille){
    console.log(a);
    a = a + 'A';
    i++;
}