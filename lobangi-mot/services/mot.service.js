const Mot = require("../models/mot.model");
const logError = require("../tools/word-not-exist.tool");

const wordExists = async (word) =>{
    const motCustom = word?.trim() || null;

        const motFinal = motCustom.toLowerCase().trim().replaceAll(/[^\w\d]/g, '-');

        // vérifier si le mot existe
        const motExist = await Mot.findOne({
            mot: motFinal
        })

        const motTrouver = {
            mot: motFinal,
            motExist: !!motExist
        }

        return motTrouver;
}

const motService = {
    getAll: async () => {
        const mots = await Mot.find(
            undefined,
            ['mot', 'classe', 'forme', 'genre', 'nombre', 'phonetique']
        )
    },

    create: async ({mot, phonetique}) => {
        const motData = await wordExists(mot);
        
        if(motData.motExist){
            console.log('Le mot existe déjà 😊')
            return false;
        }
        // creation du mot via le model de Mongoose
        const motCreated = new Mot({
            mot : motData.mot, 
            phonetique
        })
        console.log(2);
        // enregistrer les données
        await motCreated.save();
        console.log(3);
        return motCreated;
    },

    addSens: async ({
                    mot,
                    classe, 
                    forme, 
                    genre, 
                    pluriel, 
                    origine, 
                    sensContent, 
                    etymologie, 
                    sensExemple
    }) => {

        const motData = await wordExists(mot);
        
        if(motData.motExist === false){
            console.log('Le mot n\'est pas dans la base de données 🥺')
            return false;
        }

        // 
        const motUpdated = await Mot.updateOne(
            { mot: motData.mot },
            {
            $push:{
                sens: 
                {
                    classe, 
                    forme, 
                    genre, 
                    pluriel, 
                    origine, 
                    sensContent, 
                    etymologie, 
                    sensExemple
                }
            }
        });
        
        return !!motUpdated;
    },

    addSynonyme: async ({mot, synonyme}) => {
        const motData = await wordExists(mot);
        
        if(motData.motExist === false){
            logError();
            return false;
        }
        // 
        const motUpdated = await Mot.updateOne(
            { mot: motData.mot },
            {
            $push:{
                synonymes: {synonyme}
            }
        });
        
        return !!motUpdated;
    },

    addAntonyme: async ({mot, antonyme}) => {
        const motData = await wordExists(mot);
        
        if(motData.motExist === false){
            logError();
            return false;
        }
        // 
        const motUpdated = await Mot.updateOne(
            { mot: motData.mot },
            {
            $push:{
                antonymes:{
                    antonyme
                }
            }
        });
        
        return !!motUpdated;
    },

    addPrononciation: async ({mot, origine, prononciation}) => {
        const motData = await wordExists(mot);
        
        if(motData.motExist === false){
            logError();
            return false;
        }

        // 
        const motUpdated = await Mot.updateOne(
            { mot: motData.mot },
            {
            $push:{
                prononciations: 
                {
                    origine,
                    prononciation
                }
            }
        });
        
        return !!motUpdated;
    },

    addTraduction: async ({mot, langueEtrangere, abbreviation, motEtranger}) => {
        
        const motData = await wordExists(mot);
        if(motData.motExist === false){
            logError();
            return false;
        }
        // 
        const motUpdated = await Mot.updateOne(
            { mot: motData.mot },
            {
            $push:{
                traductions: 
                {
                    langueEtrangere,
                    abbreviation,
                    motEtranger
                }
            }
        });
        return !!motUpdated;
    }

}

module.exports = motService;