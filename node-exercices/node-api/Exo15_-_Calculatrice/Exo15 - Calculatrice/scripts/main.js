let nb1;
do{
    nb1 = parseFloat(prompt("Insérer un premier nombre :"));
} while(isNaN(nb1));

let operator;
do {
    operator = prompt("Veuillez choisir un opérateur entre + , - , / , * et = :");
} while(operator != "+" && operator != "-" && operator != "*" && operator != "/" && operator != "="); 

let message = `${nb1} ${operator} `;
let divideByZero = false;

while (operator != "=" && !divideByZero) {
    let nb2;
    do {
        nb2 = parseFloat(prompt("Et insérer le dernier nombre :"));
    } while (isNaN(nb2));
    
    switch (operator) {
    case "+":
        nb1 = (nb1 + nb2)
        break;
    case "-":
        nb1 = (nb1 - nb2);
        break;        
    case "*":
        nb1 = (nb1 * nb2);
        break;    
    case "/":
        if(nb2 != 0) nb1 = (nb1 / nb2);
        else divideByZero = true;
        break;
    }
    
    if(!divideByZero){
        do {
            operator = prompt("Veuillez choisir un opérateur entre + , - , / , * et = :");
        } while(operator != "+" && operator != "-" && operator != "*" && operator != "/" && operator != "="); 
        message = `${message}${nb2} ${operator} `;    
    }
    else{
        message = "La division par 0 tend vers l'infini et au delà!";
    }
}
if(!divideByZero) alert(`${message}${nb1}`);
else alert(message);