let nb1 = parseFloat(prompt("Insérer un premier nombre :"));
if(isNaN(nb1)) alert("Mauvaise valeur...")
else{
    let operator = prompt("Veuillez choisir un opérateur entre + , - , / et * :");
    if(operator != "+" && operator != "-" && operator != "*" && operator != "/"){
        alert(`L'opérateur ${operator} n'est pas valide...`);
    }
    else{
        let nb2 = parseFloat(prompt("Et insérer le dernier nombre :"));
        if(isNaN(nb2)) alert("Mauvaise valeur...");
        else{
            let message = `${nb1} ${operator} ${nb2} = `;
            switch (operator) {
            case "+":
                message = message + (nb1 + nb2);
                break;
            case "-":
                message = message + (nb1 - nb2);
                break;        
            case "*":
                message = message + (nb1 * nb2);
                break;    
            case "/":
                if(nb2 != 0){
                    message = message + (nb1 / nb2);
                }
                else{
                    message = "La division par 0 tend vers l'infini et au delà!";
                }
                break;
            }
            alert(message);
        }
    }
}