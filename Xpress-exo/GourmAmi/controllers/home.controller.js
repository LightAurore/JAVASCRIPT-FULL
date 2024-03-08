const recipeService = require('../services/recipe.service');
const recipeCardTool = require('../tools/recipeCard.tool');
const mockup = require('./mockups/recipes.json');

const homeController = {
    index: async (req, res)=>{
        // Obtenir le dernier element ajouté

        const recipes = await recipeService.getAll();

        const ajout = recipes[recipes.length - 1];
        const viewNewData = recipeCardTool(ajout);
        // 
        let random = Math.floor(Math.random() * recipes.length );
        let today = new Date().getDay();
        
        const jour =  recipes[today % recipes.length];
        const viewDayData = recipeCardTool(jour);

        res.render('home/index', { viewNewData, viewDayData });
    },
    about: async (req, res)=>{
        res.render('home/about');
    },
    contact: async (req, res)=>{
        res.render('home/contact');
    },
    dashboard: async (req, res)=>{
        res.render('home/dashboard');
    }
}

module.exports = homeController;