<!-- homerouter.get('/car/:cat/:marque/:prix', controller) -->

# Demo 05 - Express + MongoDB

## Package
    - express: Framework Web server
    - dotenv
    - morgan
    - ejs
    - nodemon


## Structure
```
controllers [Traitement de la requete]
middlewares [Middleware custom]
public      [Fichier accessible]
routes      [Lien entre l'url et le controller]
services    [Traitement metier (Business)]
views       [Génération du visuel]
    .env
    .gitignore
    app.js
    package.json
    readme.md
```

## schema
° article 
    - titre : String
    - slug : String
    - tag : String[]
    - desc : String ?
    - date (creta / update) 
    - contents : String
    - comments
        - message : String
        - rating : Number
        - date (creta / update) 
        - isVisible : Boolean
    
    
npm i nanoid