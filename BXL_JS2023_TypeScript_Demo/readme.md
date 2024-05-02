# Demo 01 - TypeScript
L'objectif de typescript : Ajouter du typage static en JS
Cela permet d'avoir un code plus maintenable et permet d'éviter des bugs

## Dépendances 
```
npm i typescript --save-dev
```

## Utilisation de TypeScript
### Intro
```
npx tsc ./src/index.ts
```
Si on utilise TypeScript sans réaliser de config, celui-ci transcompile le code TS vers du JS avec la norme ES3 (1999)

### Configuration
Commande pour générer un fichier de config pour TS
```
npx tsc --init
```
A vous de le customiser au besoin :)


Commande a utiliser (Ajouter au package.json) :
```
"scripts": {
    "compile" : "tsc",
    "watch": "tsc --watch"
},
```