# Créer un projet Express :

## 1) Créer un projet Node
```
    npm init
```
```
    npm i -D nodemon (pour dev)
```


Structure du projet :
- controllers -> logique de traitement en fonction de la route et de la méthode, on va renvoyer une vue (si templating) ou un réponse API (si api) avec success ou error
- middlewares -> va intercepter la requête et faire des traitements dessus (plusieurs types de middleware (app, route, error))
- models -> model représentant nos objets en db (en fonction du langage, mongoose si mongo, sequelize si sql (type-orm si sql en typescript))
- routes -> définition de toutes les routes de notres application 
- services -> logique d'appel DB en fonction des models
- validators -> grâce à une librairie (la plus connue : yup), on définit les schémas des objets json qu'on s'attend à recevoir
- views (si en mode templating) -> vos pages de rendu html avec lib de votre choix (ejs merci)
- app.js


## 2) Installer Express
<a href="https://expressjs.com/en/starter/installing.html" target="_blank">Doc install Express</a>
```
    npm i express
```

<br>
<hr>

## Middleware express : 
<a href="https://github.com/senchalabs/connect#middleware">https://github.com/senchalabs/connect#middleware </a>



<br>
<hr>

### Bonus :
#### Extension gitignore par CodeZombie
```
    En appuyant sur F1, vous permet de créer un gitignore pour le type de techno selectionné (La flemme jusqu'au bout)
```
