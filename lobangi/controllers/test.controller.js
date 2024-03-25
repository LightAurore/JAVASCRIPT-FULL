const testService = require("../services/test.service");
const testValidator = require("../validators/test.validator");


const testController = {
    addCat: async (req, res) => {
        // Donnée initial du form
        const data= {};
        // Rendu du formulaire
        res.render('cat/form', { data });
    },

    addCat_POST: async (req, res) => {
        let data;
        // La validation de données
        try {
            console.log(req.body);
            data = await testValidator.noUnknown().validate(req.body, {abortEarly: false});

            console.log('pussycat', data);
        } catch (error) {
            console.log(error);
            
            res.render('cat/form',{error: "Chat non valable", data: req.body});

            return;
        }

        // Ajout de données valables
        await testService.create({
            id: data.id,
            name: data.name
        });

        res.redirect('new');
    }
}

module.exports = testController ;