const advertService = require("../services/advert.service");
const { advertValidator, advertCommentValidator } = require("../validators/advert.validator");

const advertController = {

    index : async (req, res) => {
        const adverts = await advertService.getAll();
        res.render('advert/index', { adverts });
    },

    detail: async (req, res) => {
        const slug = req.params.slug;

        // Récuperation de l'advert en DB
        const advert = await advertService.getBySlug(slug);
        if(!advert) {
            res.status(404).render('advert/advert-notfound');
            return;
        }

        // Récuperation des infos temporaire depuis la session
        const message = req.session.comment?.message;
        const data = req.session.comment?.data ?? {} ;

        // Cleanup de la session
        req.session.comment = undefined;

        // Affichage de la page detail
        res.render('advert/detail', { advert, data, message });
    },

    addNewAdvert: async (req, res) => {
        // Si on n'est pas connecté → Redirection sur la page login
        const userId = res.locals.session.user?.id;  // req.session.user?.id;
        
        if(!userId) {
            res.redirect('/customer/login');
            return;
        }

        // Donnée initial du form
        const data= {};
        // Rendu du formulaire
        res.render('advert/advert-form', { data });
    },
    
    addNewAdvert_POST: async (req, res) => {
        // Si on n'est pas connecté → Erreur !
        const userId = res.locals.session.user?.id ?? "user n'est pas";

        if(!userId) {
            
            res.sendStatus(400);
            return;
        }

        let data;
        try {
            data = await advertValidator
                            .noUnknown()
                            .validate(req.body, { abortEarly: false });

            
            
        }
        catch(error) {
            
            //! Création d'un objet error sur base de l'erreur de Yup
            const validationError= {};
            for(const fieldError of error.inner) {
                const path = fieldError.path;
                const message = fieldError.errors[0];
                
                if(!validationError.hasOwnProperty(path)) {
                    validationError[path] = message;
                }
            }

            // console.log('error', error.inner.map(e => e.path));
            // console.log('error', error.inner.map(e => e.errors[0]));
            // console.log('final', validationError);
            
            res.render('advert/advert-form', {
                error: validationError,
                data: req.body
            });
            return;
        }
        
         // Save advert in DB
         await advertService.create({
            title: data.title,
            author: userId,
            desc: data.description,
            slug: data.slug || null,
            tag: data.tag,
            content: data.content
        });

        // Redirection vers la page accueil (ou page detail)
        res.redirect('/');
    }
};

module.exports = advertController;