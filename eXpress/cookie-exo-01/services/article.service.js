const { nanoid } = require('nanoid');
const Article = require('../models/article.model');

const articleService = {
    /**
     * 
     * @param {{title: string, slug : string[], desc: string?, content : string}} article
     */
    create: async ({title, slug, desc, tag,content}) =>{
        let slugCustom = slug || title;

        let slugFinal = slugCustom.toLowerCase().trim().replaceAll(/[^\w\d]/g, "-"); // /[^\w\d]+/g   /\s+/g

        // checke si le slug existe déjà
        const articleExists = await Article.findOne({ 
            slug: slugFinal
        });

        // - un article trouvé avec le slug -> Modifier le slug
        if(articleExists){
            const slugSufix = nanoid(5);
            slugFinal = slugFinal + '-' + slugSufix;
            // TODO idéallement, il faut recheck le slug ;)
        }

        // création de l'article via le model de Mongoose
        const articleCreated = new Article({
            title,
            author,
            slug: slugFinal,
            tag,
            desc: desc || content.slice(0, 100),
            content

        })

        await articleCreated.save();

        // console.log(articleCreated);

        return articleCreated;
    },
    
    
    /**
     * Permet d'ajouter un commentaire à un article
     * @param {string} slug 
     * @param {string} message 
     */
    addComment: async (slug, message) => {
        // Récuperation de l'article ciblé par le "slug"
        const articleTarget = await Article.findOne({ slug });
        
        // Stop si l'article n'existe pas 
        if(!articleTarget) {
            // Possibilité d'envoyé une erreur à la place (cf : Demo API)
            return false; 
        }

        // Mise à jours de l'article
        const articleUpdated = await Article.updateOne({ slug }, {
            $push: {
                comments : { message }
            }
        });

        return !!articleUpdated; // articleUpdated !== null
    },

    /**
     * Permet d'obtenir la liste de tous les articles
     */
    getAll: async () => {
        const articles = await Article
            .find(
                undefined, // Filter            
                ['title', 'author', 'slug', 'desc', 'updatedAt'] // Projection
            )
            .populate({
                path: 'author',         // Collection lié
                select: ['username']    // Projection
            });

        console.log(articles);
        return articles;
    },

    getBySlug: async (slug) => {
        const article = await Article
            .findOne(
                { slug } // Filter
            )
            .populate({
                path: 'author',
                select: ['username', 'firstname', 'lastname']
            })
        
        console.log(article);
        return article;
    }

};

module.exports = articleService;