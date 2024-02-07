'use strict';
const http = require('http');
const url = require('url');
const qs = require('querystring');
const ejs = require('ejs');

const { PORT, NODE_ENV } = process.env;

// Systeme de routage simplifier (-> Ensuite, on utilisera un framework ♥)
const routes = {

    /**
     * Route Index
     * @param {http.IncomingMessage} req Request
     * @param {http.ServerResponse<http.IncomingMessage>} res Response
     */
    '/': async function index(req, res) {
        const today = (new Date()).toLocaleDateString('fr-be');
        const people = ['Della', 'Zaza', 'Balthazar'];

        const html = await ejs.renderFile('./views/index.ejs', { today, people })

        res.writeHead(200);
        res.end(html);
    },

    /**
     * Route Contact
     * @param {http.IncomingMessage} req Request
     * @param {http.ServerResponse<http.IncomingMessage>} res Response
     */
    '/contact': async function index(req, res) {

        // Traiter les données du formulaire
        const body = await readFormData(req);

        // TODO Si donnée -> Stocker en DB

        // Message de notification pour l'utilisateur
        const renderData = {
            message: body && 'Vos données ont bien été reçu !'
        };

        // Rendu de la page
        const html = await ejs.renderFile('./views/contact.ejs', renderData);
        res.writeHead(200);
        res.end(html);
    }
}

// Méthode pour extraire les données POST d'un formulaire
function readFormData(req) {

    if(req.method !== 'POST') {
        return Promise.resolve(null);
    }

    return new Promise((resolve) => {
        // - Création d'une variable pour stocker les donnée récues
        let data = '';

        // - Ajouter les données sur base d'un event « data »
        req.on('data', (form) => data += form.toString('utf-8'));
        
        // - On parse les données quand la requete est terminé
        req.on('end', () => {
            const body = qs.parse(data);
            console.log('Donnée POST:', body);

            resolve(body);
        });
    });
}

const server = http.createServer(async (req, res) => {
    // req -> IncomingMessage
    // res -> ServerResponse<http.IncomingMessage>

    const { pathname } = url.parse(req.url);
    console.log(`[${req.method}] ${pathname}`);

    const route = pathname.toLowerCase();
    if (routes[route] !== undefined) {

        await routes[route](req, res);
        return;
    }

    const page404 = await ejs.renderFile('./views/error404.ejs');
    res.writeHead(404);
    res.end(page404);
});

server.listen(PORT, () => {
    console.log(`Web server run on ${PORT} [${NODE_ENV}]`);
});