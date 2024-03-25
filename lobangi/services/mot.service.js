const Mot = require("../models/mot.model")


const motService = {
    getAll: async () => {
        const mots = await Mot.find(
            undefined,
            ['mot', 'classe', 'forme', 'genre', 'nombre', 'phonetique']
        )
        .populate({
            select: ['mot']
        })
    }
}