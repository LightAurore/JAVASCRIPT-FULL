import { Sequelize, DataTypes } from "sequelize"

/**
 * Lemodèle genre 
 * @param {Sequelize} sequelize // la paramètre s'appelle sequelise de type Sequelize
 * @returns
 */

export default (sequelize) => {
    // 
    const Actor = sequelize.define('actor', {
        pseudo: {
            type: DataTypes.STRING(100),
            unique:{
                name: 'UK_ACTOR_PSEUDO'
            },
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName: 'actor'
    })

    return Actor;
}