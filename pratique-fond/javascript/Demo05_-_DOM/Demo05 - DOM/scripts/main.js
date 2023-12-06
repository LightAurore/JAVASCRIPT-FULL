const html_titre = document.getElementById("titre");
const html_info = document.getElementById("info");

console.log(html_titre);

html_titre.innerText = "Démonstration 05 : la manipulation du DOM";

if (html_info.innerText == ""){
    html_info.innerText = "Les balises qui composent votre document HTML sont des éléments!";
}

const html_subTitle = document.createElement('h2');
document.body.appendChild(html_subTitle);
html_subTitle.innerText = "Création de balises";

//Manipulation des attributs
//Soit par leur nom
html_subTitle.id = "subTitle";
//OU soit par la liste d'attribut
// html_subTitle.setAttribute('id','subTitle');


//Manipulation attribut class
html_info.classList.add('important');
html_info.classList.remove('description');
html_info.classList.toggle('description');

const html_data_table = document.getElementById("data_table");
const html_mid_cell = html_data_table.children[1].children[1];
html_mid_cell.innerText = "centre";

const html_data_selector = document.querySelector('h1+p');
html_data_selector.innerText = "J'ai été sélectionné par le querySelector!";

const html_cellules = document.querySelectorAll('tr td:first-child');
let i = 0;
do {
    html_cellules[i].innerText = "Première cellule!";
    i++;
} while (i < html_cellules.length);
