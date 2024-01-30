use('exemple')
db.clients.find({'LOCALITE' :' Toulouse'}, {_id: false, NOM: true, ADRESSE: true})
use('exemple')
db.clients.find({'LOCALITE' :' Poitiers'}, {_id: false, NOM: true, COMPTE: true, COMMANDES: true })

// 1
use('exemple')
db.clients.find({COMPTE : {$gt : 0}}, {_id: false, NOM: true})
// 2
use('exemple')
db.clients.find({COMPTE : {$eq : 0}}, {_id: false, NOM: true, LOCALITE: true})
// 3
use('exemple')
db.clients.find({COMPTE : {$eq : 0}}, {_id: false, LOCALITE: true})

