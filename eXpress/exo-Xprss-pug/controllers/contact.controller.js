const contactController = {
    contact: (req, res) =>{
        res.render("message/contact")
    },
    contactPost: (req, res) =>{
        // req.body => Contient les données du formulaire (POST)
        //             Necessite le middleware "express.urlencoded(...)"

        const { email, message } = req.body;        

        // Validation des données
        if(!email || !message || email.trim() === '' || message.trim() === '') {
            const data = {
                errorMsg : 'Les données ne sont pas valide ! (╯°□°）╯︵ ┻━┻'
            }

            res.render('message/contact', data);
            return;
        }

        // Traitement des données (Cas réel : DB, fichier, email, ...)
        // console.log('Donnée envoyée : ', req.body);

        // Redirection vers la page index
        res.redirect('/confimer');
    }
}

module.exports = contactController;