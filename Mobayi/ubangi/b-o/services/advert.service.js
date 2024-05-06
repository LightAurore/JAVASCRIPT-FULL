const { v4:uuid4 } = require("uuid");
const advert = require("../models/advert.model");

const advertService = {

    /**
     * Permet d'ajouter un advert
     * @param {{ title: string, author: string, slug: string, tag: string[], desc: string?, content: string }} advert 
     */
    create: async ({ title, author, slug, tag, desc, content }) => {

        const slugCustom = slug?.trim() || title;
        let slugFinal = slugCustom.toLowerCase().trim().replaceAll(/[^\w\d]/g, '-');

        // Check si le slug existe
        const advertExists = await advert.findOne({
            slug: slugFinal
        });

        // - Un advert trouvé avec le slug -> Modifier le slug
        const v4options = {
            random: [
              0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36,
            ],
          };
        if(advertExists) {
            const slugSufix = uuid4(v4options);
            slugFinal = slugFinal + '-' + slugSufix;
            // TODO Idéalement, il faut recheck le slug ;)
        }
        
        // Création de l'advert via le model de Mongoose
        const advertCreated = new advert({
            title,
            author,
            slug: slugFinal,
            tag,
            desc: desc || content.slice(0, 100),
            content
        })

        // Invocation de la métohde "save" pour enregistrer en DB
        await advertCreated.save();

        return advertCreated;
    },

    /**
     * Permet d'ajouter un commentaire à un advert
     * @param {string} slug 
     * @param {string} message 
     * @param {string} authorId 
     * @returns {boolean} updateSuccess
     */
    addComment: async (slug, message, authorId) => {
        // Récuperation de l'advert ciblé par le "slug"
        const advertTarget = await advert.findOne({ slug });
        
        // Stop si l'advert n'existe pas 
        if(!advertTarget) {
            // Possibilité d'envoyé une erreur à la place (cf : Demo API)
            return false; 
        }

        // Mise à jours de l'advert
        const advertUpdated = await advert.updateOne({ slug }, {
            $push: {
                comments : { message, author: authorId }
            }
        });

        return !!advertUpdated; // advertUpdated !== null
    },

    /**
     * Permet d'obtenir la liste de tous les adverts
     */
    getAll: async () => {
        const adverts = await advert
            .find(
                undefined, // Filter            
                ['title', 'author', 'slug', 'desc', 'updatedAt'] // Projection
            )
            .populate({
                path: 'author',         // Collection lié
                select: ['username']    // Projection
            });
            

        return adverts;
    },

    getBySlug: async (slug) => {
        const advert = await advert
            .findOne(
                { slug } // Filter
            )
            .populate({
                path: 'author',
                select: ['username', 'firstname', 'lastname']
            })
            .populate({
                path: 'comments.author',
                select: ['username', 'firstname', 'lastname']
            })
        
        return advert;
    }

};

module.exports = advertService;