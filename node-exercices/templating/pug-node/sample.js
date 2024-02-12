const express = require("express"), app = express();

const PORT = 8582;

// variables
const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
]

// template
const pug = require('pug');
app.set('view engine', 'pug')


//
// app.use(express.static('css', {"content-type":"text/css"}));
//Lecture du css
app.use('/css',express.static(__dirname +'/css'));  // ok
app.use('/img',express.static(__dirname +'/img'));  // ok



// files
app.get('/', (req,res)=>{
    res.render('sample', {
        title: 'Express pug',
        message: 'Express PUG template',
        mois : mois,
        user: 'Developpeur web'
    })
})
app.get('/gallerie', (req,res)=>{
    res.render('gallerie', {
        title: 'Gallerie',
        message: 'Mes photos'
    })
})
app.get('/faq', (req,res)=>{
    res.status(200).render('faq', {
        title: 'Gallerie',
        message: 'questions & réponses'
    })
})
app.get('/shop', (req,res)=>{
    res.status(200).render('shop', {
        title: 'Boutique',
        message: 'Faites votre choix',
        sect: "Chaussure"
    })
})


// server
app.listen(PORT, ()=>console.log(`Server started on port ${PORT} : http://localhost:${PORT}`))