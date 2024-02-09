#   créer un projet Express : 
## 1) Créer un projet Node
```
    npm init
```

````
npm i -D nodemon (pour dev)
```

Structure du projet : 
- controllers -> logique de traitement en fonction de la route et de la méthode, on va renvoyer une vue (si templating) ou une réponse API (si api) avec success ou error 
- middlewares -> va intercepter la réquête et faire des traîtements dessus (plusieurs types de middleware (app, route, error))
- modelss -> model représentant nos objects en DB (en fonction du langage, mongoose si mongo, sequilize si qsl (type-orm si sql en typescript))
- routes ->  définition de toutes les routes de notre application
- services -> logique d'appel DB en fonction des models
- validators -> grâce à une librairie (la plus connue : yup), on définit les schémas des objets JSON qu'on s'attend à recevoir
- views (si en mode templating) ->  vos pages de rendu html avec de lib de votre choix (ejs merci)
- app.js -> 

## 2) Installer Express
<a href="https://expressjs.com/en/starter/installing.html"></a>
    npm i express


</br>
</hr>

### Bonus : 
### Extension gitignore par CodeZombie

```
En appuyant sur f1, vous permet de créer un gitignore pour le type de technologie
```

// middleware
https://www.npmjs.com/package/multer
//