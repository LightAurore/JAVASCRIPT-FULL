//! Le middleware d'erreur a 4 arguments
const errorHandlerMiddleware = (error, req, res, next) => {
    console.log("Une erreur est survenue !");
    console.log(error);

    res.status(500).send("<h1>Erreur serveur</h1>");
}

module.exports = errorHandlerMiddleware;