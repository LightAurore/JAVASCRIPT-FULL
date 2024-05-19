const homeController = {

    index: (req, res) => {
        console.log(req.session.user?.name ?? 'Non connecté');

        const data = {
            today: (new Date()).toLocaleDateString('fr-be'),
            username: req.session.user?.name
        };
        res.render('home/index', data);
    },
    chat: (req, res) => {

        res.render('home/chat');
    },
    about: (req, res) => {

        res.render('home/about');
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
        res.render('home/error404');
    },

    protected: (req, res) => {
        // Test si l'utilisateur est connecté
        
        if(!req.session.isLog) {
            res.redirect('/login');
            return;
        }

        if(req.session.user.role !== 'Admin') {
            res.redirect('/error');
            return;
        }

        res.render('home/protected');
    },

    editor: (req, res) => {
        // Test si l'utilisateur est connecté
        
        if(!req.session.isLog) {
            res.redirect('/login');
            return;
        }

        if(req.session.user.role !== 'Editor') {
            res.redirect('/error');
            return;
        }

        res.render('home/editor');
    },

    censored: (req, res) => {
        // Test si l'utilisateur est connecté
        
        if(!req.session.isLog) {
            res.redirect('/login');
            return;
        }

        if(req.session.user.role !== 'Censor') {
            res.redirect('/error');
            return;
        }

        res.render('home/censored');
    }
};

module.exports = homeController;