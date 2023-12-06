let annee = parseInt(prompt('Veuillez indiquer l\'année : '));

if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0){
    alert(`L'année ${annee} est une année bissextile!`);
}
else{
    alert(`L'année ${annee} n'est pas une année bissextile!`);
}