
alert('Ma calculatrice: ')

let nb_1 = parseFloat(prompt("entrez le premier nombre : "));
if(isNaN(nb_1)){
    alert("nombre incorrect\nVeuillez entrez un réel !");
    nb_1 = parseFloat(prompt("entrez le premier nombre : "));
}
else{
    let operator = prompt("entrez l'opérateur de calcul : ");
    while(operator != "/" && operator != "/" && operator != "*" && operator != "-" && operator != "+"  && operator != "^" && operator != "%"){
        operator = prompt("choisissez parmi\n  +, -, *, /, ^, % : ");
    }
    let nb_2 = parseFloat(prompt("entrez le sécond nombre : "));
    while(isNaN(nb_2)){
        alert("nombre incorrect\nVeuillez entrez un réel !");
        nb_2 = parseFloat(prompt("entrez le premier nombre : "));
    }
    let resultat = 0;

        switch(operator){
            case "/": if(nb_2 == 0){
                alert("error");
                    resultat = ' ';
                }else{
                    resultat = nb_1 / nb_2;
                }   
                break;
            case "*": resultat = nb_1 * nb_2;
                break;
            case "-": resultat = nb_1 - nb_2;
                break;
            case "+": resultat = nb_1 + nb_2;
                break;
            case "%": resultat = nb_1 % nb_2;
                break;
            case "^": resultat = Math.pow(nb_1, nb_2);
                break;
            default: 
            alert(`Error : ${operator} n'est pas un opérateur de calcul`);
            document.getElementById("calcul").innerText=`Error : ${operator} n'est pas un opérateur de calcul`;
                break;
        }

        if((operator=='/') && (nb_2 == 0)){
            let message = `Error: valeur ${nb_2} dans la division `;
            alert(message);
            document.getElementById("resultat").innerText= `${resultat}`;
            document.getElementById("calcul").innerText= message;
        }
        else{
            let operator_1 = operator;
            operator = prompt("entrez l'opérateur de calcul : ");
            while(operator != "/" && operator != "/" && operator != "*" && operator != "-" && operator != "+"  && operator != "^" && operator != "%" && operator != "="){
                operator = prompt("choisissez parmi\n  +, -, *, /, ^, %, = : ");
            }
            if(operator == "="){
                let message = `${nb_1} ${operator_1} ${nb_2} = ${resultat}`;
                alert(message);
                document.getElementById("resultat").innerText= `${resultat}`;
                document.getElementById("calcul").innerText= message;
            }
            else{
                nb_2 = parseFloat(prompt("entrez le sécond nombre : "));
                nb_1 = resultat;
                resultat = 0;
                while(isNaN(nb_2)){
                    alert("nombre incorrect\nVeuillez entrez un réel !");
                    nb_2 = parseFloat(prompt("entrez le premier nombre : "));
                }
                    switch(operator){
                        case "/": if(nb_2 == 0){
                            alert("error");
                                resultat = ' ';
                            }else{
                                resultat = nb_1 /  nb_2;
                            }   
                            break;
                        case "*": resultat  = nb_1 *  nb_2;
                            break;
                        case "-": resultat  = nb_1 - nb_2;
                            break;
                        case "+": resultat  = nb_1 + nb_2;
                            break;
                        case "%": resultat  = nb_1 % nb_2;
                            break;
                        case "^": resultat = Math.pow(nb_1, nb_2);
                            break;
                        default: 
                        alert(`Error : ${operator} n'est pas un opérateur de calcul`);
                        document.getElementById("calcul").innerText=`Error : ${operator} n'est pas un opérateur de calcul`;
                            break;
                    }
                    if((operator=='/') && (nb_2 == 0)){
                        let message = `Error: valeur ${nb_2} dans la division `;
                        alert(message);
                        document.getElementById("resultat").innerText= `${resultat}`;
                        document.getElementById("calcul").innerText= message;
                    }
                    else{
                        let message = `${nb_1} ${operator} ${nb_2} = ${resultat}`;
                        alert(message);
                        document.getElementById("resultat").innerText= `${resultat}`;
                        document.getElementById("calcul").innerText= message;
                    }
                
            }
        }
    }



