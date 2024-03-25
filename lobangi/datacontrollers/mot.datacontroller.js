

const motDatacontroller = {
    index: async(req, res) => {
        const mots = await motService.getAll();
        res.render('mot/index', {mots})
    },

    getWord: async(req, res) =>{
        res.sendStatus(501)
    },

    addWord: async(req, res) => {
        res.sendStatus(501)
    },

    updateWord: async(req, res) => {
        res.sendStatus(501)
    },

    deleteWord: async(req, res) => {
        res.sendStatus(501)
    },
}

module.exports = motDatacontroller;