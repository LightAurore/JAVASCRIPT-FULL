const articleService = require("../services/article.service");
const { articleValidator } = require("../validators/article.validator");

const articleController = {
    index: async (req,res)=>{
        res.render('article/index');
    },
    detail: async (req,res)=>{
        res.render('article/detail');
    },
    addNewArticle: async (req,res)=>{
        const data = {}; 
        res.render('article/form', { data });
    },
    addNewArticle_POST: async (req,res)=>{
        try {
            
            const data = await articleValidator
                                    .noUnknown()
                                    .validate(req.body, {abortEarly: false});
            

             console.log('data', data);
             // save article in BD
             articleService.create({
                 title: data.title,
                 slug: data.slug || null,
                 tag : data.tag,
                 desc: data.description,
                 content: data.content
             });

            // Redirection vers la page accueil (ou page detail)
            res.redirect('/')
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

        res.sendStatus(501);
        
    }
}

module.exports = articleController;