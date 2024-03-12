const recipeService = require('../services/recipe.service');
const { recipeCommentValidator, recipeValidator } = require('../validators/recipe.validator');
const mockup = require('./mockups/recipes.json');


const recetteController = {
    liste: async (req,res) =>{
        
/* 
        const recette = mockup.map(data =>{
            
            return {
                name: data.recipeName,
                desc: data.shortDescription,
                imgUrl:`/images/${data.thumbnail}`,
                author: data.author,
                date:data.datePublication,
                detailUrl: `/detail/${data.id}`
            }
        })
        
        const viewData = {
           recette
        };
 */
const recipes = await recipeService.getAll();
// console.log(recipes);
const viewData = recipes.map(data =>{
            
            return {
                name: data.recipename,
                desc: data.recipeshortdesc,
                imgUrl:`/images/${data.recipeimg}`,
                author: data.author.username,
                date:data.updatedAt.toLocaleDateString('fr-BE'),
                detailUrl: `/detail/${data._id}`
            }
})
        
        // const viewData = {
        //    recettes
        // };
 
        res.render('recette/liste', { viewData } )
    },
    detail: async (req,res) =>{
        
        const id = req.params.id;

        const recipe = await recipeService.getById(id);

        const viewData = {
            name: recipe.
            recipename,
            slug: recipe.slug,
            desc: recipe.
            recipeshortdesc,
            description: recipe.recipedesc,
            imgUrl:`/images/${recipe.recipeimg}`,
            ingredient: recipe.ingredient,
            step: recipe.step,
            author: recipe.author,
            date:recipe.
            updatedAt
        };

        res.render('recette/detail', viewData)
    },

    ajout: async (req,res) =>{
        // 
        const userId = req.session.user?.id;  // res.locals.session.user?.id;
        if(!userId) {
            res.redirect('/login');
            return;
        }
        // Donnée initial du form
        const data= {};
        // Rendu du formulaire
        res.render('recette/ajout', { data })
    },

    ajout_POST: async (req,res) =>{
        
        // Si on n'est pas connecté → Erreur !
        const userId = req.session.user?.id;
        if(!userId) {
            res.sendStatus(400);
            return;
        }
        
        let data;
        try {
            data = await recipeValidator.noUnknown().validate(req.body, { abortEarly: false });

            // console.log('data', data);
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
            
            res.render('recette/ajout', {
                error: validationError,
                data: req.body
            });
            return;
        }
        
        // Save recette in DB
        await recipeService.create({
            recipename: data.recipename, 
            author: userId,
            slug: data.slug || null,
            tag: data.tag,
            recipeimg: data.recipeimg || null,
            recipeshortdesc: data.recipeshortdesc ,
            recipedesc: data.recipedesc ,
            ingredient : data.ingredient,
            step: data.tag
        });

        res.redirect('/')
    },

    addCommentToRecipe_POST: async (req,res) =>{
        // Récuperation de l'utilisateur connecté
        const userId = req.session.user?.id;

        console.log(userId)
        if(!userId) {
            res.redirect('/login');
            return;
        }
        
        // Validation des données du body
        let data;
        try {
            data = await recipeCommentValidator.validate(req.body);
            console.log('data',data);
        }
        catch (error) {
            console.log('comment error',error);
            // Utilisation de la session pour transité les donnes
            req.session.comment = {
                data:  req.body,
                message: 'Erreur lors de l\'ajout du commentaire'
            };
            res.redirect(`/recette/detail/${req.params.id}`);
            return;
        }

        // Add comment into DB
        const commentAdded = await recipeService.addComment(data.slug, data.comment, userId);
       const  recipeCommentedId = commentAdded;
        console.log("comment : ", commentAdded);

        // Redirection
        if(commentAdded) {
            res.redirect(`/detail/${recipeCommentedId}`);
        }
        else {
            res.status(404).render('recette/not-found');
        }
    }
    
}

module.exports = recetteController;