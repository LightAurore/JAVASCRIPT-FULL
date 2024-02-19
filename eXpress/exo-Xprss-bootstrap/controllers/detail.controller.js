const datajson = require('../db/thailand');


const detailController = {
    detail: (req,res) =>{

        const id = parseInt(req.params.id);
        let lieuId, data;
        // console.log(id);
        
        const destination = datajson.find(p => {
            lieuId = p.id;
            if(p.id === id){
                // console.log("mon id " + p.id);cls
                data = p;
            }
            return p.id === id;
        }); 

        if (!destination) {
            console.log('Destination not found');
            res.render('destination/lieu-notfound');
            return;
        }

        // const data = datajson[lieuId];
        res.render("visite/details", {data : data})
    }
}

module.exports = detailController;