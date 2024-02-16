const http = require('http');
const url = require('url');

const PORT = 8080;

// Création d'un serveur
const server = http.createServer((req, res) => {

    const { pathname, query } = url.parse(req.url, true);
    const { method } = req;
    console.log(`[${method}] ${pathname}`);

    if(pathname === '/' && method === 'GET') {

        // Définir le "code de resultat" de la requete
        res.writeHead(200, { 'content-type': 'text/html' })
        
        // Ecrite la réponse
        res.write('<html><head><meta charset="utf-8"></head><body><h1>Hello World !</h1></body></html>');
        res.end();
    }
    else if(pathname === '/hello' && method === 'GET') {
        const name = query?.name ?? 'Inconnu·e';

        // Définir le "code de resultat" de la requete
        res.writeHead(200, { 'content-type': 'text/html' })
        
        // Ecrite la réponse
        res.write(`<html><head><meta charset="utf-8"></head><body><h1>Bonjour ${name} !</h1></body></html>`);
        res.end();
    }
    else {
        // Gestion de l'erreur 404
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<html><head><meta charset="utf-8"></head><body><h1>Page non trouvé !</h1> <h2>(╯°□°）╯︵ ┻━┻</h2></body></html>');
        res.end();
    }
});

// Ecoute du port 8080 par le serveur
server.listen(PORT, () => {
    console.log(`Web server up on port ${PORT}`);
})