const homeController = {
    index: (req,res)=>{
        
        const data = {now :(new Date()).toLocaleTimeString('fr-be')}

        // res.status(200).send("<h1>Index</h1>")
        res.render('home/index', data);
    },

    contact: (req,res)=>{
        //GET
        // res.status(200).send("<h1>Formulaire de contact ... </h1>")
        res.status(200).render("home/contact")
    },

    //POST
    contactPost: (req,res)=>{
        const { email, message} = req.body;
        console.log(req.body);

        // Validation des données
        if(!email || !message || email.trim() === '' || message.trim() === ''){

            const data = {
                errorMsg: 'Les données ne sont pas valides'
            }
            res.render('home/contact', data);
            // 
            return
        }

        // TODO Traiter les données du formulaires
        //  TODO si donnée validé → Rediriger vers   la page index
        // res.status(501).send("<h1>Page non terminé ...</h1>")

        res.redirect('/')
    }


}

module.exports = homeController;