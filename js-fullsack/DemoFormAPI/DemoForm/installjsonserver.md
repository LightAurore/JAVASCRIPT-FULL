# Installation : 
* Option 1 : Dans le dossier où vous allez faire votre FakeApi 
    ```
        npm install json-server
    ```
* Option 2 : On installe json-server sur tout le pc et donc osef du dossier :
    ```
        npm install -g json-server
    ```

# Setup :
* Créer un fichier db.json (Représentera notre db sous format json)
* Pré-remplir le json avec les "tables" dont on a besoin
Exemple : 
```
{
    "users" : [
        { 
            "id" : 1,
            "lastname" : "Strimelle",
            "firstname" : "Aurélien",
            "email" : "austri@oui.be",
            "password": "test1234"
        }
    ],
    "dogs": [
        {
            "id" : 1,
            "name" : "Regex",
            "owner" : 1
        }
    ]
}
```

# Lancement de la fakeAPI :
* Attention à être dans le bon dossier ou à mettre le chemin complet jusque db.json
```
    npx json-server db.json
```

# Tada !
Vous avez ensuite accès à vos objets via http://localhost:3000/nomObjet
exemple ici, nous avons http://localhost:3000/users et http://localhost:3000/dogs de dispo
Nous pouvons les consulter en get, post, put, patch, delete