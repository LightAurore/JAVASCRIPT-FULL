
const applvlMiddleware = (req,res, next)=>{
    console.log(`Requète partie à ${new Date().toLocaleTimeString('fr')} sur l'url ${req.url} avec la méthode ${req.method}`);

    next();
}

module.exports = applvlMiddleware;