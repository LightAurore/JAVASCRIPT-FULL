
const applvlMiddleware = (req, res, next) => {
    console.log(`Requête partie à ${new Date().toLocaleTimeString('fr')} sur l'url ${req.url} avec la méthode ${req.method}`);

    next(); //Pour continuer la requête, sinon on reste à l'infini ici
}

module.exports = applvlMiddleware;