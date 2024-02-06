const http = require('http');

const url = require('url');

const PORT = 8080;

// créer un serveur

const server = http.createServer((req, res) =>{

    // const requestUrl = url.parse(req.url, true);

    const {pathname, query} = url.parse(req.url, true);
    const {method} = req;

    console.log(pathname);
    console.log(` ${method}  ${pathname}`);

    if(pathname === '/' && method === 'GET'){

        res.writeHead(200, { 'content-type': 'text/html'});
        
        res.write(`
        <header>
        <h1>Hello world !</h1>
        </header>
        `);
        
        res.end();
    }
    else if(pathname === '/hello' && method === 'GET'){
        const name = query?.name ?? 'Inconnu.e';
        console.log(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        </head>
        <body>
        <h1>Bonjour ${name}</h1>
        </body>
        </html>
        `);


    }
    else{
        res.writeHead(404, {'content-type' : 'text/html'})
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        </head>
        <body>
        <h1>404 error</h1>
        </body>
        </html>
        `);
        res.end()
    }

})


server.listen(PORT, () => {
    console.log(`Listening on port http:localhost:${PORT}`)
})



