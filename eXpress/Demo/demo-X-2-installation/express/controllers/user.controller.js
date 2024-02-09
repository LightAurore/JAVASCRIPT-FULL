


const userController = {
    getUsers : (req,res) =>{
        // récup liste users
        // vérif si users obtenus
        // si templating
        res.send("<h1> Liste des utilisateurs </h1>");
        // si erreur → envoi pg erreur
    },
    postUser: (req,res) =>{
        res.redirect('/users/42');
    },
    getUserById: (req,res) =>{

        throw Error("User not found");
        res.send(`<h1>Afficher un utilisateur dont l'id est ${req.params.id}</h1>`);
    },
}


module.exports = userController;