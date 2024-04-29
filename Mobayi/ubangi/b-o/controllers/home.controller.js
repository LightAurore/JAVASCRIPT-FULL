const homeController = {

    index: (req, res) => {
        console.log(req.session.user?.name ?? 'Non connecté');
        const data = {
            now: (new Date()).toLocaleDateString('fr-be')
        };
        res.render('home/index', data);
    },
    chat: (req, res) => {

        res.render('home/chat');
    },
    about: (req, res) => {

        res.render('home/contact');
    },
    protected: (req, res) => {

        res.render('home/contact');
    },

    contact: (req, res) => {

        res.render('home/contact');
    },

    contactPost: (req, res) => {

        // req.body => Contient les données du formulaire (POST)
        //             Necessite le middleware "express.urlencoded(...)"

        const { email, message } = req.body;        

        // Validation des données
        if(!email || !message || email.trim() === '' || message.trim() === '') {
            const data = {
                errorMsg : 'Les données ne sont pas valide ! (╯°□°）╯︵ ┻━┻'
            }

            res.render('home/contact', data);
            return;
        }

        // Traitement des données (Cas réel : DB, fichier, email, ...)
        console.log('Donnée envoyée : ', req.body);

        // Redirection vers la page index
        res.redirect('/');
    },

    error404: (req, res) => {
        res.sendStatus(501);
    }
};

module.exports = homeController;