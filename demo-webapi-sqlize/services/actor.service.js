import { actorDTO } from "../dto/actor.dto.js"
import db from "../models/index.js"

const actorService = {
    add: async (actorData) =>{
        const actor = await db.Actor.create(actorData)

        return new actorDTO(actor)
    },

    getById: async (actorId) => {
        const actor = await db.Actor.findByPk(actorId, {});


        const actor2 = await db.Actor.findOne();
    }
}

export default actorService