const articleService = require("../services/article.service");

const homeController = {

    index: async (req, res) => {

        console.log(req.session.user?.name ?? 'Non connecté');

<<<<<<< HEAD
        res.render('home/index');
=======
            const article = {
                title: "Demo MongoDb + Mongoose",
                slug: "demo-mongodb-mongoose",
                tag : ["demo-mongodb-mongoose", "Express","mongoose"],
                desc: "This is a demo of Mongoose + MongoDb",
                content: "This is a demo of Mongoose + MongoDb"
            }
            
            const data = await articleService.create(article);
            console.log(data);
            
            let message = "Ton article est intéressant et il m'a beaucoup aidé dans ma formation, integriste";
            
            const filterWord = (message, arr)=>{
                arr.forEach(word => {
                    if(message.includes(word)){
                        return "Votre message est bloqué";
                    }
                    return message;
                })
            }
            
            await articleService.addComment(data.slug, filterWord("Fonctionne 👨‍💻 !", motSignalerTool));
        }
        */

        console.log(req.session.user?.name ?? 'Non connecté');

        res.render('home/index');        
>>>>>>> e3bc91a4173909219e50c32aa479023c37704b5e
    }

};

module.exports = homeController;