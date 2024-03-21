
const messageController = {

    hello: async(req, res) =>{
        res.status(200).json({message: "Hello world !"});
    },
    protected: async(req, res) =>{
        
        console.log(req.token);

        res.status(200).json({message: "Bonjour ... "});
    },
    admin: async(req, res) =>{
        res.status(200).json({message: "Bonjour Admin ... ☺"});
    },
}

export default messageController;