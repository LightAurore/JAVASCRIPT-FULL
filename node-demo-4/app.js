'use strict'
const http = require('http');
const url = require('url');
const ejs = require('ejs');

const { PORT, NODE_ENV } = process.env;



// Routage
const routes = {
/**
 * Route Index
 * @param {http.IncomingMessage} req Request
 * @param {http.ServerResponse<http.IncomingMessage>} res Response
 */
    '/': async function index(req, res){
        // console.log('Route /');
        // const today = 
        const html = await ejs.renderFile('./views/index.ejs');
        
        res.writeHead(200);
        res.end(html);
    },
    '/contact': async function index(req, res){
        // console.log('Route / Contact');
        if(req.method === "POST"){
            
        }

        const html = await ejs.renderFile('./views/contact.ejs');

        res.writeHead(200);
        res.end(html);
    }
}

function readPostData(){
    return new Promise((resolve) =>{
        let data  = '';

            req.on('data', (form) => {
                data += form.toString('utf-8');
            })
            req.on('end', ()=>{
                const body = qs.parse(data)
                console.log(data);
                console.log(body);
            })
    })
}


// Server
const server = http.createServer((req, res) => {
    // req -> IncomingMessage
    // res -> http.ServerResponse<http.IncomingMessage>

    const { pathname } = url.parse(req.url);
    console.log(`[${req.method}] ${pathname}`);

    const route = pathname.toLowerCase();

    if(routes[route] !== undefined){

        routes[route](req, res);

        return;
    }

    // const page40

    res.writeHead(404);
    res.end('Erreur 404 ! ');

});

server.listen(PORT, ()=>{
    `Web server run on http://localhost:${PORT} [${NODE_ENV}]`
});