# Installer Tailwind avec Parcel
## 1) Créer un dossier "nom-projet"
## 1) Initialisation du projet : 
```
npm init -y → setup le projet (package.json)
```
## 1) Installer parcel
```
    npm install -D parcel
```
## 1) Créer le dossier src avec un fichier index.html dedans

## 2) Installer Tailwind et PostCss
```
    npm install -D tailwindcss postcss
```
## 2) Créer le fichier de configuration Tailwind
```
    npx tailwindcss init
```
## 3) Créer, à la racine, un fichier nommé .postcssrc et y écrire :
```
    {
        "plugins": 
        {
            "tailwindcss": {}
        }
    }
```
## 4) Rajouter dans le tailwind.config.js :
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 5) Ajouter un fichier index.css dans src et y écrire :
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

## 6) Lancer le build 
```
    npx parcel src/index.html
```

## 7) Rajouter dans le head du html :
```
    <link href="./index.css" rel="stylesheet">
```

<hr>
<br>
<br>

# Utils
* <a href="com/docs/guides/parcel">Lien vers la doc Tailwind</a>
* Extension pour prévisualiser les classes Tailwind : Tailwind CSS IntelliSense par Tailwind Labs