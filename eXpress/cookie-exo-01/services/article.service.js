const { nanoid } = require('nanoid');
const Article = require('../models/article.model');

const articleService = {
    /**
     * 
     * @param {{title: string, slug : string[], desc: string?, content : string}} article
     */
    create: async ({title, slug, desc, tag,content}) =>{

        let slugFinal = slug.toLowerCase().trim().replaceAll(/\s+/g, "-");

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
    addComment: async (slug, message)=>{
        // Récuperation de l'article cible par le "slug"
        const articleTarget = await Article.findOne({ slug });

        // test de garde au lieu de test d'acceptation
        if(!articleTarget){
            return false;
        }

        // Mise à jour de l'article
        const articleUpdated =  await Article.updateOne({ slug }, {
            $push: {
                comments : { message }
            }
        });
        return !!articleUpdated; // articleUpdated !== null
    }
};

module.exports = articleService;