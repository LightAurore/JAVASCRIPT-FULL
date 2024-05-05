const { v4:uuid4 } = require("uuid");
const Caste = require("../models/role.model");
const Customer = require("../models/customer.model");

const roleService = {

    /**
     * Permet d'ajouter un role
     * @param {{ role_name: string}} role
     */
    create: async ({role_name}) => {
        const casteCustom = role_name?.trim() || role_name;
        let casteFinal = casteCustom.toLowerCase().trim();

        // Check si le le caste existe
        const casteExists = await Caste.findOne({
            role_name: casteFinal
        });

        // - Un role trouvé avec le caste -> Modifier le caste
        const v4options = {
            random: [
              0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36,
            ],
          };
        if(casteExists) {
            const casteSufix = uuid4(v4options);
            casteFinal = casteFinal + '-' + casteSufix;
            // TODO Idéalement, il faut recheck le caste ;)
        }
        
        // Création du caste via le model de Mongoose
        const casteCreated = new Caste({
          role_name: casteFinal
        })

        // Invocation de la métohde "save" pour enregistrer en DB
        await casteCreated.save();

        return casteCreated;
    },

    /**
     * Permet d'obtenir la liste de tous les roles
     */
    getAll: async () => {
        const castes = await Caste
            .find(
                undefined, // Filter            
                ['caste'] // Projection
            )

        return castes;
    },

    getById: async (id) => {
        const caste = await Caste
            .findById(
                { id } // Filter
            )

        console.log(caste);

        return caste;
    },
    
    toggleRole: async (casteId, id) => {
        const customer = await Customer
            .findById(
                { id }, // Filter
                {
                  role: 'casteId'
                }
            )

        console.log(customer);

        return customer;
    }


};

module.exports = roleService;