// const { nanoid } = require('nanoid');  // gestion automatique de l'id

// 🥺

const Recipe = require('../models/recipe.model');

const recipeService = {

    // ajout de recette
    /**
     * Permet d'ajouter une recette
     * @param {recipename: string, author: string, slug: string ,tag: string ,recipeimg: string ,recipeshortdesc: string ,recipedesc: string ,ingredient: string[] ,step: string[]} param0 
     * @returns 
     */
    create: async({recipename, author, slug ,tag ,recipeimg ,recipeshortdesc ,recipedesc ,ingredient ,step}) =>{

        const slugCustom = slug?.trim() || recipename;
        let slugFinal = slugCustom.toLowerCase().trim().replaceAll(/[^\w\d]/g, '-');

        //
        const recipeExists = await Recipe.findOne({
            slug: slugFinal
        });

        // 
        if(recipeExists){
            const slugSuffix = nanoid(8) || null;
            const slugFinal = slugFinal + '-' + slugSuffix;
        }

        const recipeCreated = new Recipe({
            recipename, 
            author, 
            slug: slugFinal ,
            tag ,
            recipeimg ,
            recipeshortdesc: recipeshortdesc || recipedesc.slice(0,100) ,
            recipedesc ,
            ingredient ,
            step
        });

        // 
        await recipeCreated.save();

        return recipeCreated;
    },

    /**
     * Permet d'ajouter un commentaire à une recette
     * @param {string} slug 
     * @param {string} message 
     * @param {string} authorId 
     * @returns {boolean} updateSuccess
     */
    addComment: async(slug, message, authorId) =>{
        // Récupération de l'article par le slug
        const recipeTarget = await Recipe.findOne({slug});
        console.log(recipeTarget)
        // si la recette n'existe pas
        if(!recipeTarget){
            // 
            return false;
        }

        // 
        const recipeUpdate = await Recipe.updateOne({slug}, {
            $push: {
                comments: { message, author: authorId }
            }
        });

        // return !!recipeUpdate;
        if (!!recipeUpdate){
            return recipeTarget._id
        };
    },

    /**
     * Permet d'obtenir la liste de tous les articles
     * @returns {list} articles
     */
    getAll: async ()=>{
        const recipes = await Recipe.find(
            undefined, // Filter
            ['recipename','recipeimg', '_id', 'author', 'slug', 'recipeshortdesc', 'updatedAt'] // Projection
        ).populate({
            path: 'author', // Collection lié
            select: ['username']  // Projection
        });

        // console.log(recipes);

        return recipes;
    },

    getById: async (_id) =>{
        const recipe = await Recipe.findOne(
            { _id }  // Filter
            )
            .populate({
                path: 'comments.author',
                select: ['username', 'firstname', 'lastname']
            });

            // console.log(recipe);
            return recipe;
    }
};

module.exports = recipeService;