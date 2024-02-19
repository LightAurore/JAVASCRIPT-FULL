const datajson = require('../db/thailand');

const destinationController = {
    destination: (req,res) => {
        const data = datajson;
        const donnee = datajson.map((item) => {
            return {
                id: item.id,
                name: item.nom,
                desc: item.shortDescription,
                imgUrl:  `/images/${item.thumbnails}`
            }
        });



        res.render("destination/lieux", {data : data})
    }
}

module.exports = destinationController;