const articleService = require("../services/article.service");
const { articleValidator } = require("../validators/article.validator");

const articleController = {
    index: async (req,res)=>{
        const articles = await articleService.getAll();
        res.render('article/index', { articles });
    },

    detail: async (req,res)=>{
        const slug = req.params.slug;

        const article = await articleService.getBySlug(slug);

        if(!article) {
            res.status(404).render('article/not-found');
            return;
        }

        res.render('article/detail');
    },

    addNewArticle: async (req,res)=>{

        // Si on n'est pas connecté → Redirection sur la page login
        const userId = req.session.user?.id;  // res.locals.session.user?.id;
        if(!userId) {
            res.redirect('/member/login');
            return;
        }

        const data = {}; 
        res.render('article/form', { data });
    },

    addNewArticle_POST: async (req,res)=>{

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
                                    .validate(req.body, {abortEarly: false});
            

             console.log('data', data);
            
        } catch (error) {
            // console.log(error, error.inner.map(e => e.message));
            // console.log('error', error.errors);
            // console.log('path', error.inner.map(e => e.path));
            // console.log('final', error.inner.map(e => e.errors[0]));

            // création d'un objet error sur base de l'erreur de "YUP"
            const validationError = {};

            for(const fieldError of error.inner){
                const path = fieldError.path;
                const message = fieldError.errors[0];

                if(!validationError.hasOwnProperty(path)){
                    validationError[path] = message;
                }
            }
            console.log('final', validationError);

            res.render('article/form', {error: validationError,data: req.body});
            return;
        }

         // save article in BD
             await articleService.create({
                 title: data.title,
                 slug: data.slug || null,
                 tag : data.tag,
                 desc: data.description,
                 content: data.content
             });

            // Redirection vers la page accueil (ou page detail)
            res.redirect('/')
        
    }
}

module.exports = articleController;