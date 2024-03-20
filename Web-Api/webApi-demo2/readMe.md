#   Demo Web Api 02 - Swagger
Mise en place d'un API documenté avec Swagger

## SwaggerFonctionnalité de l'API
Gestion d'équipe pour des activités sportives
    - Ajouter ou modifier des joueurs
    - Ajouter, modifier ou supprimer une équipe
    - Ajouter ou retirer des joueurs dans une équipe
    - Obtenir les infos d'une équipe
    - Obtenir la liste des équipes

### Structure de données
    Equipe:
    - Id
    - Nom
    - Sport
    - Périodicité
    - Joueurs

    Joueur:
    - Email
    - Prénom
    - Nom

### Endpoints
    Joueur : 
        - [POST] /player
        - [GET] /player/:email
        - [PUT] /player /:email  (Put, pour une mise à jour complète)

    Equipe : 
        - [GET] /team
        - [POST] /team
        - [GET] /team/:id
        - [PUT] /team/:id
        - [DELETE] /team/:id
        - [PATCH] /team/:id/addPlayer
        - [PATCH] /team/:id/removePlayer

## Dépendences
    Prod
    - express
    - express-async-errors
    - express-jsdoc-swagger
    - dotenv
    - morgan
    Dev
    - nodemon

1° npm init -y

2° npm i express express-async-errors dotenv morgan


