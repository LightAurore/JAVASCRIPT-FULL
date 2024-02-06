'use strict'

function geoPerimetre(obj){
    let msg;

    switch (obj.type) {
        case 'Cercle':
                msg = 2 * Math.PI * obj.rayon;
            break;
        case 'Rectangle':
            msg = (obj.hauteur + obj.largeur) * 2;
            break;
        case 'Triangle':
            let c3 = Math.sqrt(Math.pow(obj.hauteur, 2) + Math.pow(obj.largeur, 2) - (2 * obj.largeur * obj.hauteur * Math.cos(Math.PI / 2)))
            msg = c3 + obj.hauteur + obj.largeur;
            break;
        case 'Carré':
            msg = obj.longueur * 4;
            break;
    
        default:
            break;
    }
    
    return +msg;
}

function geoAire(obj){
    let msg;

    switch (obj.type) {
        case 'Cercle':
                msg =   Math.PI * obj.rayon * obj.rayon;
            break;
        case 'Rectangle':
            msg =  obj.hauteur * obj.largeur ;
            break;
        case 'Triangle':
            msg =  (obj.hauteur * obj.largeur) / 2;
            break;
        case 'Carré':
            msg =  obj.longueur ** 2;
            break;
    
        default:
            break;
    }
    
    return +msg;
}

function perimetre(obj){
    return geoPerimetre(obj)
}
function aire(obj){
    return geoAire(obj);
}


module.exports = {
    perimetre,
    aire
}
