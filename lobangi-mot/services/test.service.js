// const os = require("os");
const chalk = require("chalk");
const Cat = require("../models/test.model");


const testService = {
    /**
     * Permet d'ajouter un chat
     * @param ({name: string}) param0 
     * @returns 
     */
    create: async({id, name}) => {
        // tester l'id
        const testId = parseInt(id);

        // Vérifier si l'id existe
        const catExists = await Cat.findOne({
            id: testId
        })

        if(catExists){
            console.log(chalk.blue('l\'id existe déjà 😬'));
            return;
        }


        // création de l'élément à ajouter dans la db
        const catCreated = new Cat({
            id: testId,
            name
        });

        // sauvegarde de l'élément dans la db
        await catCreated.save();
        const success = chalk.hex('#A5FF00');
        console.log(success('La donnée a été ajoutée avec succés'));

        return catCreated;
    }
}

module.exports = testService;