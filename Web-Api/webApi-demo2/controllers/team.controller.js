import playerService from "../services/player.service.js";
import teamService from "../services/team.service.js";


const teamController = {
    /**
     * GET /api/teams - recevra toutes les équipes
     * @summay Liste des équipes
     * @tags Team
     * @param {string} email.path - Player's email
     * @return {PlayerDTO} 200 - Player - application/json
     */
    getAll: async (req, res) => {
            const teams = await teamService.getAll();

            res.status(200).json([...teams]);
    },
    /**
     * GET /api/teams - recevra toutes les équipes
     * @summay Obtenir une équipe
     * @tags Team
     * @param {number} id - Team's id
     * @return {PlayerDTO} 200 - Player - application/json
     */
    get: async (req, res) => {

        const team = await teamService.get(parseInt(req.params.id));
        // console.log(team);

        if (!team) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json({...team});
    },

    /**
     * POST /api/teams - recevra toutes les équipes
     * @summay Ajouter une équipe
     * @tags Team
     * @param {Team} team - Team data
     * @return {PlayerData} 200 - Player - application/json
     */
    add: async(req, res) =>{
        // 
        const data = req.body;
        try {
            const team = await teamService.add(data);

            res.status(201).location('/api/team/' + data.name)
          .json(team);
        } catch (error) {
            res.status(400).json({errorMessage: error.message});
        }
    },

    // 
    /**
     * PUT /api/teams - recevra toutes les équipes
     * @summay Modifier une équipe
     * @tags Team
     * @param {id} req.params.id - Team's Id
     * @param {data} req.body
     * @return {TeamData} 200 - Team - application/json
     * @return 204
     * @return 400 - Not found
     */
    update: async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        try {
            await playerService.update(id, data);
            res.sendStatus(204);
        } catch (error) {
            res.status(400).json({errorMessage: error.message});
        }
    },

    //
    delete: async (req, res) => {
        const id = req.params.id;

        if(!id){
            res.sendStatus(400);
            return;
        }

        try {
            await playerService.delete(id)
            res.status(204);
        } catch (error) {
            res.send(422).json({errorMessage: error.message});
        }
    },

    addPlayer: async (req, res) =>{
        const data = req.body.email;

        try {
            const player = await playerService.get(email);
            if(!player){
                res.sendStatus(404);
                return;
            }
            const team = await teamService.get(id);
            if(!team){
                res.sendStatus(404);
                return;
            }

            await teamService.addPlayer(player, team);
            res.sendStatus(204);


        } catch (error) {
            
        }
        
    },
    
    removePlayer: async (req, res) =>{
        const teamId = req.params.id;
        const data = req.body;
        try {
            await teamService.removePlayer(teamId, data);
            res.sendStatus(204);
        } catch (error) {
            res.status(400).json({errorMessage: error.message});
        }
        
    }


}
export default teamController;