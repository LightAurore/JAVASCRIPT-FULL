import { actorDTO, actorListDTO } from "../dto/actor.dto.js"
import db from "../models/index.js"

const actorService = {
    add: async (actorData) =>{
        const actor = await db.Actor.create(actorData)

        return new actorDTO(actor)
    },

    getById: async (actorId) => {
        const actor = await db.Actor.findByPk(actorId);

        // const actor2 = await db.Actor.findOne();
        return !!actor ? new actorDTO(actor) : null
    },

    getAll : async (offset, limit) => {
        const { rows, count } = await db.Actor.findAndCountAll({
            offset,
            limit
        });

        return {
            rows,
            actors: rows.map(r => new actorListDTO(r))
        }
    }
}

export default actorService