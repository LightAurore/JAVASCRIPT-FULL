const motService = require("../services/mot.service");
const capitalizeTool = require("../tools/capitalize.tool");
const { motValidator, motSensValidator, motSynonymeValidator, motAntonymeValidator, motPrononciationValidator, motTraductionValidator } = require("../validators/mot.validator");


const motController = {
    index: async(req, res) => {
        const mots = await motService.getAll();
        console.log('Liste des mots : ');
        console.log(mots)
        res.render('mot/index', {mots})
    },

    getWord: async(req, res) =>{
        res.sendStatus(501)
    },

    getAllWords: async(req, res) =>{
        res.sendStatus(501)
    },

    // 1° ajout du mot
    addWord: async(req, res) => {
        // objet initial vide
        const data = {};

        const motCap = req.errorAjout?.req.errorAjout.mot;

        const message = req.errorAjout ? req.errorAjout.message : "";

        // formulaire
        res.render('mot/base',{data, message: message, mot: motCap})
    },
    addWord_POST: async (req, res) => {
        // objet initial vide
        let data = {};
        try {
            console.log(req.body)
            data = await motValidator.noUnknown()
                    .validate(req.body, { abortEarly: false});
        } catch (error) {
            console.log(error);
            const validatorError = {};
            console.log("erreur de validation ")
            res.render('mot/base',{error: validatorError, data: req.body});
            return;
        }

        // save word in db
        const motCreated = await motService.create({
            mot: data.mot,
            phonetique: data.phonetique
        })

        if(!!motCreated){
            res.redirect('/mot/new');
        }else{
            const motCap = capitalizeTool(data.mot);

            res.render('mot/base', {message: " existe déjà 😊", mot: motCap})
        }
    },

    // 2° pronociation du mot
    addWordPrononciation: async(req, res) => {
        res.render('mot/prononciation');
    },
    addWordPrononciation_POST: async(req, res) => {
        let data = {};
        try {
            data = await motPrononciationValidator.validate(req.body)
        } catch (error) {
            console.log(error);
            console.log('diriger vers le mot')
            res.status(400).render('mot/prononciation');
        }
        
        const pronoAdded = await motService.addPrononciation({
            mot: data.mot, 
            origine: data.origine,
            prononciation: data.prononciation
        });

        console.log('prononciation ajouté')
        if(pronoAdded){
            req.body = {};
            res.render('mot/new', {mot: data.mot});
        }else{
            req.errorAjout = {
                mot: data.mot, 
                message: ' n\'exista pas.\n Vous pouvez l\'ajouter ici'
            }

            res.redirect("/mot/new" )
        }
    },
    
    // 3° synonyme du mot
    addWordSynonyme: async(req, res) => {
        let data = {};
        res.render('mot/synonyme',{data});
        
    },
    addWordSynonyme_POST: async(req, res) => {
        let data = {};
        try {
            data = await motSynonymeValidator.validate(req.body)
        } catch (error) {
            console.log(error);
            console.log('diriger vers le mot')
            res.status(400).render('mot/synonyme');
        }
        
        const synoAdded = await motService.addSynonyme({
            mot: data.mot, 
            synonyme: data.synonyme
        });

        console.log('synonyme ajouté')
        if(synoAdded){
            req.body = {};
            res.render('mot/synonyme', {mot: data.mot});
        }else{
            req.errorAjout = {
                mot: data.mot, 
                message: ' n\'exista pas.\n Vous pouvez l\'ajouter ici'
            }

            res.redirect("/mot/new" )
        }
    },
    // 4° contraire du mot
    addWordAntonyme: async(req, res) => {
        res.render('mot/antonyme');
    },
    addWordAntonyme_POST: async(req, res) => {
        let data = {};
        try {
            data = await motAntonymeValidator.validate(req.body)
        } catch (error) {
            console.log(error);
            console.log('diriger vers le mot')
            res.status(400).render('mot/antonyme');
        }
        
        const synoAdded = await motService.addAntonyme({
            mot: data.mot, 
            antonyme: data.antonyme
        });

        console.log('antonyme ajouté')
        if(synoAdded){
            req.body = {};
            res.render('mot/antonyme', {mot: data.mot});
        }else{
            req.errorAjout = {
                mot: data.mot, 
                message: ' n\'exista pas.\n Vous pouvez l\'ajouter ici'
            }

            res.redirect("/mot/new" )
        }
    },
    // 5° contraire du mot
    addWordMeaning: async(req, res) => {
        res.render('mot/sens');
    },
    addWordMeaning_POST: async(req, res) => {
        let data = {};
        try {
            data = await motSensValidator.validate(req.body)
        } catch (error) {
            console.log(error);
            console.log('diriger vers le mot')
            res.status(400).render('mot/base');
        }
        
        const sensAdded = await motService.addSens({
            mot: data.mot, 
            classe: data.classe, 
            forme: data.forme, 
            genre: data.genre, 
            pluriel: data.pluriel, 
            origine: data.origine, 
            sensContent: data.sensContent, 
            etymologie: data.etymologie, 
            sensExemple: data.sensExemple
        });

        if(sensAdded){
            req.body = {};
            res.render('mot/base', {mot: data.mot});
        }else{
            req.errorAjout = {
                mot: data.mot, 
                message: ' n\'exista pas.\n Vous pouvez l\'ajouter ici'
            }

            res.redirect("/mot/new" )
        }
 
    },
    
    // 5° contraire du mot
    addWordTranslation: async(req, res) => {
        res.render('mot/traduction')
    },
    addWordTranslation_POST: async(req, res) => {
        console.log(req.body);
        let data = {};
        try {
            data = await motTraductionValidator.validate(req.body)
        } catch (error) {
            console.log(error);
            console.log('diriger vers le mot')
            res.status(400).render('mot/traduction');
        }
        console.log(1);
        console.log(data);
        const tradAdded = await motService.addTraduction({
            mot: data.mot, 
            langueEtrangere: data.langueEtrangere, 
            abbreviation: data.abbreviation, 
            motEtranger: data.motEtranger
        });
        console.log(2);
        console.log('traduction ajouté')
        if(tradAdded){
            req.body = {};
            res.render('mot/traduction', {mot: data.mot});
        }else{
            req.errorAjout = {
                mot: data.mot, 
                message: ' n\'exista pas.\n Vous pouvez l\'ajouter ici'
            }

            res.redirect("/mot/new" )
        }
    },



    updateWord: async(req, res) => {
        res.sendStatus(501)
    },

    deleteWord: async(req, res) => {
        res.sendStatus(501)
    },
}

module.exports = motController;