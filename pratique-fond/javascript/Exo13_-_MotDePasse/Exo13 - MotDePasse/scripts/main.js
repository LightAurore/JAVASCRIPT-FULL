const PWD = "BxlF0rm4t10n";
const LIMIT = 10;

let user_pwd;
let tentative = 0;

do {
    tentative += 1;
    user_pwd = prompt(`Veuillez encoder un mot de passe (${tentative}/${LIMIT}) :`)
} while (user_pwd != PWD && tentative < LIMIT);

if(user_pwd == PWD)
    alert("Bienvenue!");
else
    alert("L'accès au site est refusé");