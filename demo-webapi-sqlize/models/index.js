import { Sequelize } from "sequelize";
import genreBuilder from './genre.model.js';
import actorBuilder from './actor.model.js';
import movieBuilder from './movie.model.js';

const {DB_NAME, DB_DIALECT,DB_HOST,DB_PORT,DB_USERNAME ,DB_PASSWORD } = process.env;

// 
const sequelize = new Sequelize(DB_NAME,DB_USERNAME ,DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
})

// 
const db = {};

// 
db.sequelize = sequelize;

// 
db.Genre = genreBuilder(sequelize);
db.Actor = actorBuilder(sequelize);
db.Movie = movieBuilder(sequelize);

// ! Ajouter les relations
// ? [One to many] Genre - Movie
db.Movie.hasMany(db.Genre, {
    foreignKey:{
        allowNull: false
    },
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION'
});
db.Genre.belongsTo(db.Movie);

// ? [many to many] Actor - Movie
db.Movie.belongsToMany(db.Actor, {through: 'Movie_Actor'});
db.Actor.belongsToMany(db.Movie, {through: 'Movie_Actor'});

export default db;
