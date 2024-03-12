import personService from '../services/person.service.js';
import { personValidator } from '../validators/person.validator.js';



const personController = {

    getAll: async (req, res) => {
        
        // Récuperation des données via le service
        const data = await personService.getAll();
        {
        // Envoi de la réponse
        //? Envoi d'un JSON "à la main"
        /*
        res.status(200)
           .header({'Content-Type': 'Application/JSON'})
           .end(JSON.stringify(data));
        */
}
        //? Méthode .json d'express
        res.status(200).json(data);
    },

    getById: async (req, res) => {
        console.log(req);
        const id = parseInt(req.params.id);
        const data = await personService.getById(id);

        if(!data) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(data);
    },

    add: async (req, res) => {
        const personToAdd = req.body;

        // TODO  Validation
        let data;
        try {
            data = await personValidator.validate(personToAdd)
        } catch (validationError) {
            // throw new Error('Les données ne sont pas valides')
            res.status(422).json({
                errorMessage: "les données sont invalides !",
            });
        }

        // Appeler le service pour appliquer les règles business (Add to FakeData)
        const personAdded = await personService.add(personToAdd)

        // Response de la requete
        res.status(201)
        .location('/person/' + personAdded.personId)
        .json(personAdded);
    },

    update: async (req, res) => {

        // récuperer l'id de l'élément qu'on veut update et les données du body
        const personId = parseInt(req.params.id)
        const personToUpdate = req.body;

        // test si l'élément existe
        const personExists = await personService.getById(personId);
        if(!personExists){
            res.sendStatus(404);
            return;
        }

        // valider des données
        let data;
        try {
            data = await personValidator.validate(personToUpdate);
        } catch (error) {
            res.status(422).json({
                errorMessage: "Les données sont invalides !"
            });
            return;
        }

        // traitement → la mise à jour des données via le service
        // TODO → await personService.update()
        const isUpdated = await personService.update(personId, data);

        if(!isUpdated){
            res.status(400)
            .json({
                errorMessage: 'Une erreur s\'est produite',
            });
        }

        res.sendStatus(501);
    },

    delete: async (req, res) => {
        // recuperer l'id
        const personId = parseInt(req.params.id);

        const personExists = await personService.getById(personId);
        if(!personExists){
            res.sendStatus(404);
            return;
        }

        const isDeleted = await personService.delete();
        if(!isDeleted){
            res.sendStatus(400);
            return;
        }
        res.sendStatus(204);
    }
};

export default personController;