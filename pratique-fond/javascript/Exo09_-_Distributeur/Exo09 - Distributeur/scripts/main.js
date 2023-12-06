let stock_eau = 0;
let stock_soda = 5;
let stock_orangeade = 3;

let boisson = parseInt(prompt("Choisissez une boisson :\n1. Eau\n2. Soda\n3. Orangeade"));
switch (boisson) {
    case 1:
        if(stock_eau > 0){
            alert("Voici votre eau!");
            stock_eau = stock_eau -1;
            //stock_eau -= 1;           //affectation avec opérateur sur la gauche signifie que la variable de sauvegarde est aussi utilisé dans l'opération
            //stock_eau --;             //opérateur de décrémentation (diminution d'une valeur numérique de 1)
        }
        else{
            alert("Il n'y a plus d'eau...");
        }
        break;
    case 2:
        if(stock_soda > 0){
            alert("Voici votre soda!");
            stock_soda = stock_soda -1;
            //stock_soda -= 1;           //affectation avec opérateur sur la gauche signifie que la variable de sauvegarde est aussi utilisé dans l'opération
            //stock_soda --;             //opérateur de décrémentation (diminution d'une valeur numérique de 1)
        }
        else{
            alert("Il n'y a plus de soda...");
        }
        break;
    case 3:
        if(stock_orangeade > 0){
            alert("Voici votre orangeade!");
            stock_orangeade = stock_orangeade -1;
            //stock_orangeade -= 1;           //affectation avec opérateur sur la gauche signifie que la variable de sauvegarde est aussi utilisé dans l'opération
            //stock_orangeade --;             //opérateur de décrémentation (diminution d'une valeur numérique de 1)
        }
        else{
            alert("Il n'y a plus d'orangeade...");
        }
        break;
    default:
        alert("Choix indisponible...");
        break;
}