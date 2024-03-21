
const dicoController = {
    index: async (req, res) =>{
        res.render('dico/dictionnaire');
    },

    addWord: async (req,res) =>{

        res.sendStatus(501);
    },
    
    updateWord: async (req, res) =>{
        res.sendStatus(501);
    },

    removeWord: async (req, res) =>{
        res.sendStatus(501);
    }
}

module.exports = dicoController;