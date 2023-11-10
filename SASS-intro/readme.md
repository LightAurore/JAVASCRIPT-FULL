## Installation de SASS dans un projet

npm i sass --save-dev



## Trancompiler un fichier le code SASS en CSS
----> Une fois
npx sass <fichier.scss> <fichier.css>
npx sass ./scss/style.scss ./css/style.css

----> En continue (save file)
npx sass  --watch <fichier.scss> <fichier.css>
npx sass --watch ./scss/style.scss ./css/style.css

## Trancompiler le contenu d'un dossier le code SASS en CSS
npx sass <dossier SASS>:<dossier CSS>

## ?
sass --watch a.scss:a.css --style compressed
