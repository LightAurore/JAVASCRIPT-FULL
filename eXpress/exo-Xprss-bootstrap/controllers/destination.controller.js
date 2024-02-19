const datajson = require('../db/thailand');

const destinationController = {
    destination: (req,res) => {
        const data = datajson;


        res.render("destination/lieux", {data : data})
    }
}

module.exports = destinationController;