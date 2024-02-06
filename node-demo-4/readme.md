# Demo Web Server

## Fichiers pour gérer le config du serveur

- .env
- <filename>.json
- <filename>.xml
- ...

### Objectif : 
Stocker toutes les variables nécessaires à votre app. <br>
→ Le fichier peut (doit) changer par rapport à l'environnement (prod/dev/test)

### choix pour le démo
Utilisation d'un fichier .env (Depuis Node v20+, ils peuvent être chargé nativement)
```
# Node V20+
Natif au systeme. Ajouter " --env-file=.env "  dans les commandes

#
```

