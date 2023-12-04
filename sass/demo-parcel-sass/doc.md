#

## Objectifs

Mettre en place un serveur web pour hénerger des pages web

Avantage de Parcel
1° Explorer le sass sans faire nous même la transpilation (sass --watch src dest)

2° Parcel détecte qu'on utilise du SASS et il installe automatiquement le nécessaire.

3° Minification

Structure de code
1° Dossier "src" : Code source de notre projet (html, css, js, png, ...)

2° dossier "dist": code final généré par Parcel

## Mise en place du projet

- Installer Parcel dans le dossier
  "" npm i parcel ""



  Ecrire le code des fichierss html et css
  Ajouter avec une balise link:css vers le fichier SASS
  ....

  " dev: npx parcel src/index.html
  prod: npx parcel build src/index.html --dist-dir build


  {
    "name": "demo-parcel-sass",
    "scripts":{
        "start" : "parcel src/index.html --open",
        "build": "parcel build src/index.html --dist-dir build"
    }
  }
