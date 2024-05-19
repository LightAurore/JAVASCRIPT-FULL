
const routelvlMiddleware = (req, res, next) => {
    //Vérifier si on le bon role ou non
    let isAdmin = false;

    // Si la personne est admin, on continue la requête, sinon, on le sort de la requête
    (isAdmin) ? next() : res.send("<h1> Vous n'avez pas les droits! </h1>")
}

module.exports = routelvlMiddleware;