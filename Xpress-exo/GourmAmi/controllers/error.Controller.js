const errorController = {
    error404: (req,res)=>{
        console.log("l'erreur ramène ici 404");
        res.render('error/not-found')
    },
    error400: (req,res)=>{
        res.send('<h1>bad request</h1>')
    },
    error401: (req,res)=>{
        res.send('<h1>Unauthorized</h1>')
    },
    error500: (req,res)=>{
        res.send('<h1>Internal server</h1>')
    },
    error503: (req,res)=>{
        res.send('<h1>Service Unavailable</h1>')
    },
    error501: (req,res)=>{
        res.send('<h1>Not implemented</h1>')
    },
    error304: (req,res)=>{
        res.send('<h1>Not modified</h1>')
    },
}

module.exports = errorController;