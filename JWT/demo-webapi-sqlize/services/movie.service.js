import db from "../models/index.js";

const movieService = {
    add: async (movieData) =>{
        // { title: 'test', releaseYear: 2014, duration:120, genre: 'Action}


        // 
            let genre = await db.Genre.findOne({
            where: {
                name: movieData.genre
            }
        });

        if(!genre){
            genre = await db.Genre.create({
                name : movieData.genre
            })
        }
         
/* 
        const [genre, isCreated] = await db.Genre.findOrCreate({
            where: {
                name: movieData.genre
            },
            defaults: {
                name: movieData.genre
            }
        })
        
 */
        // 
        const movie = await db.Movie.create({
            title: movieData.title,
            releaseYear: movieData.releaseYear,
            duration: movieData.duration,
            hasSubtitle: movieData.hasSubtitle,
            GenreId: genre.id
        });
        console.log(movie);
    }
}

export default movieService;