'use strict';

// Objet avec les diff valeurs possible
const shapeEnum = {
    circle: 1,
    rectangle: 2,
    triangle: 3,
    square: 4
}

// Figé l'objet
Object.freeze(shapeEnum);

// Export
module.exports = shapeEnum;