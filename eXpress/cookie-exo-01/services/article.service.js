const { nanoid } = require("nanoid");
const Article = require("../models/article.model");

const articleService = {

    /**
     * Permet d'ajouter un article
     * @param {{ title: string, author: string, slug: string, tag: string[], desc: string?, content: string }} article 
     */
    create: async ({ title, author, slug, tag, desc, content }) => {

<<<<<<< HEAD
        const slugCustom = slug?.trim() || title;
        let slugFinal = slugCustom.toLowerCase().trim().replaceAll(/[^\w\d]/g, '-');
=======
        let slugFinal = slugCustom.toLowerCase().trim().replaceAll(/[^\w\d]/g, "-"); // /[^\w\d]+/g   /\s+/g
>>>>>>> e3bc91a4173909219e50c32aa479023c37704b5e

        // Check si le slug existe
        const articleExists = await Article.findOne({
            slug: slugFinal
        });

        // - Un article trouvé avec le slug -> Modifier le slug
        if(articleExists) {
            const slugSufix = nanoid(5);
            slugFinal = slugFinal + '-' + slugSufix;
            // TODO Idéalement, il faut recheck le slug ;)
        }
        
        // Création de l'article via le model de Mongoose
        const articleCreated = new Article({
            title,
            author,
            slug: slugFinal,
            tag,
            desc: desc || content.slice(0, 100),
            content
        })

        // Invocation de la métohde "save" pour enregistrer en DB
        await articleCreated.save();

        return articleCreated;
    },
<<<<<<< HEAD

=======
    
    
>>>>>>> e3bc91a4173909219e50c32aa479023c37704b5e
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