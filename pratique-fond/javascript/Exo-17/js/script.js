
//Exo 17 : Liste de course
//
//Dans un fichier HTML, créez une balise ul avec un identifiant "course".
//
//Dans un fichier JS lié à l'HTML précédent, créez une application qui demande sans arrêt les articles à ajouter dans votre liste.
//
//Pour arrêter l'enregistrement d'article, l'utilisateur doit entre le mot "FIN".
//

const liste_course = document.getElementById("course")



// article.addEventListener("keypress", ()=>{
//         preventDefault();
//     let value =document.getElementById("article").value.toUpperCase();
//     while(value != "FIN")
//     {
//         const elementList = document.createElement("li");
//         elementList.classList.add("liste_course");
//         liste_course.appendChild(elementList);
//         elementList.innerText = value;
//         document.getElementById("article").value = "";
//         value = document.getElementById("article").value.toUpperCase();
//     }
// })

let value =prompt("entrez un article :").toUpperCase();
while(value != "FIN")
{
    const elementList = document.createElement("li");
    elementList.classList.add("liste_course");
    liste_course.appendChild(elementList);
    elementList.innerText = value;
    value =prompt("entrez un article :").toUpperCase();
}






