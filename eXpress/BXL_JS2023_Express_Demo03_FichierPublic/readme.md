# Demo 03 

## Structure du projet
### Arborescence
```
- controllers
- models
- views
- routes
- public
- middlewares
app.js
```

### Description de la structure
- Fichier « app.js » <br>
  *Créer et configurer le serveur express*

- Dossier « controllers » <br>
  *Réaliser le traitement de la requete (Générer une reponse...)*

- Dossier « models » <br>
  *Couche pour permettre l'acces aux données (db, fichier, ...)*

- Dossier « views » <br>
  *Construire l'interface*

- Dossier « routes » <br>
  *Permet d'utiliser le controller adapté en fonction de l'url*

- Dossier « middlewares » <br>
  *Centralise tous les middlewares custom (injecter de la logique avant d'atteindre le controller)*

- Dossier « public » <br>
  *Rendre accessible des fichiers sans passer par le routing*

### Objectifs
- Séparation de responsabilité
- Maintenabilité plus simple

## Etapes de création d'un nouveau 
- Initialiser le projet avec « npm init »
- Installer les dépendences « npm install ... »
- Créer la structure minimum du projet (app.js, readme.md, ...)
- Configurer le « package.json »
  - Ajout des scripts (start, dev)
  - Customiser le fichier si necessaire (type, engines, ...)
- Configurer git
  - Ajouter un .gitignore
  - Initialiser git avec « git init »
  - Faire un commit initial
- Commencer à codé :o