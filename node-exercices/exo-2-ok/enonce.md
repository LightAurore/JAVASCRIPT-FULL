# Exo 2 - Les fichiers

Créer un projet NodeJS et le configurer avec NPM.
Ce projet permettra à l'utilisateur de lire des données d'un fichier JSON et de générer des fichiers CSV avec les données traitées.

## Consigne
Lire le fichier « student.json » à l'aide du module "fs" ou "fs/promise".

Après avoir lu et converti les données [Tips: JSON.parse(...)]
Obtenir les données suivantes : 
 - La liste des profs
 - La liste des élèves 
 - La moyenne de chaque section

Une fois les données obtenues, l'utilisateur souhaite la sauvegarder en fichier CSV. 
Pour réaliser la génération des données en format CSV, utiliser un package. 
Exemple de package possible : 
 - https://www.npmjs.com/package/csv-generate
 - https://www.npmjs.com/package/export-to-csv
 - https://www.npmjs.com/package/fast-csv

## Exemple
Fichier « 20240202140352-moyenne.csv »
----------------
Section, Moyenne
1010, 11.66
1310, 17.5
1111, 15.5
----------------