import { Sequelize, DataTypes } from "sequelize"


/**
 * Lemodèle genre 
 * @param {Sequelize} sequelize // la paramètre s'appelle sequelise de type Sequelize
 * @returns
 */
export default (sequelize) =>{
    // 
    const Genre = sequelize.define('Genre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: {
                name: 'UK_Genre__Name',
            }
        }

    }, {
        tableName: 'Genre',
        timestamps: false,
    });   // nom , les attributs ↦ colonnes de la table et modèle option

    return Genre;
}
