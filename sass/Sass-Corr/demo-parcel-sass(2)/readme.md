# Demo : Parcel + Sass

## Objectif
Mettre en place un serveur Web pour heberger des pages web.

Avantage d'utiliser parcel dans cette demo :
 - Utiliser du SASS sans faire nous même la transcompilation (sass --watch <fichier.scss> <fichier.css>)
 - Parcel detectera qu'on utilise du SASS et il install automatique le necessaire.
 - Minification du code (CSS/JS)
 - Optimisation les images -> Format WebP

Structure des dossiers : 
 - src : Code source de notre projet (html, css, js, png, ...)
 - dist : Code généré par Parcel durant le dev
 - build : Code optimisé généré par Parcel

## Mise en place du projet
#### 1) Installer « Parcel » dans le dossier
```
npm install parcel
```

#### 2) Créer le structure des dossiers / fichiers
```
src
 +- assets
 |   +- css
 |   |   +- index.scss
 |   +- images
 |       +- demo.png
 +- index.html
 +- favicon.ico
```

#### 3) Ecrire le code "de base" des fichiers html et css
#### 4) Ajouter avec une balise link:css vers le fichier SASS
```
<link rel="stylesheet" href="assets/css/index.scss">
```

#### 5) Commande pour tester Parcel
 - Mode "dev" pour tester notre code
```
npx parcel src/index.html
```
 - Mode "prod" pour générer un code optimiser dans le dossier "build"
```
npx parcel build src/index.html --dist-dir build
```
Remarque : remplacer « src/index.html » par «src/*.html » pour qu'il traite tous les fichiers html du projet.

#### 6) Configurer le fichier « package.json » pour ajouter les commandes

- Ajouter le code suivante dans le fichier
```
{
  "name": "demo-parcel-sass",
  "scripts": {
    "start": "parcel src/*.html --open",
    "build": "parcel build src/*.html --dist-dir build"
  },
  ...
}
```
- Commande pour le dev
```
npm start
```
 - Commande pour générer le code de production
```
npm run build
```

