use("exemple")

db.getCollection('clients').find({CLIENT_ID: 'B112'})
db.getCollection('clients').find({CLIENT_ID: 'B112'},{_id: false})

use("exemple")
db.clients.deleteOne({
    nom: 'Blop',
    adresse: {
        rue: 'Rue du trou du cul',
        numero: '42',
        localite: 'ColineLand',
        pays: 'PlaisirLand'
    },
    cat: '95D',
    compte: 200.50,
    commandes: [
        {
            ncom: 'B512',
            datecom: '2024-01_26T13:48:56',
            details: [
                {
                    nprod: 'S69',
                    qcom: 2
                }
            ]
        }
    ]
})