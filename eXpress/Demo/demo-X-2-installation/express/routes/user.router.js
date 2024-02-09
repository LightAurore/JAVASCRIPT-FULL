const userController = require('../controllers/user.controller');
const routelvlMiddleware = require('../middlewares/routerlvlMiddleware');

const userRouter = require('express').Router();


/*
const users = ['alien','allan','alan','alex'];
let msg;
const message = (array) => {
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        msg.push(`<h2> ${array[i]} </h2></br>`)
        
    }
}
*/

/*
    userRouter.route('/users?')
        .get(() => {})
        .post(() => {})

    userRouter.route('/users?/:id')
        .get(() => {})
        .patch(() => {})
        .put(() => {})
        .delete(() => {})
*/
/*
// users
userRouter.get('/', (req, res)=>{
    res.send("<h1> Liste des utilisateurs </h1>");
    // res.send(`${message(users)}`);
})
*/
userRouter.get('/', routelvlMiddleware, userController.getUsers);

userRouter.post('/', userController.postUser);

// user dynamique by id 
/*
userRouter.get('/users?/:id', (req, res)=>{

    // pour récupérer les paramètres
    // req.params.id
    res.send(`<h1>Afficher un utilisateur dont l'id est ${req.params.id}</h1>`);
})
*/

// user dynamique by id 
userRouter.get('/:id([0-9]+)', userController.getUserById)

module.exports = userRouter