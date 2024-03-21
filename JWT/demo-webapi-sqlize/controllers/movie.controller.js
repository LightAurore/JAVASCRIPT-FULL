import movieService from "../services/movie.service.js";

const movieController = {
    getOne : async (req, res) =>{
        res.sendStatus(501);
    },
    getAll: async (req, res) => {
        res.sendStatus(501);
    },
    create: async (req, res) => {
        // 
        movieService.add(req.validateData);

    },
    update: async (req, res) => {
        res.sendStatus(501);
    },
    delete: async (req, res) => {
        res.sendStatus(501);
    },
    addActor: async (req, res) => {
        res.sendStatus(501);
    },
    removeActor: async (req, res) => {
        res.sendStatus(501);
    }
}

export default movieController;