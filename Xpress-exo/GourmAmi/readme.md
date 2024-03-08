# Demo 05 - Express + MongoDB

## Get Started
Créer le fichier « .env » sur base du « .env.example ».

Ensuite, dans le terminal
```cmd
npm install
npm run dev
```

## Contenu de la démo
Application Web (Server-Side Rendering - MVC) avec une base de donnée MongoDB.

Fontionnalité : 
- S'enregistrer et se connecter.
- Créer des articles.
- Ajouter des commentaires sur un article.
- Contenu des pages : 
  - Accueil : 5 derniers articles
  - Article : Liste des articles avec un pagination
  - Detail : Article (via son slug) et ses commentaires

## Package

**Serveur Web**
- express: Framework JS pour créer un serveur Web
- express-session: Middleware pour gérer la session
- express-async-errors: Fix de Express pour la synthaxe « async-await »
- morgan: Logger de requete
- ejs: Moteur de vue « EJS » pour générer les pages

**Database**
- mongoose: ORM pour MongoDB

**Divers**
- dotenv: Gestion du fichier .env (Compatible Node v12+)
- yup: Validateur de données (Formulaire)
- nanoid: Générateur d'identifiant
- argon2: Bibliotheque de hashage (Password)

## Structure de fichiers
```
controllers [Traitement de requete]
middlewares [Middleware custom]
models      [Définition de la DB - Mongoose]
public      [Fichier accessible]
routes      [Lien entre l'url et le controller]
services    [Traitement metier (Business)]
validators  [Schema de validation]
views       [Génération du visuel]
 .env
 .gitignore
 app.js
 package.json
 readme.md
```


# Demo de l'utilisation de SocketIO avec Express

Site web de chat en temps réel avec les pages : 
 - Accueil (Room général)
 - Groupe  (Room avec code) 

## Package
**Web Server**
- express
- express-async-errors
- ejs

**Web Socket**
- socket.io

**Divers**
- dotenv

## Get Started
```
npm i express express-session express-async-errors ejs socket.io dotenv
npm i nodemon --save-dev
```

# icon
https://www.flaticon.com/search?word=user&type=uicon
