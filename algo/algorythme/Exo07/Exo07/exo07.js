let nb1 = parseFloat(prompt(`Veuillez insérer un premier nombre :`).trim().replaceAll(',','.'));
let ope = prompt(`Quel opération ? (+ - * /)`);
let nb2 = parseFloat(prompt(`Veuillez insérer un second nombre :`).trim().replaceAll(',','.'));

switch (ope) {
    case "+":
        console.log(`${nb1} ${ope} ${nb2} = ${nb1 + nb2}`);
        break;
    case "-":
        console.log(`${nb1} ${ope} ${nb2} = ${nb1 - nb2}`);
        break;
    case "*":
        console.log(`${nb1} ${ope} ${nb2} = ${nb1 * nb2}`);
        break;
    case "/":
        if(nb2 == 0){
            console.error(`Impossible de diviser par 0!`)
        }
        else{
            console.log(`${nb1} ${ope} ${nb2} = ${nb1 / nb2}`);
        }
        break;
    default:
        console.error(`Bad operator : ${ope}`);
        break;
}
