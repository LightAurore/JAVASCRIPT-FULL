const articleService = require("../services/article.service");
const motSignalerTool = require("../tools/motSignale.tool");


const homeController = {
    index: async (req, res) => {

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

        res.render('home/index');        
    }
};

module.exports = homeController;