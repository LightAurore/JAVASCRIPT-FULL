

const recipeCardTool = (recipes) =>{
    
    const data = {
            name: recipes.recipename,
            desc: recipes.recipeshortdesc,
            imgUrl:`/images/${recipes.recipeimg}`,
            author: recipes.author.username,
            date:recipes.updatedAt.toLocaleDateString('fr-BE'),
            detailUrl: `/detail/${recipes._id}`
        }

    return data
}

module.exports = recipeCardTool;