let annee = parseInt(prompt('Veuillez introduire une année à analyser :'));

if((annee % 4 == 0 && annee % 100 != 0) || (annee % 400 == 0))  // autre calcul possible : annee / 4 == Math.floor(annee / 4)
{
    console.log(`L'année ${annee} est une année bissextile!`);
}
else{
    console.log(`L'année ${annee} n'est pas une année bissextile!`);
}