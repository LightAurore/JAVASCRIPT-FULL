// C'est là où on va avoir toute la logique de gestion de la réponse
// C'est ici qu'on va appeler le (les) services (qui eux accèdent à la db)
// On va ensuite, vérifier si cette tâche s'est faite correctement et envoyer la bonne réponse en fonction
    // En mode templating : Envoyer la bonne page avec les infos dedans
    // En mode API : Envoyer le bon code http avec (potentiellement) la ressource liée

const userController = {
    getUsers : (req, res) => {
        // Récupérer la liste des users
        // Vérifier si on a obtenu nos users
        // Si on a nos users, on rend le template
        res.send("<h1> Liste des utilisateurs </h1>")
        // Si erreur de la requête, on rend une page d'erreur
    },
    postUser : (req, res) => {
        // Ajouter un nouvel utilisateur
        // Vérification si bien ajouté
        // si bien ajouté, je récupère son id (42)
        res.redirect('/users?/42');
        // si pas bien ajouté, on redirige vers la page notfound
    },
    getUserById : (req, res) => {


        throw Error("UserNotFound");


        // Pour récupérer la valeur du paramètre
        // req.params.id
        // On appelle le service qui va chercher le user correspondant à l'id
        // Si on l'a optenu, on affiche le rendu avec le user
        res.send(`<h1>Affichage de l'utilisateur dont l'id est ${req.params.id}</h1>`)
        // si on l'a pas eu, on affiche/redirige vers la page 404
        
    }
}

module.exports = userController;