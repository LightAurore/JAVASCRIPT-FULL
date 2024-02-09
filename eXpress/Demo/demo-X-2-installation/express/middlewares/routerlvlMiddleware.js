//
const routelvlMiddleware = (req, res, next) =>{
    // 

    let isAdmin = true;

    (isAdmin) ? next() : res.send(`<h1>Vous n'avez pas les droits</h1>`)
}

module.exports = routelvlMiddleware;