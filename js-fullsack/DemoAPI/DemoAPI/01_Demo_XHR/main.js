// Demo XHR - XmlHttpRequest -> Le dinosaure
// https://agify.io/ -> Lien de l'api utilisée pour la démo

//! Step 1 : Je dois créer mon objet xhr qui me sert à envoyer une requête
const xhr = new XMLHttpRequest();
console.log(xhr);

//! Step 4 : Ajout d'une fonction à exécuter lorsque l'évènement onreadystatechange se déclenche
xhr.onreadystatechange = () => {
    //readyState : Etat de l'objet xhr
    // Celui qui nous intéresse, c'est le 4 : quand la requête est terminée
    // status : Code de la requête
    // 2xx : Succès
    // 4xx : Erreur
    // 5xx : Erreur serveur/db
    console.log('READY STATE : ', xhr.readyState, ' STATUS : ', xhr.status);
    if(xhr.status === 200 && xhr.readyState === 4) {
        // C'est que ma requête est finie ET que c'est un succès, je peux donc traiter le résultat
       console.log(xhr.responseText); // La réponse se trouve dans la propriété responseText (attention, c'est sous forme de string)
       const data = JSON.parse(xhr.responseText);
       console.log(data);
    }
}

//! Step 2 : Je dois ouvrir ma requête et la configurer
// La méthode open, prend 3 paramètres :
    // - method :
        // get : récupérer des données
        // post : envoyer des données
        // put, patch : modifier des données
        // delete : supprimer 
    // - url : url de la requête
    // - async : booléen pour préciser si la requête va être asynchrone (true), ou synchrone (false)
        // - async : vous pouvez continuer à faire d'autres actions pendant que la requête s'exécute (non bloquant)
        // - sync : vous ne pourrez pas continuer à faire d'autres actions, tout est bloqué pendant le temps d'éxécution de la requête (bloquant)
xhr.open('GET', 'https://api.agify.io/?name=michael&country_id=BE', true);

// ! Step 3 : Je dois envoyer ma requête
xhr.send() //Si get, j'ai rien à envoyé comme données donc send sera vide
//xhr.send("truc") // Si post, put, patch, si j'ai des données à envoyer