const shapeEnum = require("../enums/shape.enum");

function checkShapeIsValid(shape) {

    if (shape.type === shapeEnum.circle && shape.hasOwnProperty('radius')) {
        return true;
    }

    if ((shape.type === shapeEnum.rectangle || shape.type === shapeEnum.triangle)
        && shape.hasOwnProperty('height') && shape.hasOwnProperty('width')) {
        return true;
    }

    if (shape.type === shapeEnum.square && shape.hasOwnProperty('base')) {
        return true;
    }

    return false;
}

function calcArea(shape) {
    let result;

    switch (shape.type) {
        case shapeEnum.rectangle:
            result = shape.width * shape.height;
            break;
        case shapeEnum.square:
            result = shape.base ** 2;
            break;
        case shapeEnum.triangle:
            result = (shape.width * shape.height) / 2;
            break;
        case shapeEnum.circle:
            result = Math.PI * (shape.radius ** 2);
            break;
    }

    return result;
}

function calcPerimetre(shape) {
    let result;

    switch (shape.type) {
        case shapeEnum.rectangle:
            result = (shape.width + shape.height) * 2;
            break;
        case shapeEnum.square:
            result = shape.base * 4;
            break;
        case shapeEnum.triangle:
            const hyp = Math.sqrt((shape.width ** 2) + (shape.height **2))
            result = shape.width + shape.height + hyp;
            break;
        case shapeEnum.circle:
            result = 2 * Math.PI * shape.radius;
            break;
    }

    return result;
}

const shapeTool = {

    area: (shape) => {
        if (!checkShapeIsValid(shape)) {
            throw new Error('Shape invalide');
        }
        return calcArea(shape);
    },

    perimetre: (shape) => {
        if (!checkShapeIsValid(shape)) {
            throw new Error('Shape invalide');
        }
        return calcPerimetre(shape);
    }

};

module.exports = shapeTool;
