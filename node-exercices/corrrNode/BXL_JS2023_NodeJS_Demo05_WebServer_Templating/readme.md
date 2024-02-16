# Demo Web Server

## Moteur de vue pour générer les rendus des pages Web
### Liste non exhaustive
- ejs
- Handlebars
- Pug
- Nunjucks
- Mustache
- Hogan.js
- SquirrellyJS

## Fichier pour gérer la config du serveur 
### Exemple de type de fichier possible
```
- .env
- <filename>.json
- <filename>.xml
```

### Objectif
Stocker tout les variables necessaire à votre app. <br>
→ Le fichier peut (doit) changer par rapport à l'environnement (prod/dev/test)

### Choix pour la démo
Utilisation d'un fichier .env
```
# Node v20+
Natif au systeme. Ajouter « --env-file=.env » dans les commandes
```
```
# Node v19-
Necessite l'utilisation d'un dépendence -> dotenv
```
