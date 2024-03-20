import { Sequelize, DataTypes } from "sequelize"


/**
 * Lemodèle genre 
 * @param {Sequelize} sequelize // la paramètre s'appelle sequelise de type Sequelize
 * @returns
 */

export default (sequelize) => {
    // 
    const Movie = sequelize.define('Movie', {
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,

        },
        releaseYear: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        hasSubtitle: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: true,
        tableName: 'Movie'
    })

    return Movie;
}