# Les trois couches 
    ↠ Couche de présentation : niveau un  "Client ⇀ envoie des requêtes" (terminal ou machine)
        La couche de présentation relaie les requêtes de l'utilisateur à destination de la couche de traitement, et en retour lui présente les informations renvoyées par les traitements de cette couche. Il s'agit donc ici d'un assemblage de services métiers et applicatifs offerts par la couche inférieure. 
        une ressource via une interface utilisateur (généralement un navigateur web)
        ° WPF 
    ↠ Couche de traitement : niveau deux  "Server ⇀ attends les requêtes et y répond, offre un service aux clients"
        implémente la logique métier
        Les différentes règles de gestion et de contrôle du système sont mises en œuvre dans cette couche.
        d'application (appelé middleware)

        Flux de traitement : 

            En résumé, lorsqu'un client envoie une requête à l'application :

            la requête envoyée depuis la vue est analysée par le contrôleur (via par exemple un handler ou callback) ;
            le contrôleur demande au modèle approprié d'effectuer les traitements et notifie à la vue que la requête est traitée ;
            la vue notifiée fait une requête au modèle pour se mettre à jour (par exemple affiche le résultat du traitement via le modèle).

    ↠ Couche d'accès aux données : niveau trois
        gérant l'accès aux données de l'application

    Pour une implémentation « native », le patron de conception (en anglais design pattern) à implémenter dans cette couche est le Data Access Object (DAO).

    nb : Le client et le serveur doivent bien sûr utiliser le même protocole de communication au niveau de la couche transport.


    # MVC Model-Vieuw-Controller
        ↦ Les 3 parties du modèle de conception de logiciel MVC peuvent être décrites comme suit :

            * Model (modèle) : gère les données et la logique métier.
                les données : validation, lecture et enregistrement
                Par exemple pour une application de banque, le modèle représente des comptes, des clients, ainsi que les opérations telles que dépôt et retraits, et vérifie que les retraits ne dépassent pas la limite de crédit.

            * View (vue) : gère la disposition et l'affichage.
                Une vue contient des éléments visuels ainsi que la logique nécessaire pour afficher les données provenant du modèle.
                peut être un diagramme, un formulaire, des boutons, etc

            * Controller (contrôleur) : achemine les commandes des parties "model" et "view".
                Module qui traite les actions de l'utilisateur, modifie les données du modèle et de la vue


    Hibernate
    https://jwt.io/
    dto meaning
    https://fr.wikipedia.org/wiki/Programme_(gestion_de_projet)
    µhttps://fr.wikipedia.org/wiki/Gestion_de_projet
    https://fr.wikipedia.org/wiki/Structure_de_donn%C3%A9es

    Mapping objet-relationnel : ORM signifie Object-Relational Mapping.
    Crypto : méthode randomUUID()




