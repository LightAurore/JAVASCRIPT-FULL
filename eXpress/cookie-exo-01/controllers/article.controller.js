const articleService = require("../services/article.service");
const { articleValidator } = require("../validators/article.validator");

const articleController = {

    index : async (req, res) => {
        const articles = await articleService.getAll();
        res.render('article/index', { articles });
    },

    detail: async (req, res) => {
        const slug = req.params.slug;

        const article = await articleService.getBySlug(slug);

        if(!article) {
            res.status(404).render('article/not-found');
            return;
        }

        const message = req.session.message;

        req.session.comment = undefined;

        res.render('article/detail', { article, message });
    },

    addNewArticle: async (req, res) => {

        // Si on n'est pas connecté → Redirection sur la page login
        const userId = req.session.user?.id;  // res.locals.session.user?.id;
        if(!userId) {
            res.redirect('/member/login');
            return;
        }

        // Donnée initial du form
        const data= {};
        // Rendu du formulaire
        res.render('article/form', { data });
    },
    
    addNewArticle_POST: async (req, res) => {

        // Si on n'est pas connecté → Erreur !
        const userId = req.session.user?.id;
        if(!userId) {
            res.sendStatus(400);
            return;
        }

        let data;
        try {
            data = await articleValidator
                            .noUnknown()
                            .validate(req.body, { abortEarly: false });

            console.log('data', data);
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
            
            res.render('article/form', {
                error: validationError,
                data: req.body
            });
            return;
        }
        
         // Save article in DB
         await articleService.create({
            title: data.title,
            author: userId,
            desc: data.description,
            slug: data.slug || null,
            tag: data.tag,
            content: data.content
        });

        // Redirection vers la page accueil (ou page detail)
        res.redirect('/');
    },

    addCommentToComment_POST: async (req, res) => {

        //! TODO : Obtenir l'id de l'utilisateur (session)
        //? TODO : Si non connecté -> Bad request
        
        
        //! TODO : Validation des données du body
        //? TODO : Si les données sont invalides -> Message d'erreur
        let data;
        try {
            data = await articleCommentValidator.validate(req.body);
        } catch (error) {
            console.log(error);
            res.session.comment= {
                data: req.body,
                error: "Erreur lors de l'ajout du commentaire"
            }
            // res.session.error = "Erreur lors de l'ajout du commentaire";
            res.redirect(`/article/detail/${req.body.slug}?message=error`);
            // res.redirect(`/article/detail/${req.body.slug}?message=error`);
        }


        //! TODO : Add comment into DB (ArticleService)
        
        
        //* TODO : Redirection vers la page detail


        res.sendStatus(501);
    }

};

module.exports = articleController;