const datajson = require('../db/thailand');


const detailController = {
    detail: (req,res) =>{

        const id = +((req.params.id).slice(1)) - 1;
        console.log(id);
        const data = datajson[id];



        res.render("visite/details", {data : data})
    }
}

module.exports = detailController;